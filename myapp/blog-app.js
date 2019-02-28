const express = require('express');
const session = require('express-session');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
let MongoStore = require('connect-mongo')(session);

mongoose.connect('mongodb://localhost/blogs',{ useNewUrlParser: true });
let Blog = mongoose.model('blog1',{
	title:'String',
	content:'String',
	author:'String'
});
global.Blog=Blog;

app.use(bodyParser.json({type:'application/json'}));
app.use(session({
	secret:'dsdesc35',
	resave:true,
	saveUninitialized:true,
	store:new MongoStore({mongooseConnection:mongoose.connection})
}));

let blogController = require('./blog');
app.use('/blogs',blogController);

app.post('/login',function(req,res){
	console.log(req.session.user);
	console.log(req.body.username);
	if(req.body.username=='yash'){
		req.session.isLoggedIn= 'Y';
		req.session.user = 'Yash';
		console.log(`login successfully`);
		console.log(req.session.user);
		res.send('Success');
	} else {
		res.status(500);
		console.log(`Please login properly`);
		res.end();
	}
});
app.get('/logout', function(req,res){
	req.session.destroy();
	res.status(205);
	res.end();
	res.send(destroyed);
});

module.exports=app;
