const express = require('express');
const app = express();
app.use('/static', express.static('public'));
app.set('view engine', 'pug');
const mainRoutes = require('./routes');
app.use(mainRoutes);
// This middleware is responsible for 1) creating an error object, 2) setting the
//error status to 404, and then handing it off to the error handler.
//Code adapted from the Team Treehouse Express Basics course (Handling 404 Errors
//video).
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});
//This Error Middleware creates a custom error handler to render a custom error
//template back to the client and format the error to be more readable.
//Code adapted from the Team Treehouse Express Basics course (Error Handling
//Middleware video).
app.use((err, req, res, next) => {
  res.locals.error = err;
  res.render('error', err);
});
app.listen(3000, () => {
    console.log('The application is running on localhost:3000!')
});