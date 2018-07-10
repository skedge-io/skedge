const express = require('express');
const app = express();
const port = process.env.PORT || '5000';

const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/skedge', () => {
  console.log("Connected to Skedge Database");
});


const keys = require('./config/keys');
const passport = require('passport');
require('./services/passport.js');
app.use(passport.initialize());
app.use(passport.session());


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

//User Controller and Model
const User = require('./models/User.js');
require('./controllers/user.js')(passport, app, User);

app.listen(port, () => {
  console.log("Skedge time");
})
