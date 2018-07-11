module.exports = (app, Appointment) => {

  //Create Appointments
  app.post('/api/appointment/new', (req, res) => {
    let appointment = new Appointment();
    appointment.customer = req.body.customer;
    appointment.employee = req.body.employee;
    appointment.employee_id = req.user._id;
    appointment.phone = req.body.phone;
    appointment.notes = req.body.notes;
    appointment.date = req.body.date;
    appointment.time = req.body.time;
    appointment.business = req.user.business;
    appointment.save().then(() => {
      res.redirect('/dashboard');
    })
  });

  app.post('/api/appointments/:employee', (req, res) => {
    Appointment.find({employee_id : req.params.employee})
    .then((err, appointments) => {
      res.json(appointments);
    })
  })

}
