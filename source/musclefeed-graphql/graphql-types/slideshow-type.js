import { GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLNonNull } from 'graphql';

const Slideshow = new GraphQLObjectType({ name: 'Slideshowype', description: 'A Slideshow GraphQL representation.',
    fields: () => {
    return {
            id: { type: new GraphQLNonNull(GraphQLInt), resolve(person) { return person.id; } }, name: { type: new GraphQLNonNull(GraphQLString), resolve(person) { return person.name; } },       
            image: { type: new GraphQLNonNull(GraphQLString), resolve(person) { return person.image; } },
        }
    }
});

export { Slideshow as SlideshowType };