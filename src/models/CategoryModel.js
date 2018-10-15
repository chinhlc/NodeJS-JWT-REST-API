import { Category } from '../db';

export const CategoryModel = {
    getAllCategories: () => Category.find({})
}