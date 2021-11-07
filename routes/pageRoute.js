const express = require('express');
const pageControllers = require('../controllers/pageController');

const router = express.Router();

router.route('/').get(pageControllers.getIndexPage);
router.route('/about').get(pageControllers.getAboutPage);

module.exports = router;
