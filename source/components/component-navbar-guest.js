import React, { Component } from 'react';
import { Button, Icon, Badge } from 'antd';

import '../../static/resources/main-application.scss';
import logo from '../../static/resources/images/logo-fredoka-v4@2x.png';

export class GuestNavbar extends Component {
    constructor(props) { super(props); }
    render() {
        return(
            <React.Fragment>
                <div className={"container-fluid m-0 container-top-one " + this.props.className}>
                    <div className="row d-flex flex-row justify-content-center row-guest-first">
                        <div className="col-4 d-flex flex-row justify-content-center"><img src={logo} className="application-logo" /></div>
                        <div className="col-5"></div>
                        <div className="col-3 d-flex flex-row justify-content-start">
                            <Button.Group>
                                <Button type="default" className="application-button-default-style"><Icon type="user" className="application-button-icon-style" style={{ fontSize: 15 }} />&nbsp;Mon compte</Button>
                                <Button type="default" className="application-button-default-style"><Badge dot={true} style={{ marginTop: 0, marginRight: -5 }} className="application-button-default-style-reset"><Icon type="shopping-cart" className="application-button-icon-style" style={{ fontSize: 15 }} />&nbsp;Mon panier</Badge></Button>
                            </Button.Group>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}