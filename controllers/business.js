module.exports = (app, Business) => {

  app.get('/api/current_business', (req, res) => {
    Business.findById(req.user.business).then((business) => {
      res.send(business);
    })
  })

}
