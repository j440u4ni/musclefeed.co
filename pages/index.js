import React, { Component } from 'react';
import { GuestHeader } from '../source/components/component-header-guest';
import { GuestFooter } from '../source/components/component-footer-guest';
import { GuestNavbar } from '../source/components/component-navbar-guest';
import { connect } from 'react-redux';

import '../static/resources/main-application.scss';

class SHome extends Component {
  constructor(props) { super(props); }
  componentDidMount() { }
  render() {
    return(
      <React.Fragment>
        <GuestHeader title="Muscle Feed | Toutes marques de protéines pour la Musculation & nutrition sportive." description="Boutique en ligne de compléments alimentaires et de protéines pour la musculation à prix cassé. Le meilleur de la construction musculaire : proteines, gainer, bcaa, bruleur de graisses, booster." />
        <GuestNavbar className="application-guest-navbar" />
      </React.Fragment>
    );
  }
}

function mapStateToProps(state)  { return state; }
const connectReduxHome = connect(mapStateToProps)(SHome);
export default connectReduxHome;