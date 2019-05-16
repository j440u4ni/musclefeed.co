import gql from 'graphql-tag';

const addProductCategoryQuery = `mutation addProductCategoryQuery($name: String!, $description: String!) { addProductCategoryQuery(name: $name, description: $description) { id, name, description } }`;
const addProductPerfumeQuery = `mutation addProductPerfumeQuery($name: String!, $description: String!) { addProductPerfumeQuery(name: $name, description: $description) { id, name, description } }`;
const addProductWeightQuery = `mutation addProductWeightQuery($name: String!, $value: Int!) { addProductWeightQuery(name: $name, value: $value) { id, name, value } }`;

const fetchProductCategoriesQuery = `query { fetchAllCategories { id, name, description } }`;
const fetchProductWeightsQuery = `query { fetchAllWeights { id, name, value } }`;
const fetchProductPerfumesQuery = `query { fetchAllPerfumes { id, name, description } } `;

export { addProductCategoryQuery, addProductPerfumeQuery, addProductWeightQuery,
         fetchProductCategoriesQuery, fetchProductPerfumesQuery, fetchProductWeightsQuery };