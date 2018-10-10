import express from 'express';
import router from './src/routes';
import path from 'path';

import bodyParser from 'body-parser';
import compression from 'compression';

const app = express();
const port = 6868;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(compression());

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, "src/views"));
app.use('/', router);

app.listen(port, () => console.log(`🚀   Server ready at http://localhost:${ port }`))