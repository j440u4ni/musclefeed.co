import cookie from 'js-cookie';

import { productConstants } from '../redux-constants/product-constant';
import { addProductCategoryService, addProductPerfumeService, addProductWeightService, addProductService } from '../redux-helpers/product-helper';
import { fetchAllProductPerfumesService, fetchAllProductCategoriesService, fetchAllProductWeightsService, fetchAllProductsService } from '../redux-helpers/product-helper';
import { showWarning, showSuccess } from '../fragments-tools/alert-toasts';

export function fetchAllProductCategories() {
    return (dispatch) => {
        fetchAllProductCategoriesService().then((response) => { return response; })
        .then((second) => {
            if(second.hasOwnProperty('errors')) { showWarning("Erreur de disposition de catégories."); dispatch(failure()); }
            else { cookie.set('product-categories', JSON.stringify(second.data.fetchAllCategories)); dispatch(success(JSON.stringify(second.data.fetchAllCategories))); }
        });
    }

    function request() { return { type: productConstants.productCategoryFetchRequest, categories: null }; }
    function success(categories) { return { type: productConstants.productCategoryFetchSuccess, categories: categories }; }
    function failure() { return { type: productConstants.productCategoryFetchFailure, categories: null };  }
}

export function fetchAllProductWeights() {
    return (dispatch) => {
        fetchAllProductWeightsService().then((response) => { return response; })
        .then((second) => {
            if(second.hasOwnProperty('errors')) { showWarning("Erreur de disposition de poids."); dispatch(failure()); }
            else { cookie.set('product-weights', JSON.stringify(second.data.fetchAllWeights)); dispatch(success(JSON.stringify(second.data.fetchAllWeights))); }
        });
    }

    function request() { return { type: productConstants.productWeightFetchRequest, weights: null }; }
    function success(weights) { return { type: productConstants.productWeightFetchSuccess, weights: weights }; }
    function failure() { return { type: productConstants.productWeightFetchFailure, weights: null };  }
}

export function fetchAllProductPerfumes() {
    return (dispatch) => {
        fetchAllProductPerfumesService().then((response) => { return response; })
        .then((second) => {
            if(second.hasOwnProperty('errors')) { showWarning("Erreur de disposition de parfums."); dispatch(failure()); }
            else { cookie.set('product-perfumes', JSON.stringify(second.data.fetchAllPerfumes)); dispatch(success(JSON.stringify(second.data.fetchAllPerfumes))); }
        });
    }

    function request() { return { type: productConstants.productPerfumeFetchRequest, perfumes: null }; }
    function success(perfumes) { return { type: productConstants.productPerfumeFetchSuccess, perfumes: perfumes }; }
    function failure() { return { type: productConstants.productPerfumeFetchFailure, perfumes: null };  }
}

export function fetchAllProducts() {
    return (dispatch) => {
        fetchAllProductsService().then((response) => { return response; })
        .then((second) => {
            if(second.hasOwnProperty('errors')) { showWarning("Erreur de disposition de produits."); dispatch(failure()); }
            else { cookie.set('products', JSON.stringify(second.data.fetchProducts)); dispatch(success(JSON.stringify(second.data.fetchProducts))); }
        });
    }
    
    function request() { return { type: productConstants.productFetchRequest, products: null }; }
    function success(products) { return { type: productConstants.productFetchSuccess, products: products }; } 
    function failure() { return { type: productConstants.productFetchFailure, products: null }; }
}

export function addProductCategory(name, description, close) {
    return (dispatch) => {
        addProductCategoryService(name, description).then((response) => { dispatch(request()); return response; })
        .then((second) => {
            if(second.hasOwnProperty('errors')) { close(false); showWarning("Addition catégorie échoué."); dispatch(failure()); }
            else { dispatch(success(second.data.addProductCategoryQuery)); dispatch(fetchAllProductCategories()); close(); showSuccess("Addition catégorie avec succès."); } 
        });
    }
    function request() { return { type: productConstants.productCategoryAddRequest, categories: null }; }
    function success(categories) { return { type: productConstants.productCategoryAddSuccess, categories: categories };  }
    function failure() { return { type: productConstants.productCategoryAddFailure, categories: null };  }
}

export function addProductPerfume(name, description, close) {
    return (dispatch) => {
        addProductPerfumeService(name, description).then((response) => { dispatch(request()); return response; })
        .then((second) => {
            if(second.hasOwnProperty('errors')) { close(false); showWarning("Addition catégorie échoué."); dispatch(failure()); }
            else { dispatch(success(second.data.addProductPerfumeQuery)); dispatch(fetchAllProductPerfumes()); close(); showSuccess("Addition parfum avec succès."); } 
        });
    }
    function request() { return { type: productConstants.productPerfumeAddRequest, perfumes: null }; }
    function success(perfumes) { return { type: productConstants.productPerfumeAddSuccess, perfumes: perfumes };  }
    function failure() { return { type: productConstants.productPerfumeAddFailure, perfumes: null };  }
}

export function addProductWeight(name, value, close) {
    return (dispatch) => {
        addProductWeightService(name, value).then((response) => { dispatch(request()); return response; })
        .then((second) => {
            if(second.hasOwnProperty('errors')) { close(false); showWarning("Addition catégorie échoué."); dispatch(failure()); }
            else { dispatch(success(second.data.addProductWeightQuery)); dispatch(fetchAllProductWeights()); close(); showSuccess("Addition poids avec succès."); } 
        });
    }
    function request() { return { type: productConstants.productWeightAddRequest, weights: null }; }
    function success(weights) { return { type: productConstants.productWeightAddSuccess, weights: weights };  }
    function failure() { return { type: productConstants.productWeightAddFailure, weights: null };  }
}

export function addProduct(title, quantity, provider, description_title, description, image, details) {
    return (dispatch) => {
       addProductService(title, quantity, provider, description_title, description, image, details).then((response) => { dispatch(request()); return response; })
        .then((second) => {
            if(second.hasOwnProperty('error')) { showWarning("Addition produit échoué."); dispatch(failure()); }
            else { dispatch(success(second.data.addProductQuery)); showSuccess("Addition produit avec succès."); }
        });
    }

    function request() { return { type: productConstants.productAddRequest, products: null }; }
    function success(products) { return { type: productConstants.productAddSuccess, products: products }; } 
    function failure() { return { type: productConstants.productAddFailure, products: null }; }
}