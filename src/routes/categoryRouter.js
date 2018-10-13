import express from 'express';
import { signInRequired } from '../middlewares/authMiddleware';
import { listCategory } from '../controllers/categoryController';

const router = express.Router();

router.get('/list-category', signInRequired, listCategory);

export default router;