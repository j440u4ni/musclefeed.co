import { GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLNonNull } from 'graphql';

const Product = new GraphQLObjectType({ name: 'ProductType', description: 'A Product GraphQL representation.',
    fields: () => {
    return {
            id: { type: new GraphQLNonNull(GraphQLInt), resolve(person) { return person.id; } },
            title: { type: new GraphQLNonNull(GraphQLString), resolve(person) { return person.title; } },  description_title: {  type: new GraphQLNonNull(GraphQLString), resolve(person) { return person.description_title; } },
            description: { type: new GraphQLNonNull(GraphQLString), resolve(person) { return person.description; } }, details: { type: new GraphQLNonNull(GraphQLString), resolve(person) { return person.details; } }, 
            provider: { type: new GraphQLNonNull(GraphQLString), resolve(person) { return person.provider; } }, quantity: { type: new GraphQLNonNull(GraphQLInt), resolve(person) { return person.quantity; } },
            image: { type: new GraphQLNonNull(GraphQLString), resolve(person) { return person.image; } }
        }
    }
});

export { Product as ProductType };