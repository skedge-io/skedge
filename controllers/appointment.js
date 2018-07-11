module.exports = (app, Appointment) => {

  //Create Appointments
  app.post('/api/appointment/new', (req, res) => {
    let appointment = new Appointment();
    appointment = req.body;
    appointment.business = req.user.business;
    appointment.save().then(() => {
      res.redirect('/dashboard');
    })
  });

}
