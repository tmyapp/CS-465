const express = require('express');
const path = require('path');
require('./app_server/models/db');
const handlebars = require('hbs');

const indexRouter = require('./app_server/routes/index');
const travelRouter = require('./app_server/routes/travel');
const apiRouter = require('./app_api/routes/index');

const app = express();
const port = 3000;

// view engine setup
app.set('views', path.join(__dirname, 'app_server', 'views'));
app.set('view engine', 'hbs');

// register handlebars partials
handlebars.registerPartials(path.join(__dirname, 'app_server', 'views', 'partials'));

// serve static files
app.use(express.static(path.join(__dirname, 'public')));

// routes
app.use('/', indexRouter);
app.use('/travel', travelRouter);
app.use('/api', apiRouter);

// start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});