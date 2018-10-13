import express from 'express';
import authrouter from './src/routes/authRouter';
import categoryrouter from './src/routes/categoryRouter';
import path from 'path';

import bodyParser from 'body-parser';
import compression from 'compression';
import jsonWebToken from 'jsonwebtoken';

const app = express();
const port = 6868;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(compression());

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, "src/views"));

app.use(function(req, res, next) {
    if (req.headers && req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
        let token = req.headers.authorization.split(' ')[1];
        jsonWebToken.verify(token, 'private_key_example', function(err, decode) {
            if (err) {
                req.user = undefined;
            } else {
                req.user = decode;
            }
            next();
        });
    } else {
        req.user = undefined;
        next();
    }
});

app.use('/auth', authrouter);
app.use('/', categoryrouter);


app.listen(port, () => console.log(`🚀 Server ready at http://localhost:${ port }`));