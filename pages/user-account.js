import React, { Component } from 'react';
import { connect } from 'react-redux';
import Link from 'next/link';
import Router from 'next/router';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { far, faPaperPlane } from '@fortawesome/free-regular-svg-icons';

import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import { Input, Select, Icon, Divider } from 'antd';
import { Button } from '@blueprintjs/core';
import { register, authenticate } from '../source/components/redux-actions/authentication-action';
import { GuestHeader } from '../source/components/component-header-guest';
import { GuestFooter } from '../source/components/component-footer-guest';

import '../static/resources/guest-account.scss';

class SUserAccount extends Component {
    constructor(props) { 
        super(props); this.state = { register: false,
            registerCivility: 'Monsieur', registerFirstname: '', registerLastname: '', registerEmail: '', registerPhone: '', registerPassword: '', registering: false,
            loginEmail: '', loginPassword: '', loging: false
        }; 
        this.onRegisterToggle = this.onRegisterToggle.bind(this); this.onRegisterCivility = this.onRegisterCivility.bind(this); this.onCancel = this.onCancel.bind(this);
        this.onRegisterFirstname = this.onRegisterFirstname.bind(this); this.onRegisterLastname = this.onRegisterLastname.bind(this); this.onRegisterPassword = this.onRegisterPassword.bind(this);
        this.onRegisterEmail = this.onRegisterEmail.bind(this); this.onRegisterPhone = this.onRegisterPhone.bind(this); this.onRegister = this.onRegister.bind(this); this.onLogin = this.onLogin.bind(this);
        this.onLoginEmail = this.onLoginEmail.bind(this); this.onLoginPassword = this.onLoginPassword.bind(this); this.onCancelLogin = this.onCancelLogin.bind(this);
    }

    componentDidMount() { library.add(far, faPaperPlane); }
    onRegisterToggle(event) { this.setState({ register: !this.state.register }); }

    onRegisterCivility(event) { this.setState({ registerCivility: event }); }
    onRegisterFirstname(event) { this.setState({ registerFirstname: event.target.value }); }
    onRegisterLastname(event) { this.setState({ registerLastname: event.target.value }); }
    onRegisterEmail(event) { this.setState({ registerEmail: event.target.value }); }
    onRegisterPhone(event) { this.setState({ registerPhone: event.target.value }); }
    onRegisterPassword(event) { this.setState({ registerPassword: event.target.value }); }
    onCancel(event) { this.setState({ registering: false }); }

    onLoginEmail(event) { this.setState({ loginEmail: event.target.value }); }
    onLoginPassword(event) { this.setState({ loginPassword: event.target.value }); }
    onCancelLogin(event) { this.setState({ loging: false }); }

    onRegister(event) { this.setState({ registering: true }); const { dispatch } = this.props;
     dispatch(register(this.state.registerCivility, this.state.registerFirstname, this.state.registerLastname, this.state.registerEmail, this.state.registerPassword, this.state.registerPhone, this.onCancel)); }
    onLogin(event) { this.setState({ loging: true }); const { dispatch } = this.props; 
     dispatch(authenticate(this.state.loginEmail, this.state.loginPassword, false, this.onCancelLogin, Router));
    }

    render() {
        return(
            <React.Fragment>
                <GuestHeader title="Muscle Feed | Mon compte" description="Boutique en ligne de compléments alimentaires et de protéines pour la musculation à prix cassé. Le meilleur de la construction musculaire : proteines, gainer, bcaa, bruleur de graisses, booster." />
                <div className="d-flex flex-column justify-content-center account-login-container">
                    <div className="container-fluid account-login-box d-flex flex-column justify-content-center align-items-center">
                     { this.state.register === false ? 
                        <div className="col-12 p-0 account-login-form p-0 animated fadeInLeft">
                            <div className="col-12 mt-1"><Input size="large" className="cart-input" placeholder="E-mail" onChange={this.onLoginEmail} /></div>
                            <div className="col-12 mt-1"><Input.Password size="large" className="cart-input-password" placeholder="Mot de passe" onChange={this.onLoginPassword} /></div>
                            <div className="d-flex flex-row p-0 mt-1">
                                <div className="col-7"><Link href="/password-forgot"><span className="label-input forgot-password">Mot de passe Oublié ?</span></Link></div>
                                <div className="col-5 pl-0"><Button intent="primary" loading={this.state.loging} onClick={this.onLogin} text={<span className="label-input-facebook">Se Connecter</span>} fill={true} /></div>
                            </div>
                            <div className="col-12"><Divider><span className="label-input">Ou</span></Divider></div>
                            <div className="col-12"><FacebookLogin appId="1006642666192281" autoLoad={true} fields="name,email" render={(renderProps) => (<Button intent="primary" text={<span className="label-input-facebook">Facebook</span>} icon={<Icon type="facebook" />} disabled={true} fill={true} large={true} />)} /></div>
                            <div className="col-12 text-center"><span className="label-input forgot-password" onClick={this.onRegisterToggle}>Créer un compte</span></div>
                        </div>
                    :
                        <div className="col-12 p-0 account-register-form p-0 animated fadeInRight">
                            <div className="d-flex flex-row justify-content-start"><Button icon={<Icon type="left-circle" />} className="ml-3" intent="primary" onClick={this.onRegisterToggle} /></div>
                            <div className="col-12 mt-3">
                                <Select defaultValue="Monsieur" size="large" className="cart-select-input" onChange={this.onRegisterCivility}>
                                    <Select.Option value="Monsieur" className="cart-select-input"><span className="cart-select-option">Monsieur</span></Select.Option>
                                    <Select.Option value="Madame" className="cart-select-input"><span className="cart-select-option">Madame</span></Select.Option>
                                </Select>
                            </div>
                            <div className="d-flex flex-row p-0 mt-2">
                                <div className="col-6"><Input size="large" className="cart-input" placeholder="Prénom" onChange={this.onRegisterFirstname} /></div>
                                <div className="col-6 pl-0"><Input size="large" className="cart-input" placeholder="Nom" onChange={this.onRegisterLastname} /></div>
                            </div>
                            <div className="col-12 mt-1"><Input size="large" className="cart-input" placeholder="E-mail" onChange={this.onRegisterEmail} /></div>
                            <div className="col-12 mt-1"><Input.Password size="large" className="cart-input-password" placeholder="Mot de passe" onChange={this.onRegisterPassword} /></div>
                            <div className="col-12 mt-2"><Input size="large" className="cart-input" placeholder="Tél. (+33) 7 00 00 00 00" onChange={this.onRegisterPhone} /></div>
                            <div className="col-12 mt-2">
                                <p className="terms-text text-center">En cliquant sur se connecter vous déclarez avoir accepté tous nos Termes & Conditions et Politique de Confidentialité. Vous recevrez un lien d'activation pour pouvoir activer votre compte.</p>
                            </div>
                            <div className="col-12 mt-1"><Button loading={this.state.registering} onClick={this.onRegister} intent="primary" text={<span className="label-input-facebook">Suivant&nbsp;&nbsp;<FontAwesomeIcon icon={faPaperPlane} /></span>} large={true} fill={true} /></div>
                        </div>
                    }
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

function mapStateToProps(state)  { return state; }
const connectReduxUserAccount = connect(mapStateToProps)(SUserAccount);
export default connectReduxUserAccount;