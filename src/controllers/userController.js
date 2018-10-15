import jsonWebToken from 'jsonwebtoken';
import { UserModel } from '../models/UserModel';
import bcrypt from 'bcrypt';

export const Register = function(req, res) {
    const newUser = UserModel.createUser(req.body);
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
    UserModel.getOneUser(req.body.email).exec(function(err, user) {
        if (err) throw err;
        if (!user) {
            res.status(401).json({ message: 'Authentication failed! User not found!' });
        } else {
            if (!user.comparePassword(req.body.password)) {
                res.status(401).json({ message: 'Authentication failed! Wrong password!' })
            } else {
                user.password = undefined;
                return (
                    res
                        .json({ token: jsonWebToken.sign(
                            {
                                id: user.id,
                                email: user.email,
                                user_name: user.user_name
                            }, 
                            'private_key', 
                            { expiresIn: '1h' }
                        ) 
                    })
                );
            }
        }
    });
}
