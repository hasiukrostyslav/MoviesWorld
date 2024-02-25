require('dotenv').config();

const express = require('express');
const morgan = require('morgan');

const homeRoute = require('./routes/homeRoute');
const moviesRoute = require('./routes/moviesRoute');
const cartoonsRoute = require('./routes/cartoonsRoute');
const showsRoute = require('./routes/showsRoute');
const actorsRoute = require('./routes/actorsRoute');
const userRoute = require('./routes/userRoute');
const notFoundMiddleware = require('./middleware/notFound');

const app = express();

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('tiny'));
}

app.use(express.json());

app.use('/', homeRoute);
app.use('/movies', moviesRoute);
app.use('/cartoons', cartoonsRoute);
app.use('/tv-shows', showsRoute);
app.use('/actors', actorsRoute);
app.use('/user', userRoute);

app.use(notFoundMiddleware);

module.exports = app;
