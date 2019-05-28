import React, { Component } from 'react';
import { Layout, Button, Modal, Icon } from 'antd';
import { connect } from 'react-redux';
import Link from 'next/link';

import { logoutService } from '../components/redux-helpers/authentication-helper';
import logo from '../../static/resources/images/logo-fredoka-v4@2x.png';
const { Header } = Layout;
const { confirm } = Modal;

class FUserNavbar extends Component {
    constructor(props) { super(props); this.state = { user : null }; this.onLogOut = this.onLogOut.bind(this); }
    componentDidMount() { if(this.props && typeof this.props.user === "string") { this.setState({ user : JSON.parse(this.props.user) }); this.forceUpdate(); }  }
    componentDidUpdate(previous) { if(previous.user !== this.props.user) { this.setState({ user : JSON.parse(this.props.user) }); } }
    onLogOut() { confirm({ title: 'Voulez-vous vraiment vous déconnecter ?', content: 'Souhaitez-vous vous déconnecter ?', onOk() { logoutService(false); }, onCancel() {}, }); }

    render() {
        return(
        <React.Fragment>
            <Header className="user-navbar">
            <div className="container">
                <div className="row d-flex flex-row justify-content-space-between">
                    <Link href="/user-account" className="mr-auto mt-2"><img src={logo} className="user-application-logo mt-2" /></Link>
                    <span className="ml-auto user-name">{ this.state.user && this.state.user.firstname + ' ' + this.state.user.lastname }&nbsp; <Button type={"link"} onClick={this.onLogOut} shape="circle" className="ml-2 p-0"><Icon type="poweroff" className="user-button-icon-header" /></Button></span>
                </div>
                <div className="row row-links d-flex flex-row justify-content-center">
                    <Link href="/user-dashboard"><Button type="link" className="user-application-button-default-style"><span><Icon type="dashboard" className="application-button-icon-style" style={{ fontSize: 15 }} />&nbsp;Mon profile</span></Button></Link>
                    <Link href="/user-orders"><Button type="link" className="user-application-button-default-style"><span><Icon type="hdd" className="application-button-icon-style" style={{ fontSize: 15 }} />&nbsp;Mes commandes</span></Button></Link>
                    <Link href="/user-settings"><Button type="link" className="user-application-button-default-style"><span><Icon type="edit" className="application-button-icon-style" style={{ fontSize: 15 }} />&nbsp;Coordonnées</span></Button></Link>
                </div>
            </div>
            </Header>
        </React.Fragment>);
    }
}

function mapStateToProps(state) { const { user } = state.authenticationReducer; return { user }; }
const connectReduxNavbarUser = connect(mapStateToProps)(FUserNavbar);
export { connectReduxNavbarUser as FUserNavbar };