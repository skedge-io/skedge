const reqLogin = require('../middlewares/requireLogin.js');

module.exports = (app, Appointment) => {

  //Create Appointments
  app.post('/api/appointment/new', reqLogin, (req, res) => {
    let appointment = new Appointment();
    appointment.customer = req.body.customer;
    appointment.employee = req.body.employee;
    appointment.employee_id = req.user._id;
    appointment.title = req.body.title;
    appointment.phone = req.body.phone;
    appointment.desc = req.body.desc;
    appointment.start = req.body.start;
    appointment.end = req.body.end;
    appointment.business = req.user.business;
    appointment.save().then(() => {
      res.redirect('/dashboard');
    })
  });

  app.get('/api/appointments/:employee', reqLogin, (req, res) => {
    Appointment.find({employee_id : req.params.employee})
    .then((appointments) => {
      res.send(appointments);
    })
  })

}
