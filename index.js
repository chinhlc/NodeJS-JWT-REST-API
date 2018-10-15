import express from 'express';
import path from 'path';
import Routers from './src/routes';

import bodyParser from 'body-parser';
import compression from 'compression';
import jsonWebToken from 'jsonwebtoken';

import cors from 'cors';

const app = express();
const port = 6868;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(compression()); // compression response

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, "src/views"));

// Check token from header request
app.use(function(req, res, next) {
    if (req.headers && req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
        let token = req.headers.authorization.split(' ')[1];
        jsonWebToken.verify(token, 'private_key', function(err, decode) {
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

app.options('*', cors()); // Pass all cors
app.use(cors({
    exposedHeaders: '*'
}));

app.use('/auth', Routers.authRouter);
app.use('/category', Routers.categoryRouter);

app.listen(port, () => console.log(`🚀 Server ready at http://localhost:${ port }`));