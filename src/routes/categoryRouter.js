import express from 'express';
import { signInRequired } from '../middlewares/authMiddleware';
import { getAllCategories } from '../controllers/categoryController';

const router = express.Router();

router.get('/get-all-category', signInRequired, getAllCategories);

export default router;