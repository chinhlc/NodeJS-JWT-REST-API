import { User } from '../db';

export const UserModel = {
    getAllUsers: () => User.find({})
}