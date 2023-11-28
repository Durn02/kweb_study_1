// // code 1.3
// const http = require('http');
// const hostname = '127.0.0.1';
// const port = 3000;
// const server = http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/plain');
//     res.end('Hello World\n');
// });
// server.listen(port, hostname, () => {
//     console.log(`Server running at http://${hostname}:${port}/`);
// });


// code 1.3과 동일한 기능의 코드
const express = require('express');
const router = require('./router');

const app = express();
const port = 3000;

app.use('/', router);

// app.get('/', (req, res) => res.send('Hello World!'));
app.listen(port, () => console.log(`Server listening on port ${port}!`));


// // code 3.2
// const express = require('express');
// const app = express();
// const port = 3000;
// app.use((req, res, next) => {
//     const randomNumber = Math.floor(Math.random() * 10);
//     console.log(`Random Number: ${randomNumber}`);
//     if (randomNumber % 3) return next();
//     else return res.sendStatus(403);
// });
// app.use((req, res, next) => {
//     const { method, path } = req;
//     console.log(`${method} ${path}`);
//     return next();
// });
// app.get('/', (req, res) => res.send('GET /'));
// app.post('/', (req, res) => res.send('POST /'));
// app.listen(port, () => console.log(`Server listening on port ${port}!`));