const express = require('express');
const bodyparse = require('body-parser');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/blogs');
const app = express();

// let sampleMiddleware = function ( req, res, next ) {
// 	console.log('Middleware called');
// 	next();
// };
app.use(bodyparse.urlencoded({
	extended:true
}));

let Blog = mongoose.model('Blog', {
 	title: 'String',
	content: 'String',
	author: 'String'
 });

app.get('/',(req,res) => {
	Blog.find({}, function(err,blogs) {
	if(err) {
		res.status(500);
		res.send('');
	} else {
		res.status(200);
		res.send(blogs);
	}
	});
});

app.post('/',(req,res) => {
	let blog = new Blog();
	blog.title = req.body.title;
	blog.content = req.body.content;
	blog.author = req.body.author;
	blog.save( function(err,blog) {
		if(err) {
			console.log(err);
		} else {
			res.send('Data inserted');
		}
	});
});

app.delete('/', (req,res) => {
	Blog.remove({_id:'5c738c6ab4a1cf26c033f2e0'}, (err,result) => {
		if(err) {
			console.log(err);
		} else {
			res.send('Removed Successfully');
		}
	});
});

// app.use(sampleMiddleware);

app.listen(3000);