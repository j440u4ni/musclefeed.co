import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Drawer, Input, Icon, Button, Select } from 'antd';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { far, faPaperPlane } from '@fortawesome/free-regular-svg-icons';
import { fas, faEject } from '@fortawesome/free-solid-svg-icons';

import { addProductCategory, fetchAllProductCategories } from './redux-actions/product-action';

class SAddProductCategory extends Component {
    constructor(props) { super(props); this.state = { visible: true, name: '', description: '', categories: null, parent: 0 }; 
                        this.onName = this.onName.bind(this); this.onDescription = this.onDescription.bind(this);
                        this.onConfirm = this.onConfirm.bind(this); this.onClose = this.onClose.bind(this);
                        this.onParent = this.onParent.bind(this);
    }

    componentDidMount() { library.add(far, faPaperPlane); library.add(fas, faEject);
        if(this.props.categories && typeof this.props.categories === "string") { this.setState({ categories : typeof this.props.categories === "string" && this.props.categories.length > 2 ? JSON.parse(this.props.categories) : this.props.categories }); }
    }
    componentDidUpdate(previous) {
        if(previous.categories !== this.props.categories) { this.setState({ categories : typeof this.props.categories === "string" && this.props.categories.length > 2 ? JSON.parse(this.props.categories) : this.props.categories }); }
    }

    onName(event) { this.setState({ name: event.target.value }); }
    onDescription(event) { this.setState({ description: event.target.value }); }
    onParent(event) { this.setState({ parent: parseInt(event) }); }

    onClose(all = true) { this.setState({ visible: false }); this.props.onClose(); }
    onConfirm() { const { dispatch } = this.props;
            dispatch(addProductCategory(this.state.name, this.state.description, this.state.parent, this.onClose)); 
            dispatch(fetchAllProductCategories());
    }

    render() {
        return(
        <React.Fragment>
            <Drawer width={300} placement="right" closable={false} onClose={this.props.onClose} visible={this.state.visible} className="drawer-product-specifity">
                <div className="row mt-5">
                    <div className="col-12"><Input prefix={<Icon type="tags" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Nom de la catégorie." className="product-specifity-input" onChange={this.onName} /></div>
                    <div className="col-12"><Input prefix={<Icon type="file-text" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Description de la catégorie." className="product-specifity-input mt-1" onChange={this.onDescription} /></div>
                    <div className="col-12 mt-1">
                        <Select defaultValue={<span className="category-select-option">Aucun Parent</span>} className="category-select-input" onChange={this.onParent}>
                            <Select.Option value={0} className="cart-select-input"><span className="category-select-option">Aucun Parent</span></Select.Option>
                            { this.state.categories && Array.isArray(this.state.categories) 
                            && this.state.categories.map((item) => { if(item.parent === 0) { return(<Select.Option value={item.id} className="category-select-input" key={item.id}><span className="cart-select-option">{item.name}</span></Select.Option>); } })
                            }
                        </Select>
                    </div>
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

function mapStateToProps(state)  { const { categories } = state.adminReducer; return { categories }; }
const connectReduxAddCategory = connect(mapStateToProps)(SAddProductCategory);
export { connectReduxAddCategory as SAddProductCategory };