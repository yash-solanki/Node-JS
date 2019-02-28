const express = require('express');
const passport = require('passport');
const GitHubStrategy = require('passport-github').Strategy;
const auth = require('./auth.json');
const app = express();

passport.use(new GitHubStrategy({
    clientID: auth.web.clientID,
    clientSecret: auth.web.clientSecret,
    callbackURL: auth.web.callbackURL
  },
  function(accessToken, refreshToken, profile, done) {
    done(null,profile);
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

app.get('/auth/github',
  passport.authenticate('github'));

app.get('/auth/github/redirect', 
  passport.authenticate('github', {
    failureRedirect: '/fail',
    successRedirect: '/success'
    }),
);

app.get('/success', (req,res) => {
    res.send('Successfull');
});

app.get('/fail', (req,res) => {
    res.send('Failed');
});

app.get('/', (req,res) => {
    res.redirect('/auth/github');
});

app.listen(3000, () => {
    console.log(`live on port:3000`);
});