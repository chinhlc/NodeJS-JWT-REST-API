import { Category } from '../db';

export const CategoryModel = {
    getCategories: () => Category.find({})
}