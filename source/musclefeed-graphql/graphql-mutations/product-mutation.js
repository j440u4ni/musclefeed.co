import { GraphQLString, GraphQLNonNull, GraphQLObjectType, GraphQLInt } from 'graphql';

import { CategoryType } from '../graphql-types/category-type';
import { PerfumeType } from '../graphql-types/perfume-type';
import { WeightType } from '../graphql-types/weight-type';
import { ProductType } from '../graphql-types/product-type';
import { SlideshowType } from '../graphql-types/slideshow-type';

import { weightModel } from '../../musclefeed-models/database';
import { categoryModel } from '../../musclefeed-models/database';
import { perfumeModel } from '../../musclefeed-models/database';
import { productModel } from '../../musclefeed-models/database';
import { slideshowModel } from '../../musclefeed-models/database';

import { bcrypt, saltSync } from '../../musclefeed-configuration';

import { addProductCategoryFunction, addProductPerfumeFunction, 
   addProductWeightFunction, addProductFunction, addSlideshowFunction } from '../../musclefeed-controllers/product-functions/product-function';

const ProductMutation = new GraphQLObjectType({ name: 'ProductMutation',
 fields: {
    addProductCategoryQuery: { type: CategoryType, args: { name: { type: new GraphQLNonNull(GraphQLString) }, description: { type: new GraphQLNonNull(GraphQLString) } }, resolve(source, args, context, info) { return addProductCategoryFunction(args.name, args.description); } },
    addProductPerfumeQuery: { type: PerfumeType, args: { name: { type: new GraphQLNonNull(GraphQLString) }, description: { type: new GraphQLNonNull(GraphQLString) } }, resolve(source, args, context, info) { return addProductPerfumeFunction(args.name, args.description); } },
    addProductWeightQuery: { type: WeightType, args: { name: { type: new GraphQLNonNull(GraphQLString) }, value: { type: new GraphQLNonNull(GraphQLInt) } }, resolve(source, args, context, info) { return addProductWeightFunction(args.name, args.value); } },
    addProductQuery: { type: ProductType, args: { title: { type: new GraphQLNonNull(GraphQLString) }, quantity: { type: new GraphQLNonNull(GraphQLInt) }, provider: { type: new GraphQLNonNull(GraphQLString) }, description_title: { type: new GraphQLNonNull(GraphQLString) }, description: { type: new GraphQLNonNull(GraphQLString) }, image: { type: new GraphQLNonNull(GraphQLString) }, details: { type: new GraphQLNonNull(GraphQLString) } }, 
      resolve(source, args, context, info) { return addProductFunction(args.title, args.quantity, args.provider, args.description_title, args.description, args.image, args.details); } },
    addSlideshowImageQuery: { type: SlideshowType, args: { name: { type: new GraphQLNonNull(GraphQLString) }, image: { type: new GraphQLNonNull(GraphQLString) } }, resolve(source, args, context, info) { return addSlideshowFunction(args.name, args.image); } },

    deleteProductCategoryQuery: { type: CategoryType, args: { id: { type: new GraphQLNonNull(GraphQLInt) } }, resolve(source, args, context, info) { categoryModel.destroy({ where: { id: args.id } }); } },
    deleteProductPerfumeQuery: { type: PerfumeType, args: { id: { type: new GraphQLNonNull(GraphQLInt) } }, resolve(source, args, context, info) { perfumeModel.destroy({ where: { id: args.id } }); } },
    deleteProductWeightQuery: { type: WeightType, args: { id: { type: new GraphQLNonNull(GraphQLInt) } }, resolve(source, args, context, info) { weightModel.destroy({ where: { id: args.id } }); } },
    deleteProductQuery: { type: ProductType, args: { id: { type: new GraphQLNonNull(GraphQLInt) } }, resolve(source, args, context, info) { productModel.destroy({ where: { id: args.id }}); } },
    deleteSlideshowImageQuery: { type: SlideshowType, args: { id : { type: new GraphQLNonNull(GraphQLInt) } }, resolve(source, args, context, info) { slideshowModel.destroy({ where: { id: args.id }} ); } }
 }
});

export { ProductMutation };