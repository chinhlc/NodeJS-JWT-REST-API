import express from 'express';
import { CategoryModel } from '../model/CategoryModel';
const router = express.Router();

router.get('/', async function(req, res) {
    const listCategories = await CategoryModel.getCategories();
    console.log(listCategories);
    res.render('index');
});

export default router;