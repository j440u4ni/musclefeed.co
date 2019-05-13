import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Layout } from 'antd';

import { GuestHeader } from '../source/components/component-header-guest';
import { AdminNavbar } from '../source/components/component-navbar-admin';
import { AdminSider }  from '../source/components/fragments-tools/admin-sider';
import { AdminHeader }  from '../source/components/fragments-tools/admin-header';

import '../static/resources/admin-account.scss';

class SAdminPayments extends Component {
  constructor(props) { super(props); this.state = { user : null }; }
  componentDidMount() { if(this.props && typeof this.props.user === "string") { this.setState({ user : JSON.parse(this.props.user) }); } }
  componentDidUpdate(previous) { if(previous.user !== this.props.user) { this.setState({ user : JSON.parse(this.props.user) }); } }

  render() {
    return (
      <React.Fragment>
        <GuestHeader title={this.state.user !== null ? this.state.user.firstname + ' ' + this.state.user.lastname : 'Muscle Feed | Administrateur' } description="Boutique en ligne de compléments alimentaires et de protéines pour la musculation à prix cassé. Le meilleur de la construction musculaire : proteines, gainer, bcaa, bruleur de graisses, booster." />
        <Layout>
            <AdminSider />
            <AdminHeader user={JSON.stringify(this.state.user)} />
        </Layout>
      </React.Fragment>
    )
  }
}

function mapStateToProps(state)  { const { user, logged } = state.authenticationReducer; return { user, logged }; }
const connectReduxAdminPayments = connect(mapStateToProps)(SAdminPayments);
export default connectReduxAdminPayments;