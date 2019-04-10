const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;

const auth = require('../pass.json');

passport.use(new FacebookStrategy({
    clientID: auth.web.clientID,
    clientSecret: auth.web.clientSecret,
    callbackURL: auth.web.callbackURL
},
    function (accessToken, refreshToken, profile, done) {
        done(null, profile);
    }
));

passport.serializeUser(function (user, done) {
    done(null, user);
});

passport.deserializeUser(function (user, done) {
    done(null, user);
});

exports.authFacebook = passport.authenticate('facebook', {scope:["email"]});
// app.get('/auth/facebook',
//     passport.authenticate('facebook', {scope:["email"]}));

exports.callbackFacebook = passport.authenticate('facebook', {
    failureRedirect: '/fail',
    successRedirect: '/success'
})
// app.get('/auth/facebook/callback',
//     passport.authenticate('facebook', {
//         failureRedirect: '/fail',
//         successRedirect: '/success'
// }));

exports.failFacebook = (req, res) => {
    res.send('fail');
}
// app.get('/fail', (req, res) => {
//     res.send('fail');
// });

exports.successFacebook = (req, res) => {
    res.send('Successfull');
}
// app.get('/success', (req, res) => {
//     res.send('Successfull');
// });
