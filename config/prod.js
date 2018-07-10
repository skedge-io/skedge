//prod.js - production keys
module.exports = {
  googleClientID: process.env.GOOGLE_AUTH_ID,
  googleClientSecret: process.env.GOOGLE_AUTH_SECRET,
  // mongoURI: process.env.MONGO_URI,
  cookieKey: process.env.COOKIE_KEY,
  redirectDomain: process.env.REDIRECT_DOMAIN
}
