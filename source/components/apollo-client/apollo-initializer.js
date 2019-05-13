import { default as ApolloClient } from 'apollo-boost';
import { HttpLink } from 'apollo-link-http';
import { ApolloLink } from 'apollo-link';
import fetch from 'isomorphic-fetch';

if(!process.browser) { global.fetch = fetch; }

const linkGuest = new HttpLink({  uri: 'http://localhost:3000/v1/graphql-account', fetch: fetch });
const linkMain = ApolloLink.from([linkGuest]);
const apolloClientGuest = new ApolloClient({ uri: linkMain });

export { apolloClientGuest };