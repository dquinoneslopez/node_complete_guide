const path = require('path');

const express = require('express');

const app = express();

 // EJS Templates
 app.set('view engine', 'ejs');

// Handlebars templates
// const expressHbs = require('express-handlebars');
// app.engine('hbs', expressHbs({
//     layoutsDir: 'views/layouts/',
//     defaultLayout: 'main-layout',
//     extname: 'hbs'
// }));
// app.set('view engine', 'hbs');

// PUG templates
// app.set('view engine', 'pug');

app.set('views', 'views'); // ya son los valores por defecto

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
    // res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
    res.status(404).render('404', {docTitle: 'Page No Found'});
});

app.listen(3000);