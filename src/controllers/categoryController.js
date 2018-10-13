import { CategoryModel } from '../models/CategoryModel';

export const listCategory = async function(req, res) {
    const listCategory = await CategoryModel.getCategories()
    res.json(listCategory);
}