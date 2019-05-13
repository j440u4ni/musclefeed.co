import { GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLNonNull } from 'graphql';

const Product = new GraphQLObjectType({ name: 'ProductType', description: 'A Product GraphQL representation.',
    fields: () => {
    return {
            id: { type: new GraphQLNonNull(GraphQLInt), resolve(person) { return person.id; } },
            title: { type: new GraphQLNonNull(GraphQLString), resolve(person) { return person.title; } },  description_title: {  type: new GraphQLNonNull(GraphQLString), resolve(person) { return person.description_title; } },
            description: { type: new GraphQLNonNull(GraphQLString), resolve(person) { return person.description; } }
        }
    }
});

export { Product as ProductType };