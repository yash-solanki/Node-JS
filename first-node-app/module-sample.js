var module1=require('./module1.js');
module1();
var module2=require('./module2.js');
var prefix='Phd';
module2('Yash');
var module3=require('./module3.js');
module3.add(12,10);
module3.sub(12,10);
var module4=require('./module4');
module4.add(12,10);
module4.sub(12,10);

const EventEmitter = require('events');