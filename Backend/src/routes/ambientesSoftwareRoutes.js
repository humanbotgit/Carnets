const express = require('express');
const router = express.Router();
const ambientesSoftwareController = require('../controllers/ambientesSoftwareController');

router.get('/pabellon',ambientesSoftwareController.getPabellones)

module.exports = router