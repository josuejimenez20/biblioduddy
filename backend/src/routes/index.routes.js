const express = require("express");

const app = express();

app.use('/users', require('../routes/usersRoutes/users.routes'));

module.exports = app;

