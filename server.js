const express = require('express');
const app = express();
const port = process.env.PORT || '5000';

const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/skedge', () => {
  console.log("Connected to Skedge Database");
});


const authKeys = require('./config/keys');
const passport = require('passport');
require('./services/passport.js');
const cookieSession = require('cookie-session');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
app.use(cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [authKeys.cookieKey]
  })
)
app.use(passport.initialize());
app.use(passport.session());

//Initalize the texting object
let texts = {};
module.exports = {texts};

//User Controller and Model
const User = require('./models/User.js');
require('./controllers/user.js')(passport, app, User);

//Appointment Controller and Model
const Appointment = require('./models/Appointment.js');
require('./controllers/appointment.js')(app, Appointment);

//Business Controller and Model
const Business = require('./models/Business.js');
require('./controllers/business.js')(app, Business, texts);


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

app.listen(port, () => {
  console.log("Skedge time");
})
