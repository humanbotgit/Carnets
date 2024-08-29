const express = require('express');
const router = express.Router();
const ambientesSoftwareController = require('../controllers/ambientesSoftwareController');

router.get('/pabellon/:campus_id',ambientesSoftwareController.getPabellones)
router.post('/pabellon',ambientesSoftwareController.postPabellon)
router.post('/pabellon/ambiente',ambientesSoftwareController.postAmbiente)
router.get('/ambiente/:ambiente_id',ambientesSoftwareController.getSoftwareAmbiente)
router.post('/ambiente/:ambiente_id',ambientesSoftwareController.postSoftwareAmbiente)
module.exports = router