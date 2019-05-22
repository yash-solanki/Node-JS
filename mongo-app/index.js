let express = require('express')
let parseurl = require('parseurl')
let session = require('express-session')
let app = express()
app.use(session({
 secret: 'keyboard cat',
 resave: false,
 saveUninitialized: true
}))
let countMiddleware=function (req, res, next) {
 let views = req.session.views
 if (!views) {
 views = req.session.views = {}
 }
 // get the url pathname
 let pathname = parseurl(req).pathname
 // count the views
 views[pathname] = (views[pathname] || 0) + 1
 next()
}
app.use(countMiddleware)
app.get('/foo', function (req, res, next) {
 res.send('you viewed this page ' + req.session.views['/foo'] + ' times')
})
app.get('/bar', function (req, res, next) {
 res.send('you viewed this page ' + req.session.views['/bar'] + ' times')
});