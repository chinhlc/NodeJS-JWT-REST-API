import jwt from 'jsonwebtoken';
import { userModel } from '../models/UserModel';
import bcrypt from 'bcrypt';

export const Register = function(req, res) {
    const newUser = new userModel(req.body);
    newUser.password = bcrypt.hashSync(req.body.password, 10);
    newUser.save(function(err, user) {
        if (err) {
            return res.status(400).send({
                message: err
            });
        } else {
            user.password = undefined;
            return res.json(user);
        }
    });
}

export const SignIn = function(req, res) {

}

export const LoginRequired = function(req, res) {

}