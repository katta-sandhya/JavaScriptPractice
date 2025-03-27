const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
//const User = require("../models/User"); // If using a database
require("dotenv").config();

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: process.env.GOOGLE_CALLBACK_URL,
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        // Log the profile for debugging
        console.log("Google Profile:", profile);
        if (!profile.emails || profile.emails.length === 0) {
          return done(new Error("No email associated with this account"), null);
        }

        let user = {
          googleId: profile.id,
          name: profile.displayName,
          email: profile.emails[0].value,
        };

        // Save user to database if needed (optional)
        // user = await User.findOneAndUpdate({ googleId: profile.id }, user, { upsert: true, new: true });

        return done(null, user);
      } catch (err) {
        return done(err, null);
      }
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});
