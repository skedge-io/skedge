const reqLogin = require('../middlewares/requireLogin.js');

module.exports = (app, Appointment) => {

  //Create Appointments
  app.post('/api/appointment/new', reqLogin, (req, res) => {
    let appointment = new Appointment();
    appointment.customer = req.body.customer;
    appointment.employee = req.body.employee;
    appointment.employee_id = req.user._id;
    appointment.title = req.body.employee + " <> " + req.body.customer;
    appointment.phone = req.body.phone;
    appointment.desc = req.body.desc;
    appointment.start = req.body.start;
    appointment.end = req.body.end;
    appointment.business = req.user.business;
    appointment.save().then(() => {
      res.redirect('/dashboard');
    })
  });

  app.get('/api/appointments', reqLogin, (req, res) => {
    Appointment.find({employee_id : req.user._id})
    .then((appointments) => {
      res.send(appointments);
    })
  })

}
