const express = require('expres');
const app = express();
const port = '5000' || process.env.PORT;

const mongoose = require('mongoose');

app.get('/', (req,res) => {
  res.send('Hello Heroku');
})

app.listen(port, () => {
  console.log("Skedge time");
})
