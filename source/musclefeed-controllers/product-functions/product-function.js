import { categoryModel } from '../../musclefeed-models/database';
import { perfumeModel } from '../../musclefeed-models/database';
import { weightModel } from '../../musclefeed-models/database';

export function addProductCategoryFunction(name, description) { return categoryModel.create({ name: name, description: description }) .then((category) => { return category; }); }
export function addProductPerfumeFunction(name, description) { return perfumeModel.create({ name: name, description: description }).then((perfume) => { return perfume; }); }
export function addProductWeightFunction(name, value) { return weightModel.create({ name: name, value: value }).then((weight) => { return weight; }); }