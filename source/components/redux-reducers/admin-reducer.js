import cookie from 'js-cookie';
import { productConstants } from '../redux-constants/product-constant';

let categories = cookie.get('product-categories');
let perfumes = cookie.get('product-perfumes');
let weights = cookie.get('product-weights');
let products = cookie.get('products');

const initialState = (categories && typeof categories === 'string') && (weights && typeof weights === 'string') && (perfumes && typeof perfumes === 'string')  && (products && typeof products === 'string')
? { categories: categories, weights: weights, perfumes: perfumes, products: products } 
: { categories: null, weights: null, perfumes: null, products: null };

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

        case productConstants.productAddRequest: return { ...state, products: null };
        case productConstants.productAddSuccess: return { ...state, products: action.products };
        case productConstants.productAddFailure: return { ...state, products: null };
        
        case productConstants.productCategoryFetchRequest: return { ...state, categories: null };
        case productConstants.productCategoryFetchSuccess: return { ...state, categories: action.categories };
        case productConstants.productCategoryFetchFailure: return { ...state, categories: null };

        case productConstants.productPerfumeFetchRequest: return { ...state, perfumes: null };
        case productConstants.productPerfumeFetchSuccess: return { ...state, perfumes: action.perfumes };
        case productConstants.productPerfumeFetchFailure: return { ...state, perfumes: null };

        case productConstants.productWeightFetchRequest: return { ...state, weights: null };
        case productConstants.productWeightFetchSuccess: return { ...state, weights: action.weights };
        case productConstants.productWeightFetchFailure: return { ...state, weights: null };

        case productConstants.productFetchRequest: return { ...state, products: null };
        case productConstants.productFetchSuccess: return { ...state, products: action.products };
        case productConstants.productFetchFailure: return { ...state, products: null };

        default: return state;
    }
}