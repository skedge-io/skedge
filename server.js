const express = require('expres');
const app = express();
const port = '5000' || process.env.PORT;

const mongoose = require('mongoose');

if (process.env.NODE_ENV === 'production') {
  // Express will serve up production assets
  // like our main.js or main.css file
  app.use(express.static('client/build'));
  // Express will serve up index.html file
  // if it doesnt recognize route
  const path = require('path');
  app.get('*', (req,res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  })
}

app.get('/', (req,res) => {
  res.send('Hello Heroku');
})

app.listen(port, () => {
  console.log("Skedge time");
})
