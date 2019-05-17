import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Layout } from 'antd';

import { GuestHeader } from '../source/components/component-header-guest';
import { AdminNavbar } from '../source/components/component-navbar-admin';
import { AdminSider }  from '../source/components/fragments-tools/admin-sider';
import { AdminHeader }  from '../source/components/fragments-tools/admin-header';

import { fetchAllProducts } from '../source/components/redux-actions/product-action';
import '../static/resources/admin-account.scss';

const { Content, Footer } = Layout;

class SAdminProducts extends Component {
  constructor(props) { super(props); this.state = { user : null, products: null }; }
  componentDidMount() { const { dispatch } = this.props; dispatch(fetchAllProducts());
    if(this.props.user && typeof this.props.user === "string") { this.setState({ user : typeof this.props.user === "string" && this.props.user.length > 2 ? JSON.parse(this.props.user) : this.props.user }); } 
    if(this.props.products && typeof this.props.products === "string") { this.setState({ products: typeof this.props.products === "string" && this.props.products.length > 2 ? JSON.parse(this.props.products) : this.props.products }); } }
  componentDidUpdate(previous) { 
    if(previous.user !== this.props.user) { this.setState({ user : JSON.parse(this.props.user) }); } 
    if(previous.products !== this.props.products) { this.setState({ products: JSON.parse(this.props.products) }); }
  }

  render() {
    return (
      <React.Fragment>
        <GuestHeader title={this.state.user !== null ? this.state.user.firstname + ' ' + this.state.user.lastname : 'Muscle Feed | Administrateur' } description="Boutique en ligne de compléments alimentaires et de protéines pour la musculation à prix cassé. Le meilleur de la construction musculaire : proteines, gainer, bcaa, bruleur de graisses, booster." />
        <Layout>
          <AdminSider />
          <Layout>
            <AdminHeader user={JSON.stringify(this.state.user)} />
            <Content style={{ backgroundColor: '#ffffff' }} className="product-global">
            </Content>
          </Layout>
        </Layout>
      </React.Fragment>
    )
  }
}

function mapStateToProps(state)  { const { user, logged } = state.authenticationReducer; const { products } = state.adminReducer; return { user, logged, products }; }
const connectReduxAdminProducts = connect(mapStateToProps)(SAdminProducts);
export default connectReduxAdminProducts;