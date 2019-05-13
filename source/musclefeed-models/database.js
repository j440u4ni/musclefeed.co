import Sequelize from 'sequelize';

import { makePersonModel } from './person.model';
import { makeWeightModel } from './weight.model';
import { makePerfumeModel } from './perfume.model';
import { makeProductModel } from './product.model';

const databaseConnection = new Sequelize(
    'musclefeed-local-node', 
    'root',
    'root',
        { dialect: 'mysql' }
);

const personModel = makePersonModel(databaseConnection);
const weightModel = makeWeightModel(databaseConnection);
const perfumeModel = makePerfumeModel(databaseConnection);
const productModel = makeProductModel(databaseConnection);

export { databaseConnection, personModel, weightModel, perfumeModel, productModel };