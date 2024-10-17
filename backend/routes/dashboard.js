const express = require('express');
const validateToken = require('../middleware/validateTokenHandler');
const getDashboardData = require('../controllers/dashboardController');

const router = express.Router();
router.use(validateToken);

//@route /api/dashboard
router.get('/', validateToken, getDashboardData);

module.exports = router;
