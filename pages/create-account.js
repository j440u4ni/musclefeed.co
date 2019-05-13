import React, { Component } from 'react';
import { GuestHeader } from '../source/components/component-header-guest';
import { GuestFooter } from '../source/components/component-footer-guest';

export default class SCreateAccount extends Component {
    constructor(props) { super(props); }
    render() {
        return(
            <React.Fragment>
                <GuestHeader title="Muscle Feed | Créer un compte" description="Boutique en ligne de compléments alimentaires et de protéines pour la musculation à prix cassé. Le meilleur de la construction musculaire : proteines, gainer, bcaa, bruleur de graisses, booster." />
            </React.Fragment>
        );
    }
}