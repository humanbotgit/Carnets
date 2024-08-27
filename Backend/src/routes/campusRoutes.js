const express = require('express');
const router = express.Router();
const campusController = require('../controllers/campusController');

router.get('/', campusController.getCampus);
router.post('/:campus',campusController.postCampus)
module.exports = router;