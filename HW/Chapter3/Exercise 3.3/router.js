const { Router } = require('express');
const router = Router();

router.get('/factorial', (req, res)=>{
    const num = req.query.number;
    res.redirect(`/factorial/:${num}`);
});
router.get('/factorial/:number', (req, res)=>{
    const num = req.params.number.substring(1);    
    let answer = 1;
    for(let i=1; i<=num; i++) {
        answer *= i;
    }
    res.send(`${answer}`);
});

module.exports = router;