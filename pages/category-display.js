import React, { Component } from 'react';
import { connect } from 'react-redux';

import { slugify } from '../source/musclefeed-configuration';
import { GuestHeader } from '../source/components/component-header-guest';
import { GuestNavbar } from '../source/components/component-navbar-guest';

import { fetchAllProductCategories, fetchAllProducts } from '../source/components/redux-actions/product-action';

class SCategoryDisplay extends Component {
    constructor(props) { super(props); this.state = { categories: null, logged: false, category: null, sub: null, products: null };
    }
    
    componentDidMount() {
        const { dispatch } = this.props;  dispatch(fetchAllProductCategories()); dispatch(fetchAllProducts());
        if(this.props.logged && typeof this.props.logged === "boolean") { this.setState({ logged : this.props.logged }); }
        if(this.props.categories && typeof this.props.categories === "string") { this.setState({ categories : typeof this.props.categories === "string" && this.props.categories.length > 2 ? JSON.parse(this.props.categories) : this.props.categories }); }
        if(this.props.query) { this.setState({ category: this.props.query.category }); }
        if(this.props.query && this.props.query.hasOwnProperty('sub')) { this.setState({ sub: this.props.query.sub }); }
        if(this.props.products && typeof this.props.products === "string") { this.setState({ products : typeof this.props.products === "string" && this.props.products.length > 2 ? JSON.parse(this.props.products) : this.props.products }); }
    }
    componentDidUpdate(previous) {
        if(previous.logged !== this.props.logged) { this.setState({ logged: this.props.logged }); }
        if(previous.categories !== this.props.categories) { this.setState({ categories : typeof this.props.categories === "string" && this.props.categories.length > 2 ? JSON.parse(this.props.categories) : this.props.categories }); }
        if(previous.query !== this.props.query) { this.setState({ category: this.props.query.category }); }
        if((previous.query !== this.props.query) && this.props.query.hasOwnProperty('sub')) { this.setState({ sub: this.props.query.sub }); } 
        if(previous.products !== this.props.products) { this.setState({ products : typeof this.props.products === "string" && this.props.products.length > 2 ? JSON.parse(this.props.products) : this.props.products }); }
    }

    render() {
        return(
            <React.Fragment>
                <GuestHeader title="Muscle Feed | Toutes marques de protéines pour la Musculation & nutrition sportive." description="Boutique en ligne de compléments alimentaires et de protéines pour la musculation à prix cassé. Le meilleur de la construction musculaire : proteines, gainer, bcaa, bruleur de graisses, booster." />
                <GuestNavbar className="application-guest-navbar" />
                    <div className="container-top-three d-flex flex-row justify-content-center">
                        <div className="col-4 d-flex flex-column">
                        </div>
                        <div className="col-8"></div>
                    </div>
            </React.Fragment>
        );
    }

    static getInitialProps({query}) { return {query} }
}

function mapStateToProps(state) { const { categories, products } = state.adminReducer; const { logged } = state.authenticationReducer; return { categories, logged, products }; }
const connectReduxCategoryDisplay = connect(mapStateToProps)(SCategoryDisplay);
export default connectReduxCategoryDisplay;