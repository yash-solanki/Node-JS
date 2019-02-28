const express = require('express');
const app = express();

app.set('port', process.env.PORT || 3000);

app.get('/', (req,res) => {
	res.send('Home Page');
});

app.get('/about', (req,res) => {
	res.send('About Page');
});

app.use((req,res) => {
	res.type('text/plain');
	res.status(505);
	res.send('Error Page');
});

app.listen(3000, ()=> {
	console.log('live on 3000')
})