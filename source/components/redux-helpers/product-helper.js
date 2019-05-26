import { addProductCategoryQuery, addProductPerfumeQuery, addProductWeightQuery, addProductQuery, addSlideshowImageQuery } from '../apollo-client/account-apollo/product-query';
import { fetchProductCategoriesQuery, fetchProductWeightsQuery, fetchProductPerfumesQuery, fetchProductsQuery, fetchSlideshowImageQuery } from '../apollo-client/account-apollo/product-query';
import { deleteProductQuery, deleteSlideshowImageQuery } from '../apollo-client/account-apollo/product-query';

import fetch from 'node-fetch';

const hostname = 'http://10.188.109.85';

export function addProductCategoryService(name, description, parent) {
    return fetch(hostname+':3000/v1/graphql-second-instance/0lqY5JycFu4BwCDv7vsM', { method: 'POST', headers: { 'Content-Type': 'application/json', 'Accept': 'application/json', }, body: JSON.stringify({ query: addProductCategoryQuery, variables: { name, description, parent } }) })
        .then((response) => { return response.json(); })
        .then((data) => { return data; });
}
export function addProductPerfumeService(name, description) {
    return fetch(hostname+':3000/v1/graphql-second-instance/0lqY5JycFu4BwCDv7vsM', { method: 'POST', headers: { 'Content-Type': 'application/json', 'Accept': 'application/json', }, body: JSON.stringify({ query: addProductPerfumeQuery, variables: { name, description } }) })
        .then((response) => { return response.json(); })
        .then((data) => { return data; });
}
export function addProductWeightService(name, value) { var v = parseInt(value, 10);
    return fetch(hostname+':3000/v1/graphql-second-instance/0lqY5JycFu4BwCDv7vsM', { method: 'POST', headers: { 'Content-Type': 'application/json', 'Accept': 'application/json', }, body: JSON.stringify({ query: addProductWeightQuery, variables: { name,  value: v } }) })
        .then((response) => { return response.json(); })
        .then((data) => { return data; });
}
export function addProductService(title, quantity, provider, description_title, description, image, details) { const c = parseInt(quantity);
    return fetch(hostname+':3000/v1/graphql-second-instance/0lqY5JycFu4BwCDv7vsM', { method: 'POST', headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' }, body: JSON.stringify({ query: addProductQuery, variables: { title, quantity : c, provider, description_title, description, image, details: JSON.stringify(details) } }) })
        .then((response) => { return response.json(); })
        .then((data) => { return data; });
}
export function addSlideshowImageService(name, image) {
    return fetch(hostname+':3000/v1/graphql-second-instance/0lqY5JycFu4BwCDv7vsM', { method: 'POST', headers: { 'Content-Type': 'application/json', 'Accept': 'application/json', }, body: JSON.stringify({ query: addSlideshowImageQuery, variables: { name, image } }) })
        .then((response) => { return response.json(); })
        .then((data) => { return data; });
}

export function fetchAllProductsService() {
    return fetch(hostname+':3000/v1/graphql-second-instance/0lqY5JycFu4BwCDv7vsM', { method: 'POST', headers: { 'Content-Type': 'application/json', 'Accept': 'application/json', }, body: JSON.stringify({ query: fetchProductsQuery }) })
    .then((response) => { return response.json(); })
    .then((data) => { return data; });
}
export function fetchAllProductCategoriesService() {
    return fetch(hostname+':3000/v1/graphql-second-instance/0lqY5JycFu4BwCDv7vsM', { method: 'POST', headers: { 'Content-Type': 'application/json', 'Accept': 'application/json', }, body: JSON.stringify({ query: fetchProductCategoriesQuery }) })
        .then((response) => { return response.json(); })
        .then((data) => { return data; });
}
export function fetchAllProductWeightsService() {
    return fetch(hostname+':3000/v1/graphql-second-instance/0lqY5JycFu4BwCDv7vsM', { method: 'POST', headers: { 'Content-Type': 'application/json', 'Accept': 'application/json', }, body: JSON.stringify({ query: fetchProductWeightsQuery }) })
        .then((response) => { return response.json(); })
        .then((data) => { return data; });
}
export function fetchAllProductPerfumesService() {
    return fetch(hostname+':3000/v1/graphql-second-instance/0lqY5JycFu4BwCDv7vsM', { method: 'POST', headers: { 'Content-Type': 'application/json', 'Accept': 'application/json', }, body: JSON.stringify({ query: fetchProductPerfumesQuery }) })
        .then((response) => { return response.json(); })
        .then((data) => { return data; });
}
export function fetchAllSlideshowImagesService() {
    return fetch(hostname+':3000/v1/graphql-second-instance/0lqY5JycFu4BwCDv7vsM', { method: 'POST', headers: { 'Content-Type': 'application/json', 'Accept': 'application/json', }, body: JSON.stringify({ query: fetchSlideshowImageQuery }) })
        .then((response) => { return response.json(); })
        .then((data) => { return data; });
}

export function deleteProductService(id) {
    return fetch(hostname+':3000/v1/graphql-second-instance/0lqY5JycFu4BwCDv7vsM', { method: 'POST', headers: { 'Content-Type': 'application/json', 'Accept': 'application/json', }, body: JSON.stringify({ query: deleteProductQuery, variables: { id } }) })
        .then((response) => { return response.json(); })
        .then((data) => { return data; })
}
export function deleteSlideshowImageService(id) {
    return fetch(hostname+':3000/v1/graphql-second-instance/0lqY5JycFu4BwCDv7vsM', { method: 'POST', headers: { 'Content-Type': 'application/json', 'Accept': 'application/json', }, body: JSON.stringify({ query: deleteSlideshowImageQuery, variables: { id } }) })
        .then((response) => { return response.json(); })
        .then((data) => { return data; })
}