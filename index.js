import express from 'express';
import router from './src/routes';
import path from 'path';

const app = express();
const port = 6868;

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, "src/views"));
app.use('/', router);

app.listen(port, () => console.log(`Server ready at port ${ port }!`))