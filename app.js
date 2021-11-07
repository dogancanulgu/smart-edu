const express = require('express');
const pageRoute = require('./routes/pageRoute');
const app = express();

// template engine
app.set('view engine', 'ejs');

// middleware
app.use(express.static('public'));

app.use('/', pageRoute);

// port
const port = 3000;
app.listen(port, () => {
  console.log(`Server has been bounded at ${port}.`);
});
