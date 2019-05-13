import { GraphQLSchema } from 'graphql';

import { PersonQuery } from './graphql-queries/person-query';
import { ProductQuery } from './graphql-queries/product-query';

import { PersonMutation } from './graphql-mutations/person-mutation';
import { ProductMutation } from './graphql-mutations/product-mutation'; 

const schemaOne = new GraphQLSchema({ query: PersonQuery, mutation: PersonMutation });
const schemaTwo = new GraphQLSchema({ query: ProductQuery, mutation: ProductMutation });
export { schemaOne as accountSchema, schemaTwo as productSchema };