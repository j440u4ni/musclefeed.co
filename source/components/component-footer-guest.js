import React, { Component } from 'react';
import logo from '../../static/resources/images/logo-fredoka-v4@2x.png';

export class GuestFooter extends Component {
    constructor(props) { super(props); }
    render() {
    return(
        <React.Fragment>
            <div className={this.props.className ? this.props.className + " d-flex flex-column justify-content-center align-items-center" : "homepage-footer d-flex flex-column justify-content-center align-items-center mt-2"}>
                <div className="container">
                    <div className="row d-flex flex-row"></div>
                    <div className="row d-flex flex-row row-footer-two justify-content-center align-items-center">
                        <img src={logo} className="footer-application-logo" />
                        <p className="text-footer ml-2">&copy;{new Date().getFullYear()}&nbsp;Tous droits réservés.</p>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
    }
}