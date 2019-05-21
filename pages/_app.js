import React, { Component } from 'react';
import App, { Container } from "next/app";
import { ApolloProvider } from 'react-apollo';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import withRedux from 'next-redux-wrapper';

import { authenticationReducer } from '../source/components/redux-reducers/authentication-reducer';
import { adminReducer } from '../source/components/redux-reducers/admin-reducer';
import { accountReducer } from '../source/components/redux-reducers/account-reducer';
import { apolloClientGuest } from '../source/components/apollo-client/apollo-initializer';

import '../static/resources/_global.scss';

const reduxLogger = createLogger();
const makeStore = () => { return createStore(combineReducers({ authenticationReducer, accountReducer, adminReducer }), applyMiddleware(thunk,  reduxLogger)); }

class MuscleApplication extends App {
    render() {
        const { Component, pageProps, store } = this.props;
        return(
            <Container>
                <ApolloProvider client={apolloClientGuest}>
                    <Provider store={store}><Component {...pageProps} /></Provider>
                </ApolloProvider>
            </Container>
        );
    }
}

export default withRedux(makeStore)(MuscleApplication);