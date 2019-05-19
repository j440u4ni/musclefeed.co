import express from 'express';
import graphqlHTTP from 'express-graphql';
import bodyparser from 'body-parser';
import cors from 'cors';
import next from 'next';
import cookieparser from 'cookie-parser';

const PORT = process.env.PORT || 3000;
const ENV = process.env.NODE_ENV || false;
const corsOptions = { origin: 'http://localhost:4000' };

import { databaseConnection, personModel } from './musclefeed-models/database';
import { accountSchema, productSchema } from './musclefeed-graphql/musclefeed-schema';
import { saltSync, bcrypt } from './musclefeed-configuration';
import { adminIsLogged, adminIsNotLogged } from './protected.middleware';

const render = next({ ENV });
const handle = render.getRequestHandler();

render.prepare().then(() => {
    const application = express();
    application.use(cookieparser()); application.use(cors(corsOptions)); application.use(bodyparser.json({ limit: '10mb' }));
    application.use(bodyparser.urlencoded({ extended: true })); application.use('/v1/graphql-first-instance/BtL7NQwOt0R7psYw1Fyx', graphqlHTTP((request, response) => ({ schema: accountSchema, graphiql: true }) ));
    application.use(bodyparser.urlencoded({ extended: true, limit: '10mb' })); application.use('/v1/graphql-second-instance/0lqY5JycFu4BwCDv7vsM', graphqlHTTP((request, response) => ({ schema: productSchema, graphiql: true }) ));
    
    application.get('/admin-account', adminIsNotLogged, (request, response) => { const page = '/admin-account'; return handle(request, response, page); });
    application.get('/admin-dashboard', adminIsLogged, (request, response) => { const page = '/admin-dashboard'; return handle(request, response, page); });
    application.get('/admin-products', adminIsLogged, (request, response) => { const page = '/admin-products'; return handle(request, response, page); });
    application.get('/admin-product-new', adminIsLogged, (request, response) => { const page = '/admin-product-new'; return handle(request, response, page); });
    application.get('/admin-payments', adminIsLogged, (request, response) => { const page = '/admin-payments'; return handle(request, response, page); });
    application.get('/admin-orders', adminIsLogged, (request, response) => { const page = '/admin-orders'; return handle(request, response, page); });

    application.get('*', (request, response, next) => { return handle(request, response, next); });

    application.listen(PORT, '10.188.37.107', () => { console.log('> Listening on server : ' + PORT); }); 
});

databaseConnection.sync({ force: true }).then(() => { 
    console.log('Synced database.');
    personModel.create({ firstname: 'Oussama', lastname: 'Jaaouani', username: 'j440u4ni', email: 'j440u4ni@gmail.com', password: bcrypt.hashSync('password', saltSync), token: bcrypt.hashSync('Jaaouani Oussama'+'password'+(new Date().getTime())), civility: 'Mr', phone: '+33646018759', city: 'Valence', country: 'France', main_address: '6 rue Célestin Poncet', secondary_address: 'Etage 3 Appartement 318', is_admin: true, signup_date: (new Date().getDate()) });
    personModel.create({ firstname: 'Abdelaziz', lastname: 'Zouheir', username: 'zouheir', email: 'indik@live.fr', password: bcrypt.hashSync('password', saltSync), token: bcrypt.hashSync('Abdelaziz Zouheir'+'password'+(new Date().getTime())), civility: 'Mr', phone: '+33766163622', city: 'Valence', country: 'France', main_address: '25 rue La Fontaine', secondary_address: 'Aucune', is_admin: true, signup_date: (new Date().getDate()) });
});

