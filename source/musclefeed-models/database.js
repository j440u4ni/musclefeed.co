import Sequelize from 'sequelize';

import { makePersonModel } from './person.model';
import { makeWeightModel } from './weight.model';
import { makePerfumeModel } from './perfume.model';
import { makeProductModel } from './product.model';
import { makeCategoryModel } from './category.model';
import { makeSlideshowModel } from './slideshow.model';

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
const categoryModel = makeCategoryModel(databaseConnection);
const slideshowModel = makeSlideshowModel(databaseConnection);

export { databaseConnection, personModel, weightModel, perfumeModel, productModel, categoryModel, slideshowModel };