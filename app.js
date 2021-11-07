const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.status(200).send('INDEX SAYFASI');
});

// port
const port = 3000;
app.listen(port, () => {
  console.log(`Server has been bounded at ${port}.`);
});
