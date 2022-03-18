const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const logger = require('morgan');
require('dotenv').config();
const mainRoutes = require('./server/routes/main');

const app = express();
app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));
app.use('/api/', mainRoutes);
app.use(logger('dev'));

const port = process.env.SERVER_PORT;

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log('Database connected'))
  .catch((error) => console.log('Error connecting database'));

//test GET route
app.get('/', (req, res) => {
  res.status(200).json({
    msg: 'Welcome to my Server',
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});
