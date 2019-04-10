const express = require('express');
const router = express.Router();
const socialctrl = require('../controller/controller');

router.get('/checkauth', socialctrl.checkauth);

router.get('/redirect', socialctrl.redirectgoogle);

router.get('/contact', socialctrl.contact);

module.exports = router;