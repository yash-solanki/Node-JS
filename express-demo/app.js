const express = require('express');
// const bodyparser = require('body-parser');
const app = express();
const Joi = require('joi');

app.use(express.json());

const courses = [
    { id: 1, name: 'yash' },
    { id: 2, name: 'yh' },
    { id: 3, name: 'sh' }
];

// app.use(bodyparser.json());

app.get('/', (req,res) => {
    res.send('Hello World!!!!!');
});


// app.get('/api/courses', (req,res) => {
//     res.send([1,2,3]);
// });

app.get('/api/courses', (req,res) => {
    res.send(courses);
});


app.get('/api/posts/:year/:month', (req,res) => {
    res.send(req.params);
}); 


app.post('/api/courses', (req,res) => {
    const result = validateCourse(req.body);
    const { error } = validateCourse(req.body);
    if ( error ) {
        return res.status(400).send(error.details[0].message);
    }
    // console.log(result);
    const course = {
        id: courses.length +1,
        name: req.body.name
    };
    
    courses.push(course);
    res.send(courses);
});

app.put('/api/courses/:id', (req,res) => {
    const course = courses.find( c => c.id === parseInt(req.params.id) );
    if (!course) {
        return res.status(404).send('The course with the given id was not found');
    }

    const result = validateCourse(req.body);
    const { error } = validateCourse(req.body);
    if ( error ) {
        return res.status(400).send(error.details[0].message);
    }

    course.name = req.body.name;
    res.send(course);
});

function validateCourse(course) {
    const schema = {
        name: Joi.string().min(3).required()
        //name: String
    };
    return Joi.validate(course, schema);
}

app.delete('/api/courses/:id', (req,res) => {
    const course = courses.find( c => c.id === parseInt(req.params.id) );
    if (!course) return res.status(404).send('The course with the given id was not found');

    const index = courses.indexOf(course);
    courses.splice(index,1);

    res.send(course);
})

app.get('/api/courses/:id', (req,res) => {
    const course = courses.find( c => c.id === parseInt(req.params.id) );
    if (!course) return res.status(404).send('The course with the given id was not found');
    res.send(course);
});

// const port = process.env.port || 4000;
app.listen(3000);