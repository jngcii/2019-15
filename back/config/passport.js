const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

// 페이스북 로그인
passport.use(
  'facebookLogin',
  new FacebookStrategy(
    {
      clientID: process.env.PASSPORT_FACEBOOK_CLIENT_ID,
      clientSecret: process.env.PASSPORT_FACEBOOK_CLIENT_SECRET,
      callbackURL: `http://localhost:${process.env.PORT}/auth/facebook/callback`,
    },
    async function(accessToken, refreshToken, profile, done) {
      // todo: need to retrieve from db
      return done(null, profile);
    },
  ),
);

// 구글 로그인
passport.use(
  'googleLogin',
  new GoogleStrategy(
    {
      clientID: process.env.PASSPORT_GOOGLE_CLIENT_ID,
      clientSecret: process.env.PASSPORT_GOOGLE_CLIENT_SECRET,
      callbackURL: `http://localhost:${process.env.PORT}/auth/google/callback`,
    },
    async function(accessToken, refreshToken, profile, done) {
      // todo: need to retrieve from db
      return done(null, profile);
    },
  ),
);

module.exports = passport;
