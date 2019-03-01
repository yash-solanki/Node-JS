const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const oauth = require('./oauth.json');

const app = express();

passport.use(new GoogleStrategy({
    clientID: oauth.web.client_id,
    clientSecret: oauth.web.client_secret,
    callbackURL: oauth.web.redirect_uris
  },
  function(accessToken, refreshToken, profile, done) {
    done(null, profile);
  }
));

app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(function (user, done) {
    done(null, user);
});

passport.deserializeUser(function (user, done) {
    done(null, user);
});

app.get('/auth/google',
  passport.authenticate('google', { scope:
    [ 'https://www.googleapis.com/auth/plus.login',
      'https://www.googleapis.com/auth/plus.profile.emails.read' ] }));

app.get('/auth/google/callback', 
  passport.authenticate('google', { 
      failureRedirect: '/success',
      successRedirect: '/fail' 
    }),
  );

  app.get('/success', (req,res) => {
      res.send("Sucessfull");
  });

  app.get('/fail', (req,res) => {
    res.send('Fail');
  });

  app.get('/', (req,res) => {
        res.redirect('/auth/google')
  });

  app.listen(3000, ()=> {
      console.log('live on port : 3000');
  });