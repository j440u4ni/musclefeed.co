import React, { Component } from 'react';
import { Input, Tooltip, Icon, Switch, Button } from 'antd';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { far, faPaperPlane } from '@fortawesome/free-regular-svg-icons';
import { connect } from 'react-redux';
import Router from 'next/router';

import { authenticate } from '../source/components/redux-actions/authentication-action';
import { GuestHeader } from '../source/components/component-header-guest';
import '../static/resources/admin-account.scss';

class SAdminAccount extends Component {
    constructor(props) { 
        super(props);  this.state = { email: '', password: '', disabled: false }; 
        this.onChangeEmail = this.onChangeEmail.bind(this); this.onChangePassword = this.onChangePassword.bind(this);
        this.onIntentLogin = this.onIntentLogin.bind(this); this.onResetButton = this.onResetButton.bind(this);
    }

    componentDidMount() { library.add(far, faPaperPlane); }

    onChangeEmail(event) { this.setState({ email: event.target.value }); }
    onChangePassword(event) { this.setState({ password: event.target.value }); }
    onResetButton() { this.setState({ disabled: false }); }
    onIntentLogin() { this.setState({ disabled: true }); const { dispatch } = this.props;  dispatch(authenticate(this.state.email, this.state.password, true, this.onResetButton, Router)); } 

    render() {
        return(
            <React.Fragment>
            <GuestHeader title="Muscle Feed | Administrateur" description="Boutique en ligne de compléments alimentaires et de protéines pour la musculation à prix cassé. Le meilleur de la construction musculaire : proteines, gainer, bcaa, bruleur de graisses, booster." />
                <div className="container admin-account-entry">
                    <div className="row justify-content-center align-items-center py-5">
                        <div className="col-6 col-md-3 text-center col-sm-12 col-xs-12 admin-login-box">
                            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} /> } placeholder="E-mail" className="input-login" onChange={this.onChangeEmail} />
                            <Input.Password prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} /> } placeholder="Mot de passe" className="mt-1 input-login" onChange={this.onChangePassword} />
                            <div className="d-flex flex-row justify-content-space-between mt-2 p-0">
                                <div className="col-8 d-flex flex-row justify-content-start remember-switch"><Switch size="small" defaultChecked />&nbsp;<p className="remember-text">Rester Connecté ?</p></div>
                                <div className="col-4"><Button type="primary" className="ml-0 admin-login-button px-2" disabled={this.state.disabled} onClick={this.onIntentLogin}><p className="admin-login-text">Se connecter&nbsp;&nbsp;<FontAwesomeIcon icon={faPaperPlane} /></p></Button></div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

function mapStateToProps(state)  { return state; }
const connectReduxAdminAccount = connect(mapStateToProps)(SAdminAccount);
export default connectReduxAdminAccount;