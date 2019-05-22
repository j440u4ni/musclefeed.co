import { GraphQLObjectType, GraphQLInt, GraphQLList, GraphQLString, GraphQLNonNull } from 'graphql';
import { categoryModel } from '../../musclefeed-models/database';

const Category = new GraphQLObjectType({ name: 'CategoryType', description: 'A Category GraphQL representation.',
    fields: () => {
    return {
            id: { type: new GraphQLNonNull(GraphQLInt), resolve(category) { return category.id; } },
            name: { type: new GraphQLNonNull(GraphQLString), resolve(category) { return category.name; } },
            description: { type: new GraphQLNonNull(GraphQLString), resolve(category) { return category.description; } },
            parent: { type: new GraphQLNonNull(GraphQLInt), resolve(category) { return category.parent } },
            sub: { type: new GraphQLList(Category), resolve(category) { return categoryModel.findAll({ where: { parent: category.id }}); }}
        }
    }
});

export { Category as CategoryType };