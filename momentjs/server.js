const express = require('express');
const moment = require('moment-timezone');
const app = express();

let a =moment().tz("Asia/Kolkata").add({day:1, months:6}).endOf('week');
let start = '2010-10-25';
let end = '2010-12-25';

let result = moment(end).diff(moment(start));

app.get('/',(req,res) => {
    // res.send(a.format('LLLL'));
    // res.send(moment(start).fromNow());
    console.log(result);
    res.send(moment.duration(result).humanize());
    console.log(moment.duration(result).as('hours'));
    console.log(moment(start).locale('Gu').format('LLLL'));
});

app.listen(5050,()=> {
    console.log('live on port 5050');
});