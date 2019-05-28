import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Layout } from 'antd';

import { FUserNavbar } from '../source/components/component-navbar-user';
import { GuestHeader } from '../source/components/component-header-guest';

class SUserSettings extends Component {
    constructor(props) { super(props); this.state = { user : null }; }
    componentDidMount() { if(this.props && typeof this.props.user === "string") { this.setState({ user : JSON.parse(this.props.user) }); this.forceUpdate(); }  }
    componentDidUpdate(previous) { if(previous.user !== this.props.user) { this.setState({ user : JSON.parse(this.props.user) }); } }

    render() {
        return(
            <React.Fragment>
                <GuestHeader title={this.state.user !== null ? this.state.user.firstname + ' ' + this.state.user.lastname : 'Muscle Feed | Administrateur' } description="Boutique en ligne de compléments alimentaires et de protéines pour la musculation à prix cassé. Le meilleur de la construction musculaire : proteines, gainer, bcaa, bruleur de graisses, booster." />
                <Layout>
                    <React.Fragment>
                        <FUserNavbar />
                    </React.Fragment>
                </Layout>
            </React.Fragment>
        );
    }
}

function mapStateToProps(state) { const { user } = state.authenticationReducer; return { user }; }
const connectReduxUserSettings = connect(mapStateToProps)(SUserSettings);
export default connectReduxUserSettings;