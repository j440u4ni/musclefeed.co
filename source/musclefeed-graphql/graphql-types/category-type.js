import { GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLNonNull } from 'graphql';

const Category = new GraphQLObjectType({ name: 'CategoryType', description: 'A Category GraphQL representation.',
    fields: () => {
    return {
            id: { type: new GraphQLNonNull(GraphQLInt), resolve(category) { return category.id; } },
            name: { type: new GraphQLNonNull(GraphQLString), resolve(category) { return category.name; } },
            description: { type: new GraphQLNonNull(GraphQLString), resolve(category) { return category.description; } }
        }
    }
});

export { Category as CategoryType };