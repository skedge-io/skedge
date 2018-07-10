module.exports = (passport, app, User) => {

  app.get('/auth/google', passport.authenticate('google',
     {
      scope: ['profile', 'email']
     })
   );

  app.get('/auth/google/callback', passport.authenticate('google'), (req, res) => {
      res.redirect('/account/setup');
    }
  );

  app.get('/api/logout', (req, res) => {
    req.logout();
    res.redirect('/');
  });


  app.get('/api/current_user', (req, res) => {
      res.send(req.user);
  })

  // Finish User Account
  app.post('/api/user/new', (req, res) => {
    User.findById(req.user._id).then((user) => {
      user.name = req.body.name;
      user.business = req.body.business;
      user.phone = req.body.phone;
      user.save().then(() => {
        console.log("User Saved");
        res.redirect('/dashboard');
      }).catch((err) => {
        console.log(err);
      });
    }).catch((err) => {
      console.log(err);
    })
  })

}
