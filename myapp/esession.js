const express = require('express');
const session = require('express-session');
const parseurl = require('parseurl');
const app = express();

app.use(session({
	secret: 'keyboard cat',
	resave: false,
	saveUninitialized: true
}));

let countMiddleware = function (req,res,next) {
	let views= req.session.views;

	if(!views) {
		views = req.session.views = {};
	}

	let pathname = parseurl(req).pathname;

	views[pathname] = (views[pathname] || 0) +1 ;

	next();
};

app.use(countMiddleware);

app.get('/foo', (req,res,next) => {
	res.send('u view this page: ' + req.session.views['/foo'] + 'times');
});

app.get('/bar', (req,res,next) => {
	res.send('U view this page ' + req.session.views['/bar'] + 'times');
});


app.listen(4000);

