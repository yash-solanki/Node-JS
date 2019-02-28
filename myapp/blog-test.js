'use strict';
let app = require('./blog-app');
let supertest = require('supertest-session');
let should = require('should');

describe('Testing Blog APIs',function(){
	it('Get blog details api should return error 401 if login does not exists',function(done){
		supertest(app);
		.get('/blogs/1');
		.expect(401);
		.end(function(err,response) {
			response.status.should.be.equal(401);
			done();
		});
	});

	it('Get Blog details api should return blog details if blog exists',function(done){
		let req = supertest(app);
		req
			.post('/login')
			.set('Content-Type','application/json')
			.send({username:'yash'})
			.expect(200)
			.end(function(err,response){
				response.status.should.be.equal(200);
				req
					.get('/blogs/')
					.expect(200)
					.end(function(err,response){
						response.status.should.be.equal(200);
						response.body.title.should.not.be.empty();
						done();
					});
			});
	});

	it('Get Blog details api should return error 404 if blog does not exists',function(done){
 var req=supertest(app);
 req
   .post('/login')
   .set('Content-Type','application/json')
   .send({username:'dipesh'})
   .expect(200)
   .end(function(err,response){
       response.status.should.be.equal(200);
       req
         .get('/blogs/1')
         .expect(404)
         .end(function(err,response){
             response.status.should.be.equal(404);
             done();
         });
     });
  })
});