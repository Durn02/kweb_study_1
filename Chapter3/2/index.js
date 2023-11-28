// code 3.5
// const express = require('express');

// const port = 3000;
// const app = express();

// app.get('/', (req, res) => res.send(`
//     <h1>ㅎㅇ</h1>
//     <h3>헬로!</h3>
// `));

// app.listen(port, () => console.log(`server listening on port ${port}`));


const express = require('express');
const port = 3000;
const app = express();

app.set('views', `${__dirname}/views`);
app.set('view engine', 'pug');

app.get('/', (req, res) => res.render('index.pug') );
app.get('/page', (req, res) => {
    const { page, author } = req.query;
    res.render('board.pug', { page, author }); // 링크에 http://127.0.0.1:3000/page?page=1&author=두현 작성
});
app.get('/posts', (req, res) => {
    const { until } = req.query;
    const untilParsed = parseInt(until, 10);

    const posts = [];
    if(!isNaN(untilParsed)) {
        for(let i=0; i<untilParsed; i++) {
            posts.push(`Post ${i+1}`);
        }
    }
    res.render('posts.pug', { posts }); // 링크에 http://127.0.0.1:3000/posts?until=8 작성
});

app.listen(port, () => console.log(`server listening on port ${port}`));
