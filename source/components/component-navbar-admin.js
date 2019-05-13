import React, { Component } from 'react';
import { Button, Icon, Badge } from 'antd';

import '../../static/resources/admin-account.scss';

export class AdminNavbar extends Component {
    constructor(props) { super(props); }
    render() {
        return(
            <React.Fragment>
                <div className={"container-fluid py-2 m-0 container-top-one " + this.props.className}>
                </div>
            </React.Fragment>
        );
    }
}