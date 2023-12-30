const express = require("express");
const app = express();
const port = 3030;
const jwt = require('jsonwebtoken');
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use('/public', express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.render('index');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

app.post('/', (req, res) => {
    const username = req.body.username;
    const user = { name: username}
    const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET)
    res.json({ accessToken: accessToken})
});

app.get('/signUp', (req, res) => {
    res.render('signUp.ejs');
});

app.use(express.json());
