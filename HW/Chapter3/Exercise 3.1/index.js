const express = require('express');
const port = 3000;
const app = express();
app.use(express.urlencoded({ extended: true }));

var query_data = [];
app.get('/', (req, res) => {
    query_data = req.query;
    const reply = Object.keys(query_data).map(k => `${k}: ${query_data[k]}`).join('\n');
    res.send(reply);
});

var body_data = [];
app.post('/', (req, res) => {
    body_data = req.body;
    const reply = Object.keys(body_data).map(k => `${k}: ${body_data[k]}`).join('\n');
    res.send(reply);
});
app.put('/', (req, res) => {
    body_data = req.body;
    const reply = Object.keys(body_data).map(k => `${k}: ${body_data[k]}`).join('\n');
    res.send(reply);
});
app.delete('/', (req, res) => {
    body_data = req.body;
    const reply = Object.keys(body_data).map(k => `${k}: ${body_data[k]}`).join('\n');
    res.send(reply);
});

app.listen(port, () => console.log(`Server listening on port ${port}!`));