import { GraphQLString, GraphQLObjectType, GraphQLInt, GraphQLList } from 'graphql';

import { CategoryType } from '../graphql-types/category-type';
import { PerfumeType } from '../graphql-types/perfume-type';
import { WeightType } from '../graphql-types/weight-type';
import { ProductType } from '../graphql-types/product-type';
import { SlideshowType } from '../graphql-types/slideshow-type';

import { categoryModel } from '../../musclefeed-models/database';
import { perfumeModel } from '../../musclefeed-models/database';
import { weightModel } from '../../musclefeed-models/database';
import { productModel } from '../../musclefeed-models/database';
import { slideshowModel } from '../../musclefeed-models/database';

const ProductQuery = new GraphQLObjectType({ name: 'ProductQuery',
    fields: {
        fetchAllCategories: { type: new GraphQLList(CategoryType), resolve(source, args, context, info) { return categoryModel.findAll(); } },
        fetchAllPerfumes: { type: new GraphQLList(PerfumeType), resolve(source, args, context, info) { return perfumeModel.findAll(); } },
        fetchAllWeights: { type: new GraphQLList(WeightType), resolve(source, args, context, info) { return weightModel.findAll(); } },
        fetchSlideshowImage: { type: new GraphQLList(SlideshowType), resolve(source, args, context, info) { return slideshowModel.findAll(); } },
        fetchProducts: { type: new GraphQLList(ProductType), resolve(source, args, context, info) { return productModel.findAll(); } }
    }
});
export { ProductQuery };