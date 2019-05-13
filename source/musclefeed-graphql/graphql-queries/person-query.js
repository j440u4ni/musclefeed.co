import { GraphQLString, GraphQLObjectType, GraphQLInt } from 'graphql';

import { PersonType } from '../graphql-types/person-type';
import { personModel } from '../../musclefeed-models/database';

const PersonQuery = new GraphQLObjectType({ name: 'PersonQuery',
    fields: {
        findByID: { type: PersonType, args: { id: { type: GraphQLInt } }, resolve(source, args, context, info) { return personModel.findOne({ where : { id: args.id }}); } },
        findByEmail: { type: PersonType, args: { email: { type: GraphQLString } }, resolve(source, args, context, info) { return personModel.findOne({ where : { email: args.email }}); } },
        findByUsername: { type: PersonType, args: { username: { type: GraphQLString } }, resolve(source, args, context, info) { return personModel.findOne({ where : { username: args.username }}); } },

        findAdminByEmail: { type: PersonType, args: { email: { type: GraphQLString, } }, resolve(source, args, context, info) { return personModel.findOne({ where : { email: args.email, is_admin: true }}); } },
        findAdminByUsername: { type: PersonType, args: { username: { type: GraphQLString } }, resolve(source, args, context, info) { return personModel.findOne({ where : { username: args.username, is_admin: true }}); } },
    }
});
export { PersonQuery };