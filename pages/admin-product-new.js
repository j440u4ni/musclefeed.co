import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Layout, Icon, Button } from 'antd';
import { Card, Elevation } from '@blueprintjs/core';

import { GuestHeader } from '../source/components/component-header-guest';
import { AdminNavbar } from '../source/components/component-navbar-admin';
import { AdminSider }  from '../source/components/fragments-tools/admin-sider';
import { AdminHeader }  from '../source/components/fragments-tools/admin-header';

import { SAddProductPerfume } from '../source/components/component-add-perfume';
import { SAddProductWeight } from '../source/components/component-add-weight';
import { SAddProductCategory } from '../source/components/component-add-category';

import '../static/resources/admin-account.scss';

const { Content, Footer } = Layout;

class SAdminProductNew extends Component {
  constructor(props) { super(props); this.state = { user : null, categoryVisible: false, perfumeVisible: false, weightVisible: false };
    this.onCategory = this.onCategory.bind(this); this.onPerfume = this.onPerfume.bind(this); this.onWeight = this.onWeight.bind(this); 
    this.onCloseCategory = this.onCloseCategory.bind(this); this.onCloseWeight = this.onCloseWeight.bind(this);
  }
  componentDidMount() { if(this.props && typeof this.props.user === "string") { this.setState({ user : JSON.parse(this.props.user) }); } }
  componentDidUpdate(previous) { if(previous.user !== this.props.user) { this.setState({ user : JSON.parse(this.props.user) }); } }

  onCategory() { this.setState({ categoryVisible: true }); }
  onPerfume() { this.setState({ perfumeVisible: true }); }
  onWeight() { this.setState({ weightVisible: true }); }

  onCloseCategory() { this.setState({ categoryVisible: false }); }
  onClosePerfume() { this.setState({ perfumeVisible: false }); }
  onCloseWeight() { this.setState({ weightVisible: false }); }

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
                <div className="col-3">
                  <Card interactive={true} elevation={Elevation.TWO} className="bp3-dark">
                  </Card>
                  <Card interactive={true} elevation={Elevation.TWO} className="mt-2 bp3-dark">
                  </Card>
                  <Card interactive={true} elevation={Elevation.TWO} className="mt-2 bp3-dark">
                  </Card>
                </div>
                <div className="col-9">
                  <Card interactive={true} elevation={Elevation.TWO} className=" bp3-dark">
                  </Card>
                </div>
              </div>
            </Content>
          </Layout>
          { this.state.categoryVisible && <SAddProductCategory onClose={this.onCloseCategory} /> }
          { this.state.weightVisible && <SAddProductWeight onClose={this.onClosePerfume} /> }
          { this.state.perfumeVisible && <SAddProductPerfume onClose={this.onCloseWeight} /> }
        </Layout>
      </React.Fragment>
    )
  }
}

function mapStateToProps(state)  { const { user, logged } = state.authenticationReducer; return { user, logged }; }
const connectReduxAdminProductNew = connect(mapStateToProps)(SAdminProductNew);
export default connectReduxAdminProductNew;