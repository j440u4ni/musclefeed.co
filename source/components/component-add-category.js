import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Drawer, Input, Icon } from 'antd';

class SAddProductCategory extends Component {
    constructor(props) { super(props); this.state = { visible: true }; }
    onClose() { this.setState({ visible: !this.state.visible }); }

    render() { console.log(1);
        return(
        <React.Fragment>
            <Drawer width={300} placement="right" closable={false} onClose={this.onClose} visible={this.state.visible} className="drawer-product-specifity">
                <div className="row">
                    <div className="col-12"><Input prefix={<Icon type="tags" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Nom de la catégorie." className="product-specifity-input" /></div>
                    <div className="col-12"><Input prefix={<Icon type="file-text" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Description de la catégorie." className="product-specifity-input mt-1" /></div>
                </div>
            </Drawer>
        </React.Fragment>
        );
    }
}

function mapStateToProps(state)  {}
const connectReduxAddCategory = connect(mapStateToProps)(SAddProductCategory);
export { connectReduxAddCategory as SAddProductCategory };