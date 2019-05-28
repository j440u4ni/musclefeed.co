import React, { Component } from 'react';
import { Button, Icon, Input, Badge, Divider, Dropdown, Menu } from 'antd';
import Link from 'next/link';
import { connect } from 'react-redux';

import { slugify } from '../musclefeed-configuration';
import '../../static/resources/main-application.scss';
import logo from '../../static/resources/images/logo-fredoka-v4@2x.png';
import { fetchAllProductCategories } from '../components/redux-actions/product-action';

const InputSearch = Input.Search;

class GuestNavbar extends Component {
    constructor(props) { super(props); 
        this.state = { searchQuery: '', categories: null, logged: false, user: null }; 
        this.onSearch = this.onSearch.bind(this); 
    }

    componentDidMount() { 
        const { dispatch } = this.props;  dispatch(fetchAllProductCategories());
        if(this.props.logged && typeof this.props.logged === "boolean") { this.setState({ logged : this.props.logged }); }
        if(this.props.user && typeof this.props.user === "string") { this.setState({ user : typeof this.props.user === "string" && this.props.user.length > 2 ? JSON.parse(this.props.user) : this.props.user }); }
        if(this.props.categories && typeof this.props.categories === "string") { this.setState({ categories : typeof this.props.categories === "string" && this.props.categories.length > 2 ? JSON.parse(this.props.categories) : this.props.categories }); }
    }
    componentDidUpdate(previous) {
        if(previous.user !== this.props.user) { this.setState({ user : JSON.parse(this.props.user) }); }
        if(previous.logged !== this.props.logged) { this.setState({ logged: this.props.logged }); }
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
                                <Link href={ this.state.logged ? "/user-dashboard" : "/user-account" }>{ this.state.logged === false ?<Button type="default" className="application-button-default-style"><span><Icon type="user" className="application-button-icon-style" style={{ fontSize: 15 }} />&nbsp;Mon compte</span></Button> : <Button type="default" className="application-user-link"><span>{ this.state.user && this.state.user.firstname + ' ' + this.state.user.lastname }</span></Button>}</Link>
                                <Link href="/user-cart"><Button type="default" className="application-button-default-style"><Badge dot={true} style={{ marginTop: 0, marginRight: -5 }} className="application-button-default-style-reset"><Icon type="shopping-cart" className="application-button-icon-style" style={{ fontSize: 15 }} />&nbsp;Mon panier</Badge></Button></Link>
                            </Button.Group>
                        </div>
                    </div>
                    <div className="row d-flex flex-row justify-content-center row-guest-second">
                        <Link href="/"><Button className="application-categories-button" type="link"><span className="d-flex flex-column p-0">Accueil<span className="divider-categories"></span></span></Button></Link>
                        { this.state.categories && Array.isArray(this.state.categories) && this.state.categories.map((item) => { if(item.parent === 0) { const url = slugify(item.name);
                            const menu = (<Menu>{item.sub.length > 0 && item.sub.map((subs) => { const sub = slugify(subs.name); return (<Menu.Item key={subs.id}><Link as={`/products/${url}/${sub}`} href={`/products?category=${url}&sub=${sub}`}><span className="sub-category-link">{subs.name}</span></Link></Menu.Item>); })}</Menu>);
                            return(<Link as={`/products/${url}/`} href={`/products?category=${url}`}>
                                    <Dropdown overlay={menu}>
                                        <Button key={item.id} className="application-categories-button ml-2" type="link">
                                            <span className="d-flex flex-column p-0">{item.name}<span className="divider-categories"></span></span>
                                        </Button>
                                    </Dropdown>
                                </Link>
                            ); }
                        })}
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

function mapStateToProps(state)  { const { categories } = state.adminReducer; const { logged, user } = state.authenticationReducer; return { categories, logged, user }; }
const connectReduxGuestNavbar = connect(mapStateToProps)(GuestNavbar);
export { connectReduxGuestNavbar as GuestNavbar };