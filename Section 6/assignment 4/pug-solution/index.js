const express = require('express'); 

const app = express();

const bodyParser = require('body-parser');

const users = [];

app.set('view engine', 'pug');
app.set('views', 'views');

app.use(bodyParser.urlencoded({extended: false}));


app.get('/', (req, res, next) => {
    res.render('index', {
        docTitle: 'Add User'
    });
});

app.get('/users', (req, res, next) => {
    res.render('users', {
        docTitle: 'Users',
        users: users
    });
});

app.post('/add-user', (req, res, next) => {
    users.push({name: req.body.userName});
    res.redirect('/users');
});

app.listen(3000);