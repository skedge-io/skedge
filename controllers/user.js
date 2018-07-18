const Business = require('../models/Business.js');
module.exports = (passport, app, User) => {

  app.get('/auth/google', passport.authenticate('google',
     {
      scope: ['profile', 'email']
     })
   );

  app.get('/auth/google/callback', passport.authenticate('google'), (req, res) => {
      if(req.user.name){
        res.redirect('/dashboard');
      }else{
        res.redirect('/account/setup');
      }
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
        let business = new Business();
        business.name = req.body.business;
        business.owner = req.body.name;
        business.employees.push(req.body.name);
        business.save().then(() => {
          res.redirect('/dashboard');
        })
      });
    }).catch((err) => {
      console.log(err);
    })
  })

  app.get('/api/users/emails', (req, res) => {
    User.find().then((users) => {
      let emails = [];
      users.map((user) => {
        emails.push(user.email);
      })
      res.send(emails);
    })
  })

}
