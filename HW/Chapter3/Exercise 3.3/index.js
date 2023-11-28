const express = require('express');
const router = require('./router');
const port = 3000;
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use('/', router);

app.get('/', (req, res) => res.send('hello'));

app.listen(port, ()=>console.log(`Server listening on port ${port}`));