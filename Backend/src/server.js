const express = require('express');
const app = require('./app');
const { PORT } = require('../config/config');

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
