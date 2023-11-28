const { Router } = require('express')
const router = Router();

var body_data = [];
router.get('/', (req, res) => {
    res.render('index.pug')
});
router.post('/login', (req, res) => {
    const obj = req.body;
    const reply = Object.keys(obj).map(k => `${k}: ${obj[k]}`).join('\n');
    res.send(`${reply}`);
});

module.exports = router;

