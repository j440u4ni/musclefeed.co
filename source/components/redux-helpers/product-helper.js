import cookie from 'js-cookie';
import Router from 'next/router';
import { addProductCategoryQuery, addProductPerfumeQuery, addProductWeightQuery } from '../apollo-client/account-apollo/product-query';

const hostname = 'http://10.188.37.107';

export function addProductCategoryService(name, description) {
    return fetch(hostname+':3000/v1/graphql-second-instance/0lqY5JycFu4BwCDv7vsM', { method: 'POST', headers: { 'Content-Type': 'application/json', 'Accept': 'application/json', }, body: JSON.stringify({ query: addProductCategoryQuery, variables: { name, description } }) })
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