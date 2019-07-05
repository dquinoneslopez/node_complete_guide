const express = require('express');

const app = express();

// app.use((req, res, next) => {
//     console.log('First middleware');
//     next();
// });

// app.use((req, res, next) => {
//     console.log('Second middleware');
//     res.send("<h1>Done!</h1>");
// });

app.use("/users", (req, res, next) => {
    console.log('Users middleware');
    res.send("<h1>Middleware for handling /users requests</h1>");
});

app.use("/", (req, res, next) => {
    console.log('/ middleware');
    res.send("<h1>Middleware for handling / requests</h1>");
});

app.listen(3000);
