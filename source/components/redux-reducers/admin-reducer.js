import cookie from 'js-cookie';
import { productConstants } from '../redux-constants/product-constant';

let categories = cookie.get('product-categories') !== "[]" ? cookie.get('product-categories') : null;
let perfumes = cookie.get('product-perfumes') !== "[]" ? cookie.get('product-perfumes') : null;
let weights = cookie.get('product-weights') !== "[]" ? cookie.get('product-weights') : null;

const initialState = (categories !== undefined && typeof categories !== 'undefined') && (weights !== undefined && typeof weights !== 'undefined') && (perfumes !== undefined && typeof perfumes !== 'undefined') 
? { categories: categories, weights: weights, perfumes: perfumes } 
: { categories: null, weights: null, perfumes: null };

export function adminReducer(state = initialState, action) {
    switch(action.type) {
        case productConstants.productCategoryAddRequest : return { ...state, categories: null };
        case productConstants.productCategoryAddSuccess : return { ...state, categories: action.categories };
        case productConstants.productCategoryAddFailure : return { ...state, categories: null };

        case productConstants.productPerfumeAddRequest : return { ...state, perfumes: null };
        case productConstants.productPerfumeAddSuccess : return { ...state, perfumes: action.perfumes };
        case productConstants.productPerfumeAddFailure : return { ...state, perfumes: null };

        case productConstants.productWeightAddRequest : return { ...state, weights: null };
        case productConstants.productWeightAddSuccess : return { ...state, weights: action.weights };
        case productConstants.productWeightAddFailure : return { ...state, weights: null };

        case productConstants.productCategoryFetchRequest: return { ...state, categories: null };
        case productConstants.productCategoryFetchSuccess: return { ...state, categories: action.categories };
        case productConstants.productCategoryFetchFailure: return { ...state, categories: null };

        case productConstants.productPerfumeFetchRequest: return { ...state, perfumes: null };
        case productConstants.productPerfumeFetchSuccess: return { ...state, perfumes: action.perfumes };
        case productConstants.productPerfumeFetchFailure: return { ...state, perfumes: null };

        case productConstants.productWeightFetchRequest: return { ...state, weights: null };
        case productConstants.productWeightFetchSuccess: return { ...state, weights: action.weights };
        case productConstants.productWeightFetchFailure: return { ...state, weights: null };

        default: return state;
    }
}