// var express = require('express');
// var app = express();
// var sampleMiddleware = function (req, res, next) {
//  console.log('Middleware Called');
//  next();
// };
// app.use(sampleMiddleware);
// app.get('/', function (req, res) {
//  res.send('Hello World!');
// });

// app.get('/user/:id', function (req, res, next) {
//   res.send('USER')
// });
// app.use('/user/:id', function (req, res, next) {
//   console.log('Request URL:', req.originalUrl)
//   next()
// }, function (req, res, next) {
//   console.log('Request Type:', req.method)
//   next()
// });
// app.listen(3000);


// app.post('/', function (req, res) {
//  res.send('Got a POST request');
// }); 
// app.get('/', function (req, res) {
//  res.send('Hello World!');
// });
// app.put('/user', function (req, res) {
//  res.send('Got a PUT request at /user');
// });
// app.delete('/user', function (req, res) {
//  res.send('Got a DELETE request at /user');
// });
// app.listen(3000, function () {
//  console.log('Example app listening on port 3000!');
// });
