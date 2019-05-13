import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Drawer } from 'antd';

class SAddProductWeight extends Component {
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
const connectReduxAddWeight = connect(mapStateToProps)(SAddProductWeight);
export { connectReduxAddWeight as SAddProductWeight };