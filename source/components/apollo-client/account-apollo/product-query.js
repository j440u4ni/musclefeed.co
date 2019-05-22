import gql from 'graphql-tag';

const addProductCategoryQuery = `mutation addProductCategoryQuery($name: String!, $description: String!, $parent: Int!) { addProductCategoryQuery(name: $name, description: $description, parent: $parent) { id, name, description, parent } }`;
const addProductPerfumeQuery = `mutation addProductPerfumeQuery($name: String!, $description: String!) { addProductPerfumeQuery(name: $name, description: $description) { id, name, description } }`;
const addProductWeightQuery = `mutation addProductWeightQuery($name: String!, $value: Int!) { addProductWeightQuery(name: $name, value: $value) { id, name, value } }`;
const addProductQuery = `mutation addProductQuery($title: String!, $quantity: Int!, $provider: String!, $description_title: String!, $description: String!, $image: String!, $details: String!) { 
    addProductQuery(title: $title, quantity: $quantity, provider: $provider, description_title: $description_title, description: $description, image: $image, details: $details) { id, title, quantity, provider, description_title, description, image, details } }`;
const addSlideshowImageQuery = `mutation addSlideshowImageQuery($name: String!, $image: String!) { addSlideshowImageQuery(name: $name, image: $image) { id, name, image } }`;

const fetchProductCategoriesQuery = `query { fetchAllCategories { id, name, description, parent, sub { id, name, description, parent } } }`;
const fetchProductWeightsQuery = `query { fetchAllWeights { id, name, value } }`;
const fetchProductPerfumesQuery = `query { fetchAllPerfumes { id, name, description } }`;
const fetchProductsQuery = `query { fetchProducts { id, title, quantity, provider, description_title, description, image, details } }`;
const fetchSlideshowImageQuery = `query { fetchSlideshowImage { id, name, image } }`;

const deleteProductQuery = `mutation deleteProductQuery($id: Int!) { addProductQuery(id: $id) { id, title, quantity, provider, description_title, description, image, details } }`;
const deleteSlideshowImageQuery = `mutation deleteSlideshowImageQuery($id: Int!) { deleteSlideshowImageQuery(id: $id) { id, name, image } }`;

export { addProductCategoryQuery, addProductPerfumeQuery, addProductWeightQuery, addProductQuery, addSlideshowImageQuery,
         fetchProductCategoriesQuery, fetchProductPerfumesQuery, fetchProductWeightsQuery, fetchProductsQuery, fetchSlideshowImageQuery,
         deleteProductQuery, deleteSlideshowImageQuery };