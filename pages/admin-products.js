import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Layout, Empty } from 'antd';
import { Card, FileInput, Button, Elevation, Icon } from '@blueprintjs/core';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { far, faPaperPlane } from '@fortawesome/free-regular-svg-icons';

import { GuestHeader } from '../source/components/component-header-guest';
import { AdminNavbar } from '../source/components/component-navbar-admin';
import { AdminSider }  from '../source/components/fragments-tools/admin-sider';
import { AdminHeader }  from '../source/components/fragments-tools/admin-header';

import { fetchAllProducts, fetchAllSlideshowImages } from '../source/components/redux-actions/product-action';
import { addSlideshowImage, deleteSlideshowImage } from '../source/components/redux-actions/product-action';
import '../static/resources/admin-account.scss';

const { Content, Footer } = Layout;

class SAdminProducts extends Component {
  constructor(props) { 
    super(props); this.state = { user: null, slideshow : null, products: null, image: '', name: '', uploading: false };
    this.onSlideshow = this.onSlideshow.bind(this); this.onSlideshowUpload = this.onSlideshowUpload.bind(this);
    this.onSlideshowDelete = this.onSlideshowDelete.bind(this);
   }
  componentDidMount() { library.add(far, faPaperPlane); const { dispatch } = this.props; dispatch(fetchAllProducts()); dispatch(fetchAllSlideshowImages());
    if(this.props.user && typeof this.props.user === "string") { this.setState({ user : typeof this.props.user === "string" && this.props.user.length > 2 ? JSON.parse(this.props.user) : this.props.user }); } dispatch(fetchAllSlideshowImages());
    if(this.props.products && typeof this.props.products === "string") { this.setState({ products : typeof this.props.products === "string" && this.props.products.length > 2 ? JSON.parse(this.props.products) : this.props.products }); }
    if(this.props.slideshow && typeof this.props.slideshow === "string") { this.setState({ slideshow : typeof this.props.slideshow === "string" && this.props.slideshow.length > 2 ? JSON.parse(this.props.slideshow) : this.props.slideshow }); } 
  }
  componentDidUpdate(previous) { 
    if(previous.user !== this.props.user) { this.setState({ user : JSON.parse(this.props.user) }); } 
    if(previous.products !== this.props.products) { this.setState({ products : typeof this.props.products === "string" && this.props.products.length > 2 ? JSON.parse(this.props.products) : this.props.products }); }
    if(previous.slideshow !== this.props.slideshow) { this.setState({ slideshow : typeof this.props.slideshow === "string" && this.props.slideshow.length > 2 ? JSON.parse(this.props.slideshow) : this.props.slideshow }); }
  }

  onSlideshowUpload(event, file) { const image = file || event.target.files[0]; this.setState({ uploading: true }); let reader = new FileReader(); const scope = this; reader.onload = function(e) { scope.setState({ uploading: false, image: e.target.result }); }; reader.readAsDataURL(image); }
  onSlideshowDelete(event, id) { const { dispatch } = this.props; dispatch(deleteSlideshowImage(id)); }
  onSlideshow() { const { dispatch } = this.props; const name = Math.random().toString(36).substr(2, 9);; dispatch(addSlideshowImage(name, this.state.image)); } 

  render() {
    return (
      <React.Fragment>
        <GuestHeader title={this.state.user !== null ? this.state.user.firstname + ' ' + this.state.user.lastname : 'Muscle Feed | Administrateur' } description="Boutique en ligne de compléments alimentaires et de protéines pour la musculation à prix cassé. Le meilleur de la construction musculaire : proteines, gainer, bcaa, bruleur de graisses, booster." />
        <Layout>
          <AdminSider />
          <Layout>
            <AdminHeader user={JSON.stringify(this.state.user)} />
            <Content className="product-global">
              <div className="d-flex flex-row justify-content-center top-first-specifity mt-2 mb-1">
                <div className="col-2">
                  <Card interactive={true} className="bp3-dark p-2" elevation={Elevation.ONE}>
                    <div className="d-flex flex-row justify-content-space-between"><FileInput intent="primary" placeholder={<span className="remember-text">Choisissez une image.</span>} onChange={this.onSlideshowUpload} fill={true} /></div>
                    <div className="d-flex flex-column">
                      <Button intent="primary" onClick={this.onSlideshow} loading={this.state.uploading} text={<span className="button-text">Envoyer&nbsp;&nbsp;<FontAwesomeIcon icon={faPaperPlane} /></span>} />
                    </div>
                  </Card>
                  <Card interactive={true} className="bp3-dark p-2 mt-1 mb-1 d-flex flex-row justify-content-center align-items-center slideshow-image-show" elevation={Elevation.ONE}>
                  { ((this.state.slideshow && typeof this.state.slideshow === "string" && this.state.slideshow.length <=2) || !this.state.slideshow) && <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description={<span className="box-notfound-description">Aucune image</span>} className="box-notfound-error mt-2" /> }
                  { this.state.slideshow && Array.isArray(this.state.slideshow) && this.state.slideshow.map((item) => {
                    return(
                      <div className="col-4 p-1" key={item.id} className="image-list-box-container p-1 ml-1"><img src={item.image} className="image-list-box" /><Button className="delete-slideshow-image-button" intent="danger" onClick={(event) => { event.preventDefault(); this.onSlideshowDelete(event, item.id); }}><Icon icon="trash" className="trash-icon-slideshow" iconSize={12} /></Button></div>
                    );
                  })}
                  </Card>
                </div>
                <div className="col-10"></div>
              </div>
            </Content>
          </Layout>
        </Layout>
      </React.Fragment>
    )
  }
}

function mapStateToProps(state)  { const { user, logged } = state.authenticationReducer; const { products, slideshow } = state.adminReducer; return { user, logged, products, slideshow }; }
const connectReduxAdminProducts = connect(mapStateToProps)(SAdminProducts);
export default connectReduxAdminProducts;