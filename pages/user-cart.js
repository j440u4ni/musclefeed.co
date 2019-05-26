import React, { Component } from 'react';
import { connect } from 'react-redux';
import Link from 'next/link';

import { Input, Icon, Select, Divider } from 'antd';
import { Button } from '@blueprintjs/core';

import { GuestHeader } from '../source/components/component-header-guest';
import { GuestFooter } from '../source/components/component-footer-guest';

import '../static/resources/guest-account.scss';

class SUserCart extends Component {
    constructor(props) { 
        super(props); 
        this.state = { logged: false, products: null, countries: [ 'Albania', 'Andorra', 'Armenia', 'Austria', 'Azerbaijan', 'Belarus', 'Belgium', 'Bosnia and Herzegovina', 'Bulgaria',
            'Croatia', 'Cyprus', 'Czechia', 'Denmark', 'Estonia', 'Finland', 'France', 'Georgia', 'Germany', 'Greece', 'Hungary', 'Iceland', 'Ireland', 'Italy', 'Liechtenstein', 'Lithuania', 'Luxembourg', 
            'Malta', 'Moldova', 'Monaco', 'Montenegro', 'Netherlands', 'North Macedonia', 'Norway', 'Poland', 'Portugal', 'Romania', 'Spain', 'Sweden', 'Slovenia', 'Slovakia', 'Switzerland', 'United Kingdom'] }; 
    }

    componentDidMount() {
        if(this.props.logged) { this.setState({ logged: this.props.logged }); }
    }
    componentDidUpdate(previous) {
        if(previous.logged !== this.props.logged) { this.setState({ logged: this.props.logged }); }
    }

    render() {
        return(
            <React.Fragment>
                <GuestHeader title="Muscle Feed | Mon panier" description="Boutique en ligne de compléments alimentaires et de protéines pour la musculation à prix cassé. Le meilleur de la construction musculaire : proteines, gainer, bcaa, bruleur de graisses, booster." />
                <div className="d-flex flex-column justify-content-center align-items-end cart-checkout-container">
                    <div className="container cart-checkout-box d-flex flex-row">
                        <div className="col-8 p-0 cart-checkout-products p-1">
                            { this.state.products ? 
                                ''
                              :
                                ''
                            }
                        </div>
                        <div className="col-4 p-0 cart-checkout-form p-1">
                            { this.state.logged === false ?
                            <div className="row p-0">
                                <div className="col-6"><Input size="large" className="cart-input" placeholder="Nom Complet" /></div>
                                <div className="col-6 pl-0"><Input size="large" className="cart-input" placeholder="E-mail" /></div>
                                <div className="col-12 mt-1"><Input size="large" className="cart-input" placeholder="Adresse Principale" /></div>
                                <div className="col-12 mt-1"><Input size="large" className="cart-input" placeholder="Complément d'adresse" /></div>
                                <div className="col-12 mt-1"><Input size="large" className="cart-input" placeholder="Tél. (+33) 7 00 00 00 00" /></div>
                                <div className="col-12 mt-1"><Select defaultValue="France" size="large" className="cart-select-input">{ this.state.countries.map((item) => { return(<Select.Option value={item} className="cart-select-input"><span className="cart-select-option">{item}</span></Select.Option>); })}</Select></div>
                                <div className="col-12 mt-1"><Button text={<span className="label-input-facebook">Suivant</span>} icon={<Icon type="double-right" />} intent="primary" fill={true} /></div>
                                <div className="col-12 mt-1"><Divider><span className="label-input">Ou</span></Divider></div>
                                <div className="col-12"><Link href="/user-account"><Button text={<span className="label-input">Se Connecter</span>} className="bp3-dark" fill={true} large={true} /></Link></div>
                            </div>
                            : 
                            <div className="row">
                                <div className="col-12"></div>
                            </div>
                            }
                        </div>
                    </div>
                    <GuestFooter className="footer-special" />
                </div>
            </React.Fragment>
        );
    }
}

function mapStateToProps(state)  { const { logged } = state.authenticationReducer; return { logged }; }
const connectReduxUserCart = connect(mapStateToProps)(SUserCart);
export default connectReduxUserCart;