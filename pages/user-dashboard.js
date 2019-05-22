import React, { Component } from 'react';
import { connect } from 'react-redux';

class SUserDashboard extends Component {
    constructor(props) { super(props); }

    render() {
        return(
            <React.Fragment>
                <span>Heelo</span>
            </React.Fragment>
        );
    }
}

function mapStateToProps(state) { return state; }
const connectReduxUserDashboard = connect(mapStateToProps)(SUserDashboard);
export default connectReduxUserDashboard;
