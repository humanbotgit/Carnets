const express = require('express');
const app = express();
const cors = require('cors')
app.use(cors)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const exampleRoutes = require('./routes/exampleRoutes');
const campusRoutes = require('./routes/campusRoutes')
app.use('/api', exampleRoutes);
app.use('/campus',campusRoutes)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Algo salió mal!');
});

module.exports = app;
