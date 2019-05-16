module.exports = (req, res, next) => {
  if (!req.user.plan === 'Premium') {
    return res.status(401).send({ error: 'You need to upgrade your account to use this feature.' });
  }

  next();
};
