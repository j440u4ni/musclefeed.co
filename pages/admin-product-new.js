import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Layout, Icon, Button, Empty } from 'antd';
import { Card, Elevation } from '@blueprintjs/core';

import { GuestHeader } from '../source/components/component-header-guest';
import { AdminNavbar } from '../source/components/component-navbar-admin';
import { AdminSider }  from '../source/components/fragments-tools/admin-sider';
import { AdminHeader }  from '../source/components/fragments-tools/admin-header';

import { SAddProductPerfume } from '../source/components/component-add-perfume';
import { SAddProductWeight } from '../source/components/component-add-weight';
import { SAddProductCategory } from '../source/components/component-add-category';

import { fetchAllProductCategories, fetchAllProductWeights, fetchAllProductPerfumes } from '../source/components/redux-actions/product-action';

import '../static/resources/admin-account.scss';

const { Content, Footer } = Layout;

class SAdminProductNew extends Component {
  constructor(props) { super(props); this.state = { user : null, categoryVisible: false, perfumeVisible: false, weightVisible: false, categories: null, perfumes: null, weights: null };
    this.onCategory = this.onCategory.bind(this); this.onPerfume = this.onPerfume.bind(this); this.onWeight = this.onWeight.bind(this); 
    this.onCloseCategory = this.onCloseCategory.bind(this); this.onCloseWeight = this.onCloseWeight.bind(this); this.onClosePerfume = this.onClosePerfume.bind(this);
  }
  componentDidMount() { const { dispatch } = this.props;
    dispatch(fetchAllProductCategories()); dispatch(fetchAllProductPerfumes()); dispatch(fetchAllProductWeights());
    if(this.props.user && typeof this.props.user === "string") { this.setState({ user : JSON.parse(this.props.user) }); }
    if(this.props.weights && typeof this.props.weights === "string") { this.setState({ weights : this.props.weights }); }
    if(this.props.perfumes && typeof this.props.perfumes === "string") { this.setState({ perfumes : this.props.perfumes }); }
    if(this.props.categories && typeof this.props.categories === "string") { this.setState({ categories : this.props.categories }); }
  }
  componentDidUpdate(previous) { 
    if(previous.user !== this.props.user) { this.setState({ user : JSON.parse(this.props.user) }); } 
    if(previous.categories !== this.props.categories) { this.setState({ categories : this.props.categories }); } 
    if(previous.weights !== this.props.weights) { this.setState({ weights : this.props.weights }); } 
    if(previous.perfumes !== this.props.perfumes) { this.setState({ perfumes : this.props.perfumes }); } 
  }

  onCategory() { this.setState({ categoryVisible: true }); }
  onPerfume() { this.setState({ perfumeVisible: true }); }
  onWeight() { this.setState({ weightVisible: true }); }

  onCloseCategory() { this.setState({ categoryVisible: false }); this.forceUpdate(); }
  onClosePerfume() { this.setState({ perfumeVisible: false }); this.forceUpdate(); }
  onCloseWeight() { this.setState({ weightVisible: false }); this.forceUpdate(); }

  render() {
    return (
      <React.Fragment>
        <GuestHeader title={this.state.user !== null ? this.state.user.firstname + ' ' + this.state.user.lastname : 'Muscle Feed | Administrateur' } description="Boutique en ligne de compléments alimentaires et de protéines pour la musculation à prix cassé. Le meilleur de la construction musculaire : proteines, gainer, bcaa, bruleur de graisses, booster." />
        <Layout>
          <AdminSider />
          <Layout>
            <AdminHeader user={JSON.stringify(this.state.user)} />
            <Content style={{ backgroundColor: '#ffffff' }} className="product-new-global">
              <div className="d-flex flex-row justify-content-center row-product-specifity top-specifity mt-2">
                <Button.Group>
                  <Button type="primary" onClick={this.onCategory}><Icon type="tags" />&nbsp;<span className="button-text">Catégorie</span></Button>
                  <Button type="primary" onClick={this.onPerfume}><Icon type="hourglass" />&nbsp;<span className="button-text">Parfums</span></Button>
                  <Button type="primary" onClick={this.onWeight}><Icon type="hdd" />&nbsp;<span className="button-text">Poids</span></Button>
                </Button.Group>
              </div>
              <div className="d-flex flex-row justify-content-center row-product-specifities rows-two mt-2">
                <div className="col-2">
                  <Card interactive={true} elevation={Elevation.TWO} className="bp3-dark p-2">
                    <h5 className="box-title-white">Catégories</h5>
                    { this.state.categories && typeof this.state.categories === "string" && this.state.categories.length === 2 ? <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description={<span className="box-notfound-description">Aucune catégorie</span>} className="box-notfound-error mt-2" /> : <span>0</span> }
                  </Card>
                  <Card interactive={true} elevation={Elevation.TWO} className="mt-2 bp3-dark p-2">
                    <h5 className="box-title-white">Parfums</h5>
                    { this.state.perfumes && typeof this.state.perfumes === "string" && this.state.perfumes.length === 2 ? <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description={<span className="box-notfound-description">Aucune parfum</span>} className="box-notfound-error mt-2" /> : <span>0</span> }
                  </Card>
                  <Card interactive={true} elevation={Elevation.TWO} className="mt-2 bp3-dark p-2">
                    <h5 className="box-title-white">Poids & Quantités.</h5>
                    { this.state.weights && typeof this.state.weights === "string" && this.state.weights.length === 2 ? <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description={<span className="box-notfound-description">Aucune poids</span>} className="box-notfound-error mt-2" /> : <span>0</span> }
                  </Card>
                </div>
                <div className="col-10">
                  <Card interactive={true} elevation={Elevation.TWO} className=" bp3-dark">
                  </Card>
                </div>
              </div>
            </Content>
          </Layout>
          { this.state.categoryVisible && <SAddProductCategory onClose={this.onCloseCategory} /> }
          { this.state.perfumeVisible && <SAddProductPerfume onClose={this.onClosePerfume} /> }
          { this.state.weightVisible && <SAddProductWeight onClose={this.onCloseWeight} /> }
        </Layout>
      </React.Fragment>
    )
  }
}

function mapStateToProps(state)  { const { user, logged } = state.authenticationReducer; const { weights, perfumes, categories } = state.adminReducer;
                                   return { user, logged, weights, perfumes, categories }; }
const connectReduxAdminProductNew = connect(mapStateToProps)(SAdminProductNew);
export default connectReduxAdminProductNew;