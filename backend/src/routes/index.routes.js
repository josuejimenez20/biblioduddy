const express = require("express");

const app = express();

app.use('/users', require('../routes/usersRoutes/users.routes'));
app.use('/currenlty', require('../routes/currentlyBooksRoutes/index.routes'));
app.use('/pending', require('../routes/pendingBooksRoutes/index.routes'));
app.use('/history', require('../routes/historyBooksRoutes/index.routes'));
app.use('/wish', require('../routes/wishBooksRoutes/index.routes'));
app.use('/post', require('../routes/post/index.routes'));

module.exports = app;

