import React, { Component } from 'react';
import { Layout, Button, Modal, Icon } from 'antd';
import Link from 'next/link';

import { logoutService } from '../redux-helpers/authentication-helper';
import '../../../static/resources/admin-account.scss';

const { Header } = Layout;
const { confirm } = Modal;

export class AdminHeader extends Component {
  constructor(props) { super(props); this.state = { user : null }; this.onLogOut = this.onLogOut.bind(this); }
  componentDidMount() { if(this.props.hasOwnProperty('user') && typeof this.props.user === "string") { this.setState({ user : JSON.parse(this.props.user) }); } }
  componentDidUpdate(previous) { if(this.props.hasOwnProperty('user') && previous.user !== this.props.user) { this.setState({ user : JSON.parse(this.props.user) }); } }
  onLogOut() { confirm({ title: 'Voulez-vous vraiment vous déconnecter ?', content: 'Souhaitez-vous vous déconnecter ?', onOk() { logoutService(true); }, onCancel() {}, }); }

  render() {
    return (
      <React.Fragment>
          <Header style={{ background: '#ffffff', padding: 0, height: '36px' }} className="application-admin-header p-0">
            <div className="d-flex flex-row justify-content-end sub-admin-header p-0 align-items-center px-3">
              <Link href="/user-account"><span className="admin-information-first">{ this.state.user && this.state.user.firstname + ' ' + this.state.user.lastname }</span></Link>
              <Button type={"danger"} onClick={this.onLogOut} shape="circle" className="ml-2 p-0"><Link href="/user-cart"><Icon type="poweroff" className="button-icon-header" /></Link></Button>
            </div>
          </Header>
      </React.Fragment>
    )
  }
}

AdminHeader.defaultProps = { user: null };