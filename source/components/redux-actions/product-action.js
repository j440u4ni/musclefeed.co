import cookie from 'js-cookie';

import { productConstants } from '../redux-constants/product-constant';
import { addProductCategoryService, addProductPerfumeService, addProductWeightService } from '../redux-helpers/product-helper';
import { showWarning, showSuccess } from '../fragments-tools/alert-toasts';

export function addProductCategory(name, description, close) {
    return (dispatch) => {
        addProductCategoryService(name, description).then((response) => { return response; })
        .then((second) => {
            if(second.hasOwnProperty('errors')) { close(false); showWarning("Addition catégorie échoué."); }
            else { cookie.set('product-categories', JSON.stringify(second.data.addProductCategoryQuery));
                  close(false); showSuccess("Addition catégorie avec succès.");
            } 
        });
    }
    function request() { return { type: productConstants.productCategoryAddRequest, categories: null }; }
    function success(categories) { return { type: productConstants.productCategoryAddSuccess, categories: categories };  }
    function failure() { return { type: productConstants.productCategoryAddFailure, categories: null };  }
}

export function addProductPerfume(name, description, close) {
    return (dispatch) => {
        addProductPerfumeService(name, description).then((response) => { return response; })
        .then((second) => {
            if(second.hasOwnProperty('errors')) { close(false); showWarning("Addition catégorie échoué."); }
            else { cookie.set('product-perfumes', JSON.stringify(second.data.addProductPerfumeQuery));
                  close(false); showSuccess("Addition parfum avec succès.");
            } 
        });
    }
    function request() { return { type: productConstants.productCategoryAddRequest, perfumes: null }; }
    function success(perfumes) { return { type: productConstants.productCategoryAddSuccess, perfumes: perfumes };  }
    function failure() { return { type: productConstants.productCategoryAddFailure, perfumes: null };  }
}

export function addProductWeight(name, value, close) {
    return (dispatch) => {
        addProductWeightService(name, value).then((response) => { return response; })
        .then((second) => {
            if(second.hasOwnProperty('errors')) { close(false); showWarning("Addition catégorie échoué."); }
            else { cookie.set('product-weights', JSON.stringify(second.data.addProductWeightQuery));
                  close(false); showSuccess("Addition poids avec succès.");
            } 
        });
    }
    function request() { return { type: productConstants.productCategoryAddRequest, weights: null }; }
    function success(weights) { return { type: productConstants.productCategoryAddSuccess, weights: weights };  }
    function failure() { return { type: productConstants.productCategoryAddFailure, weights: null };  }
}