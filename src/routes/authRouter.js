import express from 'express';
import { Register, SignIn } from '../controllers/userController';
const router = express.Router();

router.post('/register', Register);

router.post('/sign-in', SignIn);

export default router;