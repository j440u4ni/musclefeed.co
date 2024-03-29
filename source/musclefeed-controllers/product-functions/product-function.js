import { categoryModel } from '../../musclefeed-models/database';
import { perfumeModel } from '../../musclefeed-models/database';
import { weightModel } from '../../musclefeed-models/database';
import { productModel } from '../../musclefeed-models/database';
import { slideshowModel } from '../../musclefeed-models/database';

export function addProductCategoryFunction(name, description, parent) { return categoryModel.create({ name: name, description: description, parent: parent }) .then((category) => { return category; }); }
export function addProductPerfumeFunction(name, description) { return perfumeModel.create({ name: name, description: description }).then((perfume) => { return perfume; }); }
export function addProductWeightFunction(name, value) { return weightModel.create({ name: name, value: value }).then((weight) => { return weight; }); }
export function addProductFunction(title, quantity, provider, description_title, description, image, details) { 
    return productModel.create({ title: title, description_title: description_title, description: description, quantity: quantity, provider: provider, image: image, details: details }).then((product) => { return product; }); }
export function addSlideshowFunction(name, image) { return slideshowModel.create({ name, image }); }