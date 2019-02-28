'use strict';
const express = require('express');
let router = express.Router();

router.use(function(req,res,next) {
	if(req.session.isLoggedIn=='Y'){
		next();
	} else {
		res.status(401);
		res.end();
	}
});

router.get('/',function(req,res) {
	Blog.find({},function(err,blogs) {
		if(err) {
			res.status(500);
			res.send('');
		} else {
			res.status(200);
			res.send(blogs);
		}
	});
});

router.post('/',function(req,res) {
	let blog = new Blog();
	blog.title = req.body.title;
	blog.content = req.body.content;
	blog.author = req.body.author;

	blog.save(function(err,blog) {
		if(err) {
			res.status(500);
			console.log(`not save`);
			res.send('');
		} else {
			res.status(201);
			console.log(`created`);
			res.send(blog);
		}
	})
});

router.get('/:blogId',function(req,res) {
	Blog.findOne({_id:req.param.blogId}, function(err,blog) {
		if(err) {
			res.status(404);
			res.send('');
		} else {
			res.status(200);
			res.send(blog);
		}
	});
});

router.put('/:blogId',function(req,res) {
	Blog.findOne({_id:req.param.blogId},function(err,blog) {
		if(err) {
			res.status(404);
			res.send('');
		} else {
			blog.title = req.body.title;
			blog.content = req.body.content;
			blog.author = req.body.author;

			blog.save(function(err) {
				if(err) {
					res.status(500);
					res.send('');
				}
			})
		}
	});
});

router.delete('/:blogId', function(req,res) {
	Blog.findOne({_id:req.param.blogId},function(err,blog) {
		if(err) {
			res.status(404);
			res.send('');
		} else {
			blog.remove(function(err) {
				if(err) {
					res.status(500);
					res.send('');
				} else {
					res.status(204);
					res.send('');
				}
			});
		}
	});
});

module.exports = router;