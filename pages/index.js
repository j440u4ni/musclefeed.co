import React, { Component } from 'react';
import { GuestHeader } from '../source/components/component-header-guest';
import { GuestFooter } from '../source/components/component-footer-guest';
import { GuestNavbar } from '../source/components/component-navbar-guest';
import { connect } from 'react-redux';
import { Carousel } from 'antd';

import '../static/resources/main-application.scss';
import { fetchAllProducts, fetchAllSlideshowImages } from '../source/components/redux-actions/product-action';

class SHome extends Component {
  constructor(props) { super(props); this.state = { slideshow: null, products: null } }
  componentDidMount() { const { dispatch } = this.props;
    dispatch(fetchAllProducts()); dispatch(fetchAllSlideshowImages());
    if(this.props.products && typeof this.props.products === "string") { this.setState({ products : typeof this.props.products === "string" && this.props.products.length > 2 ? JSON.parse(this.props.products) : this.props.products }); }
    if(this.props.slideshow && typeof this.props.slideshow === "string") { this.setState({ slideshow : typeof this.props.slideshow === "string" && this.props.slideshow.length > 2 ? JSON.parse(this.props.slideshow) : this.props.slideshow }); }
  }
  componentDidUpdate(previous) {
    if(previous.products !== this.props.products) { this.setState({ products : typeof this.props.products === "string" && this.props.products.length > 2 ? JSON.parse(this.props.products) : this.props.products }); }
    if(previous.slideshow !== this.props.slideshow) { this.setState({ slideshow : typeof this.props.slideshow === "string" && this.props.slideshow.length > 2 ? JSON.parse(this.props.slideshow) : this.props.slideshow }); }
  }

  render() {
    return(
      <React.Fragment>
        <GuestHeader title="Muscle Feed | Toutes marques de protéines pour la Musculation & nutrition sportive." description="Boutique en ligne de compléments alimentaires et de protéines pour la musculation à prix cassé. Le meilleur de la construction musculaire : proteines, gainer, bcaa, bruleur de graisses, booster." />
        <GuestNavbar className="application-guest-navbar" />
        <div className="container-top-three">
          <div className="row carousel-row-homepage p-0 m-0">
            <Carousel dotPosition={'bottom'} autoplay className="carousel-container-homepage">
              { this.state.slideshow && Array.isArray(this.state.slideshow) && this.state.slideshow.map((item) => {
                return (<div key={item.id}><img src={item.image} className="carousel-image" /></div>);
              })}
            </Carousel>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

function mapStateToProps(state)  { const { products, slideshow } = state.adminReducer; return { products, slideshow }; }
const connectReduxHome = connect(mapStateToProps)(SHome);
export default connectReduxHome;