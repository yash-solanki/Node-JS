const http = require('http');
const url = require('url');
// const server = http.createServer((req,res) => {
// 	res.writeHead(200,{'Content-Type':'text/plain'});
// 	res.write('hello There');
// 	res.end();
// });

makeserver = function( req, res ) {
	let path = url.parse(req.url).pathname;
	console.log(path);

	if( path === '/' ) {
		res.writeHead(200,{'Content-Type':'text/plain'});
		res.write('Hello World');
	}
	else if( path === '/about' ) {
		res.writeHead(200,{'Content-Type':'text/plain'});
		res.write('About Page');
	}
	else if( path === '/blog' ) {
		res.writeHead(200,{'Content-Type':'text/plain'});
		res.write('Blog page');
	}
	else {
		res.writeHead(404,{'Content-Type':'text/plain'});
		res.write('Error page');
	}
	res.end();
} 

server = http.createServer(makeserver);

server.listen(4000, ()=> {
	console.log('Live on Port 4000');
})