const express = require('express');
const router = express.Router();
const campusController = require('../controllers/campusController');

router.get('/campus', campusController.getCampus);
router.post('/campus/:campus',campusController.postCampus)
module.exports = router;