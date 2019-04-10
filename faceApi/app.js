const express = require('express');
const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;
const app = express();
const auth = require('./pass.json');

const abc = require('./routes/routes');

app.use(passport.initialize());
app.use(passport.session());

app.use('/facebook', abc);

// passport.use(new FacebookStrategy({
//     clientID: auth.web.clientID,
//     clientSecret: auth.web.clientSecret,
//     callbackURL: auth.web.callbackURL
// },
//     function (accessToken, refreshToken, profile, done) {
//         done(null, profile);
//     }
// ));

// passport.serializeUser(function (user, done) {
//     done(null, user);
// });

// passport.deserializeUser(function (user, done) {
//     done(null, user);
// });

// app.get('/auth/facebook',
//     passport.authenticate('facebook', {scope:["email"]}));

// app.get('/auth/facebook/callback',
//     passport.authenticate('facebook', {
//         failureRedirect: '/fail',
//         successRedirect: '/success'
// }));

// app.get('/fail', (req, res) => {
//     res.send('fail');
// });

// app.get('/success', (req, res) => {
//     res.send('Successfull');
// });

// app.get('/', (req, res) => {
//     res.redirect('/auth/facebook');
// });

app.listen(3000, () => {
    console.log(`Live on Port: 3000`);
});