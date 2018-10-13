import { User } from '../db';

export const UserModel = {
    getAllUsers: () => User.find({}),
    createUser: (user) => new User(user),
    getOneUser: (userEmail) => User.findOne({ email: userEmail })
}