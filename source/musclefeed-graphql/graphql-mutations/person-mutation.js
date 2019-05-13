import { GraphQLString, GraphQLNonNull, GraphQLObjectType, GraphQLInt } from 'graphql';

import { PersonType } from '../graphql-types/person-type';
import { personModel } from '../../musclefeed-models/database';
import { bcrypt, saltSync } from '../../musclefeed-configuration';

import { authenticateAdmin } from '../../musclefeed-controllers/account-functions/authentication-function';
import { authenticateGuest } from '../../musclefeed-controllers/account-functions/authentication-function';

const PersonMutation = new GraphQLObjectType({ name: 'PersonMutation',
 fields: {
     makeGuestAccount: { type: PersonType, args: { email: { type: GraphQLString }, password: { type: new GraphQLNonNull(GraphQLString) }, firstname: { type: new GraphQLNonNull(GraphQLString) }, lastname: { type: new GraphQLNonNull(GraphQLString) }, phone: { type: new GraphQLNonNull(GraphQLString) }, username: { type: new GraphQLNonNull(GraphQLString)}, civility: { type: new GraphQLNonNull(GraphQLString) } }, resolve: (source, args, context, info) => { return personModel.create({ firstname: args.firstname, lastname: args.lastname, username: args.username, email: args.email, password: bcrypt.hashSync(args.password, saltSync), token: bcrypt.hashSync(args.firstname+args.password+args.lastname+(new Date().getTime())), civility: args.civility, phone: args.phone, is_admin: false, signup_date: (new Date().getDate()) }); } },
     retrieveGuestAccount: { type: PersonType, args: { email: { type: GraphQLString }, password: { type: GraphQLString } }, resolve(source, args, context, info) { return authenticateGuest(source, args, context, info); } },
     retrieveAdminAccount: { type: PersonType, args: { email: { type: GraphQLString }, password: { type: GraphQLString } }, resolve(source, args, context, info) { return authenticateAdmin(source, args, context, info); } },
     deleteGuestAccountByEmail: { type: PersonType, args: { email: { type: new GraphQLNonNull(GraphQLString) } }, resolve: (source, args, context, info) => { personModel.destroy({ where: { email: args.email } }); } },
     deleteGuestAccountByID: { type: PersonType, args: { id: { type: new GraphQLNonNull(GraphQLInt) } }, resolve: (source, args, context, info) => { personModel.destroy({ where: { id: args.id } }); } },
 }
});

export { PersonMutation };