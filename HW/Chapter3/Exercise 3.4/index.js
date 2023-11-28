const express = require('express');
const router = require('./router');
const port = 3000;
const app = express();
app.use(express.urlencoded({ extended: true }));

app.use('/', router);
app.set('views', `${__dirname}/views`);
app.set('view engine', 'pug');

app.listen(port, ()=>console.log(`Server listening on porton port ${port}!`));