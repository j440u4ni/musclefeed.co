import gql from 'graphql-tag';

const addProductCategoryQuery = `mutation addProductCategoryQuery($name: String!, $description: String!) { addProductCategoryQuery(name: $name, description: $description) { id, name, description } }`;
const addProductPerfumeQuery = `mutation addProductPerfumeQuery($name: String!, $description: String!) { addProductPerfumeQuery(name: $name, description: $description) { id, name, description } }`;
const addProductWeightQuery = `mutation addProductWeightQuery($name: String!, $value: Int!) { addProductWeightQuery(name: $name, value: $value) { id, name, value } }`;

export { addProductCategoryQuery, addProductPerfumeQuery, addProductWeightQuery };