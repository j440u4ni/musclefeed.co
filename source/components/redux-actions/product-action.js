import cookie from 'js-cookie';

import { productConstants } from '../redux-constants/product-constant';
import { addProductCategoryService, addProductPerfumeService, addProductWeightService } from '../redux-helpers/product-helper';
import { fetchAllProductPerfumesService, fetchAllProductCategoriesService, fetchAllProductWeightsService } from '../redux-helpers/product-helper';
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

export function addProductCategory(name, description, close) {
    return (dispatch) => {
        addProductCategoryService(name, description).then((response) => { dispatch(request()); return response; })
        .then((second) => {
            if(second.hasOwnProperty('errors')) { close(false); showWarning("Addition catégorie échoué."); dispatch(failure()); }
            else { dispatch(fetchAllProductCategories()); dispatch(success(second.data.addProductCategoryQuery)); close(); showSuccess("Addition catégorie avec succès."); } 
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
            else { dispatch(fetchAllProductPerfumes()); dispatch(success(second.data.addProductPerfumeQuery)); close(); showSuccess("Addition parfum avec succès."); } 
        });
    }
    function request() { return { type: productConstants.productCategoryAddRequest, perfumes: null }; }
    function success(perfumes) { return { type: productConstants.productCategoryAddSuccess, perfumes: perfumes };  }
    function failure() { return { type: productConstants.productCategoryAddFailure, perfumes: null };  }
}

export function addProductWeight(name, value, close) {
    return (dispatch) => {
        addProductWeightService(name, value).then((response) => { dispatch(request()); return response; })
        .then((second) => {
            if(second.hasOwnProperty('errors')) { close(false); showWarning("Addition catégorie échoué."); dispatch(failure()); }
            else { dispatch(fetchAllProductWeights()); dispatch(success(second.data.addProductWeightQuery)); close(); showSuccess("Addition poids avec succès."); } 
        });
    }
    function request() { return { type: productConstants.productCategoryAddRequest, weights: null }; }
    function success(weights) { return { type: productConstants.productCategoryAddSuccess, weights: weights };  }
    function failure() { return { type: productConstants.productCategoryAddFailure, weights: null };  }
}
