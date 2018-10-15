import { CategoryModel } from '../models/CategoryModel';

export const getAllCategories = async function(req, res) {
    const getAllCategories = await CategoryModel.getAllCategories()
    res.json(getAllCategories);
}