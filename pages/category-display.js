import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, Elevation } from '@blueprintjs/core';

import { slugify } from '../source/musclefeed-configuration';
import { GuestHeader } from '../source/components/component-header-guest';
import { GuestNavbar } from '../source/components/component-navbar-guest';
import { GuestFooter } from '../source/components/component-footer-guest';

import { fetchAllProductCategories, fetchAllProducts } from '../source/components/redux-actions/product-action';

class SCategoryDisplay extends Component {
    constructor(props) { super(props); this.state = { categories: null, logged: false, category: null, sub: null, products: null, specified: '' };
    }
    
    componentDidMount() {
        const { dispatch } = this.props;  dispatch(fetchAllProductCategories()); dispatch(fetchAllProducts());
        if(this.props.logged && typeof this.props.logged === "boolean") { this.setState({ logged : this.props.logged }); }
        if(this.props.categories && typeof this.props.categories === "string") { this.setState({ categories : typeof this.props.categories === "string" && this.props.categories.length > 2 ? JSON.parse(this.props.categories) : this.props.categories }); }
        if(this.props.query) { this.setState({ category: this.props.query.category }); }
        if(this.props.query && this.props.query.hasOwnProperty('sub')) { this.setState({ sub: this.props.query.sub }); }
        if(this.props.products && typeof this.props.products === "string") { this.setState({ products : typeof this.props.products === "string" && this.props.products.length > 2 ? JSON.parse(this.props.products) : this.props.products }); }
            // retrieving the specified category.
        if(this.props.categories && typeof this.props.categories === "string" && this.props.categories.length > 2) { 
            const category = JSON.parse(this.props.categories).filter((item) => {  return slugify(item.name) === this.props.query.category; }); this.setState({ specified: category }); 
            if(this.props.query.hasOwnProperty('sub')) { const sub = JSON.parse(this.props.categories).filter((item) => { return slugify(item.name) === this.props.query.sub; }); /* sub[0].name = category[0].name + ' ' + sub[0].name; */ this.setState({ specified: sub }); }
        }
    }
    componentDidUpdate(previous) {
        if(previous.logged !== this.props.logged) { this.setState({ logged: this.props.logged }); }
        if(previous.categories !== this.props.categories) { this.setState({ categories : typeof this.props.categories === "string" && this.props.categories.length > 2 ? JSON.parse(this.props.categories) : this.props.categories }); }
        if(previous.query !== this.props.query) { this.setState({ category: this.props.query.category }); }
        if((previous.query !== this.props.query) && this.props.query.hasOwnProperty('sub')) { this.setState({ sub: this.props.query.sub }); } 
        if(previous.products !== this.props.products) { this.setState({ products : typeof this.props.products === "string" && this.props.products.length > 2 ? JSON.parse(this.props.products) : this.props.products }); }
        if((previous.categories !== this.props.categories) && typeof this.props.categories === "string" && this.props.categories.length > 2) { 
            const category = JSON.parse(this.props.categories).filter((item) => {  return slugify(item.name) === this.props.query.category; }); this.setState({ specified: category }); 
            if(this.props.query.hasOwnProperty('sub')) { const sub = JSON.parse(this.props.categories).filter((item) => { return slugify(item.name) === this.props.query.sub; });  /* sub[0].name = category[0].name + ' ' + sub[0].name; */ this.setState({ specified: sub }); }
        }
    }

    render() {
        return(
            <React.Fragment>
                <GuestHeader title={this.state.specified.length > 0 && typeof this.state.specified === "object" && this.state.specified !== [] ? "Muscle Feed | Catégorie " + this.state.specified[0].name : "Muscle Feed | Toutes marques de protéines pour la Musculation & nutrition sportive."} description="Boutique en ligne de compléments alimentaires et de protéines pour la musculation à prix cassé. Le meilleur de la construction musculaire : proteines, gainer, bcaa, bruleur de graisses, booster." />
                <GuestNavbar className="application-guest-navbar" />
                    <div className="container-top-three d-flex flex-column justify-content-center">
                        <div className="container">
                            <h5 className="product-category-title">{ typeof this.state.specified === "object" && this.state.specified.length > 0 && this.state.specified[0].name }</h5>
                            <div className="row d-flex flex-row justify-content-center">
                                <div className="col-3 d-flex flex-column"> <Card interactive={false} elevation={Elevation.ONE} className="mt-1">
                                </Card></div>
                                <div className="col-9"></div>
                            </div>
                        </div>
                        <GuestFooter />
                    </div>
            </React.Fragment>
        );
    }

    static getInitialProps({query}) { return {query} }
}

function mapStateToProps(state) { const { categories, products } = state.adminReducer; const { logged } = state.authenticationReducer; return { categories, logged, products }; }
const connectReduxCategoryDisplay = connect(mapStateToProps)(SCategoryDisplay);
export default connectReduxCategoryDisplay;