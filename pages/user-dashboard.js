import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Layout, Icon, Button, Progress } from 'antd';
import { Card, Elevation } from '@blueprintjs/core';
import Link from 'next/link';

import { FUserNavbar } from '../source/components/component-navbar-user';
import { GuestHeader } from '../source/components/component-header-guest';

class SUserDashboard extends Component {
    constructor(props) { super(props); this.state = { user : null, orders: null }; }
    componentDidMount() { if(this.props && typeof this.props.user === "string") { this.setState({ user : JSON.parse(this.props.user) }); this.forceUpdate(); }  }
    componentDidUpdate(previous) { if(previous.user !== this.props.user) { this.setState({ user : JSON.parse(this.props.user) }); } }

    render() {
        return(
            <React.Fragment>
                <GuestHeader title={this.state.user !== null ? this.state.user.firstname + ' ' + this.state.user.lastname : 'Muscle Feed | Administrateur' } description="Boutique en ligne de compléments alimentaires et de protéines pour la musculation à prix cassé. Le meilleur de la construction musculaire : proteines, gainer, bcaa, bruleur de graisses, booster." />
                <Layout>
                    <React.Fragment>
                    <FUserNavbar />
                        <div className="container row-boxes">
                            <div className="row">
                                <div className="col-3"><Card interactive={true} elevation={Elevation.TWO} className="d-flex flex-column">
                                    <div className="d-flex flex-row">
                                        <h4 className="user-information-title mr-auto">Bonjour, {this.state.user && this.state.user.firstname + ' ' + this.state.user.lastname }</h4>
                                    </div>
                                    <div className=" d-flex flex-column align-items-center justify-content-center"><Progress type="circle" percent={0} />
                                        <span className="user-information-span mt-1">Vos points de fidélité.</span>
                                        <span className="user-information-little mt-1 text-center">Une fois la jauge remplie, 10% sera déduie automatiquement de votre prochaine commande.</span>
                                    </div>
                                </Card></div>
                                <div className="col-8"><Card interactive={true} elevation={Elevation.TWO} className="d-flex flex-column">
                                        <div className="d-flex flex-row">
                                            <h4 className="user-information-title mr-auto">Vos coordonnées.</h4>
                                            <Link href="/user-settings" className="ml-auto user-action-link"><Button type="link" className="user-action-link"><Icon type="edit" /></Button></Link>
                                        </div>
                                    </Card>
                                </div>
                            </div>
                        </div>
                    </React.Fragment>
                </Layout>
            </React.Fragment>
        );
    }
}

function mapStateToProps(state) { const { user } = state.authenticationReducer; return { user }; }
const connectReduxUserDashboard = connect(mapStateToProps)(SUserDashboard);
export default connectReduxUserDashboard;
