import cookie from 'js-cookie';
import Router from 'next/router';
import { retrieveAccount } from '../apollo-client/account-apollo/authentication-query';

const hostname = 'http://10.188.37.107';

export function authenticateService(email, password, admin) {
    const authenticationQuery = retrieveAccount(admin);
    return fetch(hostname+':3000/v1/graphql-account', { method: 'POST', headers: { 'Content-Type': 'application/json', 'Accept': 'application/json', }, body: JSON.stringify({ query: authenticationQuery, variables: { email, password } }) })
        .then((response) => { return response.json(); })
        .then((data) => { return data; })
}

export function logoutService(admin) {
    cookie.remove('authentication-token');
    cookie.remove('authentication-user');
    admin ? Router.push('/admin-account') : Router.push('/');
}