const express = require('express');
const session = require('express-session');

const TWO_HOURS = 1000*60*60*2;

const app = express();
const {
	PORT = 3000,
	NODE_ENV = 'evelopment',
	SESS_NAME = 'sid',
	SESS_SECRET = 'dsvcsdv !!',
	SESS_LIFETIME = TWO_HOURS 
} = process.env

const IN_PROD = NODE_ENV ==='production'

const users = [
	{ id: 1, name: 'yash', email: 'yash@gmail.com', password: 'password'},
	{ id: 2, name: 'ab', email: 'ab@gmail.com', password: 'password'},
	{ id: 3, name: 'tirth', email: 'tirth@gmail.com', password: 'password'},
]

app.use(session({
	name: SESS_NAME,
	resave: false,
	saveUninitalized: false,
	secret: SESS_SECRET,
	cookie: {
		maxAge: SESS_LIFETIME,
		sameSitye: true,
		secure: IN_PROD
	}
}));

app.get('/', (req,res)=> {
	const { userId } = req.session
	res.send(`
		<h1>Welcome!!!</h1>
		<a href='/login'>login</a>
		<a href='/register'>register</a>
		<a href='/home'>home</a>
		<form method='post' action='/logout'>
			<button>logout</button>
		</form>
		`)
});

app.get('/home', (req,res)=> {

});

app.get('/login', (req,res)=> {

});

app.get('/register', (req,res)=> {

});

app.post('/login', (req,res)=> {

});

app.post('/register', (req,res)=> {

});

app.post('/logout', (req,res)=> {

});

app.listen(PORT, ()=> {
	console.log(`Live on ${PORT}`);
});
