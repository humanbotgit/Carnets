const express = require('express');
const router = express.Router();
const ambientesSoftwareController = require('../controllers/ambientesSoftwareController');

router.get('/pabellon/:campus_id',ambientesSoftwareController.getPabellones)

module.exports = router