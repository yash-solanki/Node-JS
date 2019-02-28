const net = require('net');
const fs = require('fs');
const filename = process.avgv[2];

const server = net.createServer((conn) => {
	console.log('Subscriber Connected');
	connection.write(`watching ${filename} for changes`);

	let watcher = fs.watch(filename, (err,data) => {
		connection.write(`${filename} has changed`);
	});

	connection.on('close', ()=> {
		console.log('Subscriber disconnected');
		watch.close();
	});
});

server.listen(3000,()=> console.log('listen 3000'));