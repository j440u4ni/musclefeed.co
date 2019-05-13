import { GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLNonNull } from 'graphql';

const Weight = new GraphQLObjectType({ name: 'WeightType', description: 'A Weight GraphQL representation.',
    fields: () => {
    return {
            id: { type: new GraphQLNonNull(GraphQLInt), resolve(weight) { return weight.id; } },
            name: { type: new GraphQLNonNull(GraphQLString), resolve(weight) { return weight.name; } },
            value: { type: new GraphQLNonNull(GraphQLInt), resolve(weight) { return weight.value; } }
        }
    }
});

export { Weight as WeightType };