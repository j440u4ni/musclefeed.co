import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Drawer, Input, Icon, Button } from 'antd';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { far, faPaperPlane } from '@fortawesome/free-regular-svg-icons';
import { fas, faEject } from '@fortawesome/free-solid-svg-icons';

import { addProductWeight, fetchAllProductWeights } from './redux-actions/product-action';

class SAddProductWeight extends Component {
    constructor(props) { super(props); this.state = { visible: true, name: '', value: 0 }; 
                        this.onName = this.onName.bind(this); this.onValue = this.onValue.bind(this);
                        this.onConfirm = this.onConfirm.bind(this); this.onClose = this.onClose.bind(this);
    }

    componentDidMount() { library.add(far, faPaperPlane); library.add(fas, faEject); }

    onName(event) { this.setState({ name: event.target.value }); }
    onValue(event) { this.setState({ value: event.target.value }); }
    onClose(all = true) { this.setState({ visible: false }); this.props.onClose(); }
    onConfirm() { const { dispatch } = this.props; 
            dispatch(addProductWeight(this.state.name, this.state.value, this.onClose)); 
            dispatch(fetchAllProductWeights());
    }

    render() {
        return(
        <React.Fragment>
            <Drawer width={300} placement="right" closable={false} onClose={this.props.onClose} visible={this.state.visible} className="drawer-product-specifity">
                <div className="row mt-5">
                    <div className="col-12"><Input prefix={<Icon type="tags" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Nom du poids." className="product-specifity-input" onChange={this.onName} /></div>
                    <div className="col-12"><Input prefix={<Icon type="file-text" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Valeur du poids." className="product-specifity-input mt-1" onChange={this.onValue} /></div>
                    <div className="col-12 p-0">
                        <div className="d-flex flex-row justify-content-space-between m-0 mt-2">
                            <div className="col-6"><Button type="danger" className="button-drawer-fill" onClick={this.onClose}><span className="remember-text"><FontAwesomeIcon icon={faEject} />&nbsp;Annuler</span></Button></div>
                            <div className="col-6"><Button type="primary" className="button-drawer-fill" onClick={this.onConfirm}><span className="remember-text"><FontAwesomeIcon icon={faPaperPlane} />&nbsp;Confirmer</span></Button></div>
                        </div>
                    </div>
                </div>
            </Drawer>
        </React.Fragment>
        );
    }
}
function mapStateToProps(state)  {}
const connectReduxAddWeight = connect(mapStateToProps)(SAddProductWeight);
export { connectReduxAddWeight as SAddProductWeight };