const express = require('express');
const router = express.Router();
const data = require('../data.json');
const projects = data.projects


//Here I specify that when a request is made to the root of my website,
//the index.pug template should be rendered. I also pass the 'projects' property from
//our JSON data to the index template.
router.get('/', (req, res) => {
      res.render('index', { projects });

});

//Here I specify that when a request is made to /about route,
//the about.pug template should be rendered.
router.get('/about', (req, res) => {
      res.render('about');
});

//When a user clicks on a project's link in the index template, the route is specified
//through the project's id number (as listed in the JSON file). That value is
//captured in the req.params object. I can then use the req.params object to
//specify which project should be represented by the const 'project' by its index
//number. The project.pug template is rendered, and the 'project' variable is
//passed down to that template.

//For more detail on dynamic routing in Express, see:
//https://expressjs.com/en/guide/routing.html

router.get('/projects/:id', (req, res) => {
    const id = req.params.id
    const project = projects[id]

    res.render('project', { project });
});

module.exports = router;