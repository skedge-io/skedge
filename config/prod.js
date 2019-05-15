//prod.js - production keys
module.exports = {
  googleClientID: process.env.GOOGLE_AUTH_ID,
  googleClientSecret: process.env.GOOGLE_AUTH_SECRET,
  googleCalendarKey : process.env.GOOGLE_CALENDAR_KEY,
  // mongoURI: process.env.MONGO_URI,
  cookieKey: process.env.COOKIE_KEY,
  redirectDomain: process.env.REDIRECT_DOMAIN,
  twilioAcc: process.env.TWILIO_ACC,
  twilioAuth: process.env.TWILIO_AUTH,
  stripePublishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
  stripeSecretKey: process.env.STRIPE_SECRET_KEY
}
