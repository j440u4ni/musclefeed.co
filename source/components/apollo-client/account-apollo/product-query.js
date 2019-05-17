import gql from 'graphql-tag';

const addProductCategoryQuery = `mutation addProductCategoryQuery($name: String!, $description: String!) { addProductCategoryQuery(name: $name, description: $description) { id, name, description } }`;
const addProductPerfumeQuery = `mutation addProductPerfumeQuery($name: String!, $description: String!) { addProductPerfumeQuery(name: $name, description: $description) { id, name, description } }`;
const addProductWeightQuery = `mutation addProductWeightQuery($name: String!, $value: Int!) { addProductWeightQuery(name: $name, value: $value) { id, name, value } }`;
const addProductQuery = `mutation addProductQuery($title: String!, $quantity: Int!, $provider: String!, $description_title: String!, $description: String!, $image: String!, $details: String!) { 
    addProductQuery(title: $title, quantity: $quantity, provider: $provider, description_title: $description_title, description: $description, image: $image, details: $details) { id, title, quantity, provider, description_title, description, image, details } }`;

const fetchProductCategoriesQuery = `query { fetchAllCategories { id, name, description } }`;
const fetchProductWeightsQuery = `query { fetchAllWeights { id, name, value } }`;
const fetchProductPerfumesQuery = `query { fetchAllPerfumes { id, name, description } }`;
const fetchProductsQuery = `query { fetchProducts { id, title, quantity, provider, description_title, description, image, details } }`;

export { addProductCategoryQuery, addProductPerfumeQuery, addProductWeightQuery, addProductQuery,
         fetchProductCategoriesQuery, fetchProductPerfumesQuery, fetchProductWeightsQuery, fetchProductsQuery };