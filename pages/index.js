import React, { Component } from 'react';
import { GuestHeader } from '../source/components/component-header-guest';
import { GuestFooter } from '../source/components/component-footer-guest';
import { GuestNavbar } from '../source/components/component-navbar-guest';
import { connect } from 'react-redux';
import { Carousel, Button, Icon } from 'antd';
import { Card, Elevation} from '@blueprintjs/core';
import { convertFromRaw } from 'draft-js';
import draftToHtml from 'draftjs-to-html';

import '../static/resources/main-application.scss';
import { fetchAllProducts, fetchAllSlideshowImages, fetchAllProductPerfumes, fetchAllProductWeights } from '../source/components/redux-actions/product-action';

class SHome extends Component {
  constructor(props) { super(props); this.state = { slideshow: null, products: null, description: false } }
  componentDidMount() { const { dispatch } = this.props; this.setState({ description: true });
    dispatch(fetchAllProducts()); dispatch(fetchAllSlideshowImages()); dispatch(fetchAllProductPerfumes()); dispatch(fetchAllProductWeights());
    if(this.props.products && typeof this.props.products === "string") { this.setState({ products : typeof this.props.products === "string" && this.props.products.length > 2 ? JSON.parse(this.props.products) : this.props.products }); }
    if(this.props.slideshow && typeof this.props.slideshow === "string") { this.setState({ slideshow : typeof this.props.slideshow === "string" && this.props.slideshow.length > 2 ? JSON.parse(this.props.slideshow) : this.props.slideshow }); }
  }
  componentDidUpdate(previous) {
    if(previous.products !== this.props.products) { this.setState({ products : typeof this.props.products === "string" && this.props.products.length > 2 ? JSON.parse(this.props.products) : this.props.products }); }
    if(previous.slideshow !== this.props.slideshow) { this.setState({ slideshow : typeof this.props.slideshow === "string" && this.props.slideshow.length > 2 ? JSON.parse(this.props.slideshow) : this.props.slideshow }); }
  }

  render() { console.log(this.state.products);
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
            <div className="container-fluid elevation-products px-2 d-flex flex-wrap justify-content-start">
              <Card interactive={false} elevation={Elevation.ONE} className="elevation-products-list d-flex flex-row justify-content-center">
                { this.state.products && Array.isArray(this.state.products) && this.state.products.slice(0, 8).map((item) => {
                  return(<div key={item.id} className="col-2 d-flex flex-column justify-content-center">
                      <img className="product-image-home" src={item.image} />
                      <div className="d-flex flex-column justify-content-center align-items-center">
                        <span className="product-provider-home">{item.provider}</span>
                        <span className="product-title-home">{item.title}</span>
                        <span className="product-description-title-home mt-1">{item.description_title}</span>
                        { this.state.description && item.description !== "" && <span className="product-description-text-home">{convertFromRaw(JSON.parse(item.description)).getPlainText().substr(0, 140)}...</span> }
                        <div className="d-flex flex-row p-0 justify-content-end mt-2">
                          <div className="col-8"></div>
                          <div className="col-3"><Button type="danger"><Icon type="heart" className="button-home-buy" /></Button></div>
                          <div className="col-2"><Button type="primary"><Icon type="shopping-cart" className="button-home-buy ml-2" /></Button></div>
                        </div>
                      </div>
                  </div>)
                })}
              </Card>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

function mapStateToProps(state)  { const { products, slideshow, perfumes, weights } = state.adminReducer; return { products, slideshow, perfumes, weights }; }
const connectReduxHome = connect(mapStateToProps)(SHome);
export default connectReduxHome;