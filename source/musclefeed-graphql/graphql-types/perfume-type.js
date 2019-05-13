import { GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLNonNull } from 'graphql';

const Perfume = new GraphQLObjectType({ name: 'PerfumeType', description: 'A Perfume GraphQL representation.',
    fields: () => {
    return {
            id: { type: new GraphQLNonNull(GraphQLInt), resolve(perfume) { return perfume.id; } },
            name: { type: new GraphQLNonNull(GraphQLString), resolve(perfume) { return perfume.name; } },
            description: { type: new GraphQLNonNull(GraphQLString), resolve(perfume) { return perfume.description; } }
        }
    }
});

export { Perfume as PerfumeType };