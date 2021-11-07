const express = require('express');
const courseControllers = require('../controllers/courseController');

const router = express.Router();

router.route('/').post(courseControllers.createCourse);

module.exports = router;
