const express = require('express');
const server = express();
const users = require('./users');

server.set('port',process.env.PORT || 3000);

server.get('/',(req,res) => {
	res.sendFile(__dirname+ '/index.html');
});

server.get('/users',(req,res) => {
	res.json(users);
});

server.listen(3000,() => {
	console.log('Live on port 3000');
});
