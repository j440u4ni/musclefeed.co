import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Layout, Icon, Button, Empty, Radio } from 'antd';
import { Card, Elevation, Checkbox, InputGroup } from '@blueprintjs/core';

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
const RadioGroup = Radio.Group;
const CheckboxGroup = Checkbox.Group;

class SAdminProductNew extends Component {
  constructor(props) { super(props); this.state = { user : null, categoryVisible: false, perfumeVisible: false, weightVisible: false, selectedPrices: [],
                                                    categories: null, perfumes: null, weights: null, selectedCategory: 1, selectedPerfumes: [], selectedWeights: [] };
    this.onCategory = this.onCategory.bind(this); this.onPerfume = this.onPerfume.bind(this); this.onWeight = this.onWeight.bind(this); 
    this.onCloseCategory = this.onCloseCategory.bind(this); this.onCloseWeight = this.onCloseWeight.bind(this); this.onClosePerfume = this.onClosePerfume.bind(this);
    this.onSelectCategory = this.onSelectCategory.bind(this); this.onSelectPerfume = this.onSelectPerfume.bind(this); this.onInputPrice = this.onInputPrice.bind(this);
    this.onSelectWeight = this.onSelectWeight.bind(this);
  }
  componentDidMount() { const { dispatch } = this.props;
    dispatch(fetchAllProductCategories()); dispatch(fetchAllProductPerfumes()); dispatch(fetchAllProductWeights());
    if(this.props.user && typeof this.props.user === "string") { this.setState({ user : JSON.parse(this.props.user) }); }
    if(this.props.weights && typeof this.props.weights === "string") { this.setState({ weights : typeof this.props.weights === "string" && this.props.weights.length > 2 ? JSON.parse(this.props.weights) : this.props.weights }); }
    if(this.props.perfumes && typeof this.props.perfumes === "string") { this.setState({ perfumes : typeof this.props.perfumes === "string" && this.props.perfumes.length > 2 ? JSON.parse(this.props.perfumes) : this.props.perfumes }); }
    if(this.props.categories && typeof this.props.categories === "string") { this.setState({ categories : typeof this.props.categories === "string" && this.props.categories.length > 2 ? JSON.parse(this.props.categories) : this.props.categories }); }
  }
  componentDidUpdate(previous) { 
    if(previous.user !== this.props.user) { this.setState({ user : JSON.parse(this.props.user) }); } 
    if(previous.categories !== this.props.categories) { this.setState({ categories : typeof this.props.categories === "string" && this.props.categories.length > 2 ? JSON.parse(this.props.categories) : this.props.categories }); } 
    if(previous.weights !== this.props.weights) { this.setState({ weights : typeof this.props.weights === "string" && this.props.weights.length > 2 ? JSON.parse(this.props.weights) : this.props.weights }); } 
    if(previous.perfumes !== this.props.perfumes) { this.setState({ perfumes : typeof this.props.perfumes === "string" && this.props.perfumes.length > 2 ? JSON.parse(this.props.perfumes) : this.props.perfumes }); } 
  }

  onCategory() { this.setState({ categoryVisible: true }); }
  onPerfume() { this.setState({ perfumeVisible: true }); }
  onWeight() { this.setState({ weightVisible: true }); }

  onCloseCategory() { this.setState({ categoryVisible: false }); this.forceUpdate(); }
  onClosePerfume() { this.setState({ perfumeVisible: false }); this.forceUpdate(); }
  onCloseWeight() { this.setState({ weightVisible: false }); this.forceUpdate(); }

  onSelectCategory(event) { this.setState({ selectedCategory: event.target.value }); }
  onSelectPerfume(event) { if((this.state.selectedPerfumes === null || this.state.selectedPerfumes.indexOf(event.target.id) === -1) && event.target.checked) { this.setState({ selectedPerfumes: [...this.state.selectedPerfumes, event.target.id]}); }
                           else if((this.state.selectedPerfumes !== null && this.state.selectedPerfumes.indexOf(event.target.id) !== -1) && !event.target.checked) { this.state.selectedPerfumes.splice(this.state.selectedPerfumes.indexOf(event.target.id), 1); } }
  onSelectWeight(event) {  if(this.state.selectedWeights.indexOf(event.target.id) === -1 && event.target.checked) { this.setState({ selectedWeights: [...this.state.selectedWeights, event.target.id]}); } 
                          else if(this.state.selectedWeights.indexOf(event.target.id) !== -1 && !event.target.checked) { this.state.selectedWeights.splice(this.state.selectedWeights.indexOf(event.target.id), 1); } }
  onInputPrice(event) { if(this.state.selectedPrices.indexOf(event.target.id) === -1) { const id = event.target.id; const prices = { id: id, price: parseFloat(event.target.value) }; console.log(prices); this.setState({ selectedPrices: [...this.state.selectedPrices.filter((element) => { return element.id != id }), prices] }); }}

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
                    <RadioGroup onChange={this.onSelectCategory} value={this.state.selectedCategory} className="d-flex flex-column">
                      { this.state.categories && typeof this.state.categories === "string" && this.state.categories.length <= 2 ? <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description={<span className="box-notfound-description">Aucune catégorie</span>} className="box-notfound-error mt-2" /> 
                      : this.state.categories && Array.isArray(this.state.categories) && this.state.categories.map((item) => { return(<Radio value={item.id} key={item.id}><span className="checkbox-title">{item.name}</span></Radio>); }) }
                    </RadioGroup>
                  </Card>
                  <Card interactive={true} elevation={Elevation.TWO} className="mt-2 bp3-dark p-2">
                    <h5 className="box-title-white">Parfums</h5>
                    { this.state.perfumes && typeof this.state.perfumes === "string" && this.state.perfumes.length <=2 ? <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description={<span className="box-notfound-description">Aucun parfum</span>} className="box-notfound-error mt-2" />
                    : this.state.perfumes && Array.isArray(this.state.perfumes) && this.state.perfumes.map((item) => { return(<Checkbox key={item.id} className="checkbox-title" onChange={this.onSelectPerfume} id={item.id}>{item.name}</Checkbox>); }) }

                  </Card>
                  <Card interactive={true} elevation={Elevation.TWO} className="mt-2 bp3-dark p-2">
                    <h5 className="box-title-white">Poids & Quantités.</h5>
                    <div class="d-flex flex-column">
                    { this.state.weights && typeof this.state.weights === "string" && this.state.weights.length <= 2 ? <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description={<span className="box-notfound-description">Aucune poids</span>} className="box-notfound-error mt-2" /> 
                    : this.state.weights && Array.isArray(this.state.weights) && this.state.weights.map((item) => { return(
                      <div className="row p-0 m-0 mt-1">
                        <div className="col-6 p-0 m-0"><Checkbox onChange={this.onSelectWeight} id={item.id} className="checkbox-title">{item.name}</Checkbox></div>
                        <div className="col-6 p-0 m-0"><InputGroup ref={item.id} id={item.id} className={item.id + "-price"} leftIcon={<Icon icon={"dollar"} iconSize={12}/>} placeholder="Prix" type="number" small={true} onChange={this.onInputPrice} /></div>
                      </div>
                    ); }) }
                    </div>
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