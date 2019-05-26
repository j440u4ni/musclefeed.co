import cookie from 'js-cookie';
import Router from 'next/router';
import { retrieveAccount, registerQuery } from '../apollo-client/account-apollo/authentication-query';
import fetch from 'node-fetch';

const hostname = 'http://10.188.37.107';

export function authenticateService(email, password, admin) {
    const authenticationQuery = retrieveAccount(admin);
    return fetch(hostname+':3000/v1/graphql-first-instance/BtL7NQwOt0R7psYw1Fyx', { method: 'POST', headers: { 'Content-Type': 'application/json', 'Accept': 'application/json', }, body: JSON.stringify({ query: authenticationQuery, variables: { email: email, password: password } }) })
        .then((response) => { return response.json(); })
        .then((data) => { return data; })
}

export function logoutService(admin) {
    cookie.remove('authentication-token');
    cookie.remove('authentication-user');
    admin ? Router.push('/admin-account') : Router.push('/');
}

export function registerService(civility, firstname, lastname, email, password, phone) {
    return fetch(hostname+':3000/v1/graphql-first-instance/BtL7NQwOt0R7psYw1Fyx', { method: 'POST', headers: { 'Content-Type': 'application/json', 'Accept': 'application/json', }, body: JSON.stringify({ query: registerQuery, variables: { civility: civility, firstname: firstname, lastname: lastname, email: email, password: password, phone: phone } }) })
        .then((response) => { return response.json(); })
        .then((data) => { return data; })
}