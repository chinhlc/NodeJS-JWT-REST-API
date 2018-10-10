import express from 'express';
import { UserModel } from '../model/UserModel';
const router = express.Router();

router.get('/list-users', async function(req, res) {
    const listUsers = await UserModel.getAllUsers();
    res.status(200).json(listUsers);
});

export default router;