import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Drawer } from 'antd';

class SAddProductPerfume extends Component {
    constructor(props) { super(props); }
    render() {
        return(
        <React.Fragment>
            <Drawer>
            </Drawer>
        </React.Fragment>
        );
    }
}

function mapStateToProps(state)  {}
const connectReduxAddPerfume = connect(mapStateToProps)(SAddProductPerfume);
export { connectReduxAddPerfume as SAddProductPerfume };