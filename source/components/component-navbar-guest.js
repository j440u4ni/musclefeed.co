import React, { Component } from 'react';
import { Button, Icon, Input, Badge } from 'antd';
import Link from 'next/link';
import { connect } from 'react-redux';

import '../../static/resources/main-application.scss';
import logo from '../../static/resources/images/logo-fredoka-v4@2x.png';
import { fetchAllProductCategories } from '../components/redux-actions/product-action';

const InputSearch = Input.Search;

class GuestNavbar extends Component {
    constructor(props) { super(props); this.state = { searchQuery: '', categories: null }; this.onSearch = this.onSearch.bind(this); }

    componentDidMount() { 
        const { dispatch } = this.props;  dispatch(fetchAllProductCategories());
        if(this.props.categories && typeof this.props.categories === "string") { this.setState({ categories : typeof this.props.categories === "string" && this.props.categories.length > 2 ? JSON.parse(this.props.categories) : this.props.categories }); }
    }
    componentDidUpdate(previous) {
        if(previous.categories !== this.props.categories) { this.setState({ categories : typeof this.props.categories === "string" && this.props.categories.length > 2 ? JSON.parse(this.props.categories) : this.props.categories }); }
    }

    onSearch(event) { this.setState({ searchQuery: event.target.value }); }

    render() {
        return(
            <React.Fragment>
                <div className={"container m-0 container-top-one " + this.props.className}>
                    <div className="row d-flex flex-row justify-content-center row-guest-first">
                        <div className="col-3 d-flex flex-row justify-content-end"><Link href="/"><img src={logo} className="application-logo" /></Link></div>
                        <div className="col-6 d-flex flex-row justify-content-center">
                            <InputSearch size="medium" onChange={this.onSearch} placeholder="Rechercher produit par type ou marque." className="application-search-input" enterButton />
                        </div>
                        <div className="col-3 d-flex flex-row justify-content-start">
                            <Button.Group>
                                <Link href="/user-account"><Button type="default" className="application-button-default-style"><span><Icon type="user" className="application-button-icon-style" style={{ fontSize: 15 }} />&nbsp;Mon compte</span></Button></Link>
                                <Link href="/user-cart"><Button type="default" className="application-button-default-style"><Badge dot={true} style={{ marginTop: 0, marginRight: -5 }} className="application-button-default-style-reset"><Icon type="shopping-cart" className="application-button-icon-style" style={{ fontSize: 15 }} />&nbsp;Mon panier</Badge></Button></Link>
                            </Button.Group>
                        </div>
                    </div>
                    <div className="row d-flex flex-row justify-content-center row-guest-second">
                        <Button className="application-categories-button"><span>Accueil</span></Button>
                        { this.state.categories && Array.isArray(this.state.categories) && this.state.categories.map((item) => {
                            return(<Button key={item.id} className="application-categories-button ml-2"><span>{item.name}</span></Button>);
                        })}
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

function mapStateToProps(state)  { const { categories } = state.adminReducer; return { categories }; }
const connectReduxGuestNavbar = connect(mapStateToProps)(GuestNavbar);
export { connectReduxGuestNavbar as GuestNavbar };