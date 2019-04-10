const express = require('express');
const router = express.Router();
const ctrl = require('../controller/controller');


router.get('/auth', ctrl.authFacebook);
// app.get('/auth/facebook',
//     passport.authenticate('facebook', {scope:["email"]}
// ));


router.get('/auth/callback', ctrl.callbackFacebook);
// app.get('/auth/facebook/callback',
//     passport.authenticate('facebook', {
//         failureRedirect: '/fail',
//         successRedirect: '/success'
// }));

router.get('/fail', ctrl.failFacebook);
// app.get('/fail', (req, res) => {
//     res.send('fail');
// });

router.get('/success', ctrl.successFacebook);
// app.get('/success', (req, res) => {
//     res.send('Successfull');
// });

module.exports = router;