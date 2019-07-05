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

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const bodyParser = require('body-parser');

const errorController = require('./controllers/error');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

app.listen(3000);