module.exports = (req, res, next) => {
  if (!req.user.admin) {
    return res.status(404).send({ error: 'page not found' });
  }

  next();
};
