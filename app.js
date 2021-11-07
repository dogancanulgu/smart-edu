const express = require('express');
const mongoose = require('mongoose');
const pageRoute = require('./routes/pageRoute');
const courseRoute = require('./routes/courseRoute');

const app = express();

// connect DB
mongoose
  .connect('mongodb://localhost/smartedu-db')
  .then(() => console.log('DB connected succesfully.'));

// template engine
app.set('view engine', 'ejs');

// middleware
app.use(express.static('public'));

// routes
app.use('/', pageRoute);
app.use('/courses', courseRoute);

// port
const port = 3000;
app.listen(port, () => {
  console.log(`Server has been bounded at ${port}.`);
});
