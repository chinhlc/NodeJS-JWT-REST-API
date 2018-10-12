import { User } from '../db';

export const UserModel = {
    getAllUsers: () => User.find({}),
    createUser: (user) => new User(user)
}