
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const User = require('../models/User');
const authKeys = require('../config/keys');


passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});

passport.use(
  new GoogleStrategy(
  {
    clientID: authKeys.googleClientID,
    clientSecret: authKeys.googleClientSecret,
    callbackURL: '/auth/google/callback',
    proxy: true
  },
  async (accessToken, refreshToken, profile, done) => {
  const existingUser = await User.findOne({ googleId: profile.id})

        if (existingUser) {
          // we already have a user
          return done(null, existingUser);
        }
        // make a new record
        console.log(profile);
        let user = await new User({
          googleId: profile.id,
          email: profile.email
        }).save()
        done(null, user);
    })
  );
