import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Layout, Icon, Button, Empty, Select } from 'antd';
import { Card, Elevation, Checkbox, InputGroup, Button as BPButton, ButtonGroup, Radio, RadioGroup } from '@blueprintjs/core';
import { Editor, EditorState, RichUtils, convertToRaw } from 'draft-js';

import { GuestHeader } from '../source/components/component-header-guest';
import { AdminNavbar } from '../source/components/component-navbar-admin';
import { AdminSider }  from '../source/components/fragments-tools/admin-sider';
import { AdminHeader }  from '../source/components/fragments-tools/admin-header';

import { SAddProductPerfume } from '../source/components/component-add-perfume';
import { SAddProductWeight } from '../source/components/component-add-weight';
import { SAddProductCategory } from '../source/components/component-add-category';

import { fetchAllProductCategories, fetchAllProductWeights, fetchAllProductPerfumes } from '../source/components/redux-actions/product-action';
import { addProduct } from '../source/components/redux-actions/product-action';

import '../static/resources/admin-account.scss';

const { Content, Footer } = Layout; 


class SAdminProductNew extends Component {
  constructor(props) { super(props); this.state = { user : null, categoryVisible: false, perfumeVisible: false, weightVisible: false, selectedPrices: [], uploading: false, uploaded: false,
                                                    categories: null, perfumes: null, weights: null, selectedCategory: 1, selectedPerfumes: [], selectedWeights: [],
                                                    productImage: '', productTitle: '', productProvider: '', productQuantity: 0, productDescription: '', editorState: EditorState.createEmpty(),
                                                    editorShow: false, productDescriptionTitle: '',
                                                  };
    this.onCategory = this.onCategory.bind(this); this.onPerfume = this.onPerfume.bind(this); this.onWeight = this.onWeight.bind(this); this.onProductDescriptionTitle = this.onProductDescriptionTitle.bind(this); this.onProductTitle = this.onProductTitle.bind(this);
    this.onCloseCategory = this.onCloseCategory.bind(this); this.onCloseWeight = this.onCloseWeight.bind(this); this.onClosePerfume = this.onClosePerfume.bind(this); this.onProductImage = this.onProductImage.bind(this); this.onProductQuantity = this.onProductQuantity.bind(this);
    this.onSelectCategory = this.onSelectCategory.bind(this); this.onSelectPerfume = this.onSelectPerfume.bind(this); this.onInputPrice = this.onInputPrice.bind(this); this.onProductDescriptionStrikeThrough = this.onProductDescriptionStrikeThrough.bind(this);
    this.onSelectWeight = this.onSelectWeight.bind(this); this.onProductDescription = this.onProductDescription.bind(this); this.onProductDescriptionUnderline = this.onProductDescriptionUnderline.bind(this); this.onConfirmProduct = this.onConfirmProduct.bind(this);
    this.onProductDescriptionBold = this.onProductDescriptionBold.bind(this); this.onProductDescriptionItalic = this.onProductDescriptionItalic.bind(this); this.onProductDescriptionCode = this.onProductDescriptionCode.bind(this); 
    this.onProductProvider = this.onProductProvider.bind(this);
  }
  componentDidMount() { const { dispatch } = this.props; this.setState({ editorShow: true });
    dispatch(fetchAllProductCategories()); dispatch(fetchAllProductPerfumes()); dispatch(fetchAllProductWeights());
    if(this.props.user && typeof this.props.user === "string") { this.setState({ user : JSON.parse(this.props.user) }); }
    if(this.props.weights && typeof this.props.weights === "string") { this.setState({ weights : typeof this.props.weights === "string" && this.props.weights.length > 2 ? JSON.parse(this.props.weights) : this.props.weights }); }
    if(this.props.perfumes && typeof this.props.perfumes === "string") { this.setState({ perfumes : typeof this.props.perfumes === "string" && this.props.perfumes.length > 2 ? JSON.parse(this.props.perfumes) : this.props.perfumes }); }
    if(this.props.categories && typeof this.props.categories === "string") { this.setState({ categories : typeof this.props.categories === "string" && this.props.categories.length > 2 ? JSON.parse(this.props.categories) : this.props.categories }); }
  }
  componentDidUpdate(previous) { 
    if(previous.user !== this.props.user) { this.setState({ user : JSON.parse(this.props.user) }); } 
    if(previous.categories !== this.props.categories) { this.setState({ categories : typeof this.props.categories === "string" && this.props.categories.length > 2 ? JSON.parse(this.props.categories) : this.props.categories }); } 
    if(previous.weights !== this.props.weights) { this.setState({ weights : typeof this.props.weights === "string" && this.props.weights.length > 2 ? JSON.parse(this.props.weights) : this.props.weights }); } 
    if(previous.perfumes !== this.props.perfumes) { this.setState({ perfumes : typeof this.props.perfumes === "string" && this.props.perfumes.length > 2 ? JSON.parse(this.props.perfumes) : this.props.perfumes }); } 
  }

  onCategory() { this.setState({ categoryVisible: true }); }
  onPerfume() { this.setState({ perfumeVisible: true }); }
  onWeight() { this.setState({ weightVisible: true }); }

  onCloseCategory() { this.setState({ categoryVisible: false }); this.forceUpdate(); }
  onClosePerfume() { this.setState({ perfumeVisible: false }); this.forceUpdate(); }
  onCloseWeight() { this.setState({ weightVisible: false }); this.forceUpdate(); }

  onSelectCategory(value) { this.setState({ selectedCategory: parseInt(value) }); }
  onSelectPerfume(event) { if((this.state.selectedPerfumes === null || this.state.selectedPerfumes.indexOf(event.target.id) === -1) && event.target.checked) { this.setState({ selectedPerfumes: [...this.state.selectedPerfumes, event.target.id]}); } else if((this.state.selectedPerfumes !== null && this.state.selectedPerfumes.indexOf(event.target.id) !== -1) && !event.target.checked) { this.state.selectedPerfumes.splice(this.state.selectedPerfumes.indexOf(event.target.id), 1); } }
  onSelectWeight(event) {  if(this.state.selectedWeights.indexOf(event.target.id) === -1 && event.target.checked) { this.setState({ selectedWeights: [...this.state.selectedWeights, event.target.id]}); } else if(this.state.selectedWeights.indexOf(event.target.id) !== -1 && !event.target.checked) { this.state.selectedWeights.splice(this.state.selectedWeights.indexOf(event.target.id), 1); } }
  onInputPrice(event) { if(this.state.selectedPrices.indexOf(event.target.id) === -1) { const id = event.target.id; const prices = { id: id, price: parseFloat(event.target.value) }; this.setState({ selectedPrices: [...this.state.selectedPrices.filter((element) => { return element.id != id }), prices] }); }}

  onProductTitle(event) { this.setState({ productTitle: event.target.value }); }
  onProductProvider(event) { this.setState({ productProvider: event.target.value }); }
  onProductQuantity(event) { this.setState({ productQuantity: event.target.value }); }

  onProductDescription(editorState) { this.setState({ editorState: editorState, productDescription: JSON.stringify(convertToRaw(editorState.getCurrentContent())) }); }
  onProductDescriptionTitle(event) { this.setState({ productDescriptionTitle: event.target.value }); }
  onProductImage(event) { event.preventDefault(); const image = event.currentTarget.files[0]; this.setState({ uploading: true }); let reader = new FileReader(); const scope = this; reader.onload = function() { scope.setState({ uploading: false, uploaded: true, productImage: reader.result }); }; reader.readAsDataURL(image); }
  onProductDescriptionBold() { this.onProductDescription(RichUtils.toggleInlineStyle(this.state.editorState, 'BOLD')); }
  onProductDescriptionItalic() { this.onProductDescription(RichUtils.toggleInlineStyle(this.state.editorState, 'ITALIC'));  }
  onProductDescriptionUnderline() { this.onProductDescription(RichUtils.toggleInlineStyle(this.state.editorState, 'UNDERLINE'));  }
  onProductDescriptionCode() { this.onProductDescription(RichUtils.toggleCode(this.state.editorState)); }
  onProductDescriptionStrikeThrough() { this.onProductDescription(RichUtils.toggleInlineStyle(this.state.editorState, 'STRIKETHROUGH')); }
  handleKeyCommand(command) { const newState = RichUtils.handleKeyCommand(this.state.editorState, command); if(newState) { this.onProductDescription(newState); return "handled"; } return "not-handled"; }

  onConfirmProduct() { const { dispatch } = this.props;
    const details = { perfumes: this.state.selectedPerfumes, weights: this.state.selectedPrices, category: this.state.selectedCategory };
    dispatch(addProduct(this.state.productTitle, this.state.productQuantity, this.state.productProvider, this.state.productDescriptionTitle, this.state.productDescription, this.state.productImage, details));
  }

  render() {
    return (
      <React.Fragment>
        <GuestHeader title={this.state.user !== null ? this.state.user.firstname + ' ' + this.state.user.lastname : 'Muscle Feed | Administrateur' } description="Boutique en ligne de compléments alimentaires et de protéines pour la musculation à prix cassé. Le meilleur de la construction musculaire : proteines, gainer, bcaa, bruleur de graisses, booster." />
        <Layout>
          <AdminSider />
          <Layout>
            <AdminHeader user={JSON.stringify(this.state.user)} />
            <Content style={{ backgroundColor: '#ffffff' }} className="product-new-global">
              <div className="d-flex flex-row justify-content-center row-product-specifity top-specifity mt-2">
                <Button.Group>
                  <Button type="primary" onClick={this.onCategory}><Icon type="tags" />&nbsp;<span className="button-text">Catégorie</span></Button>
                  <Button type="primary" onClick={this.onPerfume}><Icon type="hourglass" />&nbsp;<span className="button-text">Parfums</span></Button>
                  <Button type="primary" onClick={this.onWeight}><Icon type="hdd" />&nbsp;<span className="button-text">Poids</span></Button>
                </Button.Group>
              </div>
              <div className="d-flex flex-row justify-content-center row-product-specifities rows-two mt-2">
                <div className="col-2">
                  <Card interactive={true} elevation={Elevation.TWO} className="mt-0 bp3-dark p-2">
                    <h5 className="box-title-white">Parfums</h5>
                    { this.state.perfumes && typeof this.state.perfumes === "string" && this.state.perfumes.length <=2 ? <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description={<span className="box-notfound-description">Aucun parfum</span>} className="box-notfound-error mt-2" />
                    : this.state.perfumes && Array.isArray(this.state.perfumes) && this.state.perfumes.map((item) => { return(<Checkbox key={item.id} className="checkbox-title" onChange={this.onSelectPerfume} id={item.id}>{item.name}</Checkbox>); }) }

                  </Card>
                  <Card interactive={true} elevation={Elevation.TWO} className="mt-2 bp3-dark p-2">
                    <h5 className="box-title-white">Poids & Quantités.</h5>
                    <div class="d-flex flex-column">
                    { this.state.weights && typeof this.state.weights === "string" && this.state.weights.length <= 2 ? <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description={<span className="box-notfound-description">Aucune poids</span>} className="box-notfound-error mt-2" /> 
                    : this.state.weights && Array.isArray(this.state.weights) && this.state.weights.map((item) => { return(
                      <div className="row p-0 m-0 mt-1">
                        <div className="col-6 p-0 m-0"><Checkbox onChange={this.onSelectWeight} id={item.id} className="checkbox-title">{item.name}</Checkbox></div>
                        <div className="col-6 p-0 m-0"><InputGroup ref={item.id} id={item.id} className={item.id + "-price"} leftIcon={<Icon icon={"dollar"} iconSize={12}/>} placeholder="Prix" type="number" small={true} onChange={this.onInputPrice} /></div>
                      </div>
                    ); }) }
                    </div>
                  </Card>
                </div>
                <div className="col-10">
                  <Card interactive={true} elevation={Elevation.TWO} className=" bp3-dark">
                  <div className="container">
                    <div className="row d-flex flex-row justify-content-center align-items-center">
                      <div className="col-4">
                        <div className="product-image-preview d-flex flex-column justify-content-center align-items-center">
                          { this.state.uploaded === false ? <Icon type={ this.state.uploading ? "loading" : "cloud-upload"} className="product-image-upload-icon" iconSize={22} /> : <img src={this.state.productImage} className="image-preview"/> }
                          <input type="file" name="product-image-file" className="product-image-file-input" onChange={this.onProductImage} /></div>
                      </div>
                      <div className="col-4">
                        <InputGroup placeholder="Nom du produit" className="admin-input" onChange={this.onProductTitle} />
                        <InputGroup placeholder="Titre de description" className="admin-input mt-2" onChange={this.onProductDescriptionTitle} />
                        <div className="row">
                          <div className="col-6"><InputGroup type="number" placeholder="Quantité du produit" className="mt-2 admin-input" onChange={this.onProductQuantity} /></div>
                          <div className="col-6"><InputGroup placeholder="Fournisseur du produit" className="mt-2 admin-input" onChange={this.onProductProvider} /></div>
                        </div>
                        <div className="row px-3 mt-2">
                          <Select onSelect={this.onSelectCategory} className="category-select" defaultValue={<span className="category-tree-admin-main-name">Choisir une Catégorie</span>}>
                            { this.state.categories && Array.isArray(this.state.categories) && this.state.categories.filter((i) => { return i.parent === 0 }).map((item) => {
                                return ( 
                                  <Select.OptGroup label={<span className="category-tree-admin-main-name">{item.name}</span>} key={item.id}>
                                    { item.sub.length > 0 && item.sub.map((sub) => { return (<Select.Option value={sub.id} key={sub.id}><span className="category-tree-admin-sub-name">{sub.name}</span></Select.Option>); }) }
                                  </Select.OptGroup> 
                                );
                            })}
                          </Select>
                        </div>
                        <BPButton type="primary" className="admin-input mt-2" onClick={this.onConfirmProduct} text={<span className="admin-input">Confirmer</span>} fill={true} />
                      </div>
                    </div>
                  </div>
                  </Card>
                    <div className="d-flex flex-column justify-content-center align-items-center mt-1">
                      <div className="col-12 d-flex flex-column editor-description justify-content-center align-items-center mt-2 p-0">
                        <Card interactive={false} elevation={Elevation.ONE} className="py-1 editor-container m-0">
                        <div className="d-flex flex-row justify-content-center align-items-center">
                          <ButtonGroup className="buttons-editor">
                            <BPButton icon="italic" text={<span className="admin-input" className="focus-disable" onClick={this.onProductDescriptionItalic}>Italique</span>} />
                            <BPButton icon="bold" text={<span className="admin-input" className="focus-disable" onClick={this.onProductDescriptionBold}>Gras</span>} />
                            <BPButton icon="underline" text={<span className="admin-input" className="focus-disable" onClick={this.onProductDescriptionUnderline}>Souligner</span>} />
                            <BPButton icon="code" text={<span className="admin-input"></span>} className="focus-disable" onClick={this.onProductDescriptionCode}>Code</BPButton>
                            <BPButton icon="strikethrough" text={<span className="admin-input"></span>} className="focus-disable" onClick={this.onProductDescriptionStrikeThrough}>Surligner</BPButton>
                          </ButtonGroup>
                        </div>
                        { this.state.editorShow ? <Editor editorState={this.state.editorState} onChange={this.onProductDescription} handleKeyCommand={this.onProductKeyCommand} /> : null }
                        </Card>
                      </div>
                    </div>
                </div>
              </div>
            </Content>
          </Layout>
          { this.state.categoryVisible && <SAddProductCategory onClose={this.onCloseCategory} /> }
          { this.state.perfumeVisible && <SAddProductPerfume onClose={this.onClosePerfume} /> }
          { this.state.weightVisible && <SAddProductWeight onClose={this.onCloseWeight} /> }
        </Layout>
      </React.Fragment>
    )
  }
}

function mapStateToProps(state)  { const { user, logged } = state.authenticationReducer; const { weights, perfumes, categories } = state.adminReducer;
                                   return { user, logged, weights, perfumes, categories }; }
const connectReduxAdminProductNew = connect(mapStateToProps)(SAdminProductNew);
export default connectReduxAdminProductNew;