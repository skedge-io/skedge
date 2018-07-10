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

  // Create User Account
  app.post('/account/setup', (req, res) => {
    User.findById(req.user._id).then((user) => {
      user = {...user, ...req.body};
      user.save().then(() => {
        res.redirect('/dashboard');
      });
    }).catch((err) => {
      console.log(err);
    })
  })

}
