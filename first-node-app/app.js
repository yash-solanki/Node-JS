// const logger = require('./logger');

// logger.log('Hello there');


// const os = require('os');

// let freeMem = os.freemem();
// let totalMem = os.totalmem();

// console.log(`Total memory is: ${totalMem}`);
// console.log(`Free memory is: ${freeMem}`);

// const EventEmitter = require('events');
// const emitter = new EventEmitter();

// emitter.on('messageLogged', function(){
// 	console.log('Listener called');
// });

// emitter.emit('message logged'); 

// const http = require('http');

// const server = http.createServer( (req, res) => {
// 	if ( req.url === '/' ) {
// 		res.write(' Hello World ');
// 		res.end();
// 	}
// 	if ( req.url === '/api/cr' ) {
// 		res.write(JSON.stringify([1,2,3]));
// 		res.end();
// 	}
// } );



// // server.on('connection', (socket) => {
// // 	console.log("New Connection");
// // });

// server.listen(3000);

// console.log('Listening on port 3000');

// const EventEmitter = require('events');
// const emitter = new EventEmitter();

// emitter.on('messageLogged' , (arg) => {
// 	console.log('Listener called', arg);
// });

// emitter.emit('messageLogged', { id: 1, url: 'http://'});



const EventEmitter = require('events');


class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('event', (arg) => {
  console.log(`Login ${arg}`);
});
myEmitter.emit('event','logging');

const EventEmitter = require('events');