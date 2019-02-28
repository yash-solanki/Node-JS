var EventEmitter=require('events').EventEmitter;
var util=require('util');
function SampleEmitter() {
 EventEmitter.call(this);
}
util.inherits(SampleEmitter, EventEmitter);
var me = new SampleEmitter();
SampleEmitter.prototype.doCall = function doCall() {
 console.log('before');
 me.emit('fire');
 console.log('after');
};
me.on('fire', function() {
 console.log('emit fired');
});
me.doCall();
var fs = require("fs");
fs.readFile('package.json', function (err, data) {
 if (err){
 console.log(err.stack);
 return;
 }
 console.log(data.toString());
});
console.log("Program Ended");