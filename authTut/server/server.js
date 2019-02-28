const express = require('express');
const uuid = require('uuid/v4');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const bodyparser = require('body-parser');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const axios = require('axios');
const app = express();

passport.use(new LocalStrategy( 
    {usernameField: 'email'},
    (email,password,done) => {
        axios.get(`http://5000/users?email=${email}`)
        .then(res=> {
          const user = res.data[0]
          if( !user ) {
            return done(null, false, { message: 'Invalid credentials.\n'});
          }
          if( password != user.password ) {
            return done(null, false, {message: 'Invalid credentials.\n'})
          }
          return done(nill,user);
        })
        .catch(error => done(error));
    }
  ));

    passport.serializeUser((user, done) => {
        console.log('Inside serializeUser callback. User id is save to the session file store here')
        done(null, user.id);
    });

    passport.deserializeUser((id,done) => {
      axios.get(`http://localhost:5000/user/${id}`)
      .then(res => done(null, res.data))
      .catch(error => done(error, false))
    });

app.use(bodyparser.urlencoded({ extended:false}))
app.use(bodyparser.json());
app.use(session({
    genid: (req) => {
      return uuid() // use UUIDs for session IDs
    },
    store: new FileStore(),
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
  }))  
  app.use(passport.initialize());
  app.use(passport.session());

  app.get('/', (req, res) => {
    res.send(`You hit home page!\n`)
  })

  app.get('/login',(req,res) => {
      res.send("You got the login page!\n")
  })

  app.post('/login',(req,res,next) => {
    passport.authenticate('local', (err, user, info) => {
      if(info) { return res.send(info.message) }
      if( err ) { return next(err); }
      if(!user) { return res.redirect('/login') }
       req.login(user, (err) => {
          return res.redirect('/authrequired')  
        })
    })(req,res,next);
  })

app.get('/authrequired',(req,res) => {
  if(req.isAuthenticated()){
    res.send('You hit the authentication endpoint\n')
  } else {
    res.redirect('/')
  }
}) 

app.listen(3000, () => {
    console.log('live on port 3000')
});