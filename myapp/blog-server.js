'use strict';
let app = require('./blog-app');

let server = app.listen(3000,function(err) {
	if(err) {
		console.log('Error starting blog server');
		console.log(err);
	} else {
		console.log(`Blog server running on port ${server.address().port}`);
	}
});