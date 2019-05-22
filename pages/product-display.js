import React, { Component } from 'react';
import { connect } from 'react-redux';

class SProductDisplay extends Component {
    constructor(props) { super(props); }
    render() {
        return(
            <React.Fragment>
            </React.Fragment>
        );
    }
}

function mapStateToProps(state) { return state; }
const connectReduxProductDisplay = connect(mapStateToProps)(SProductDisplay);
export default connectReduxProductDisplay;