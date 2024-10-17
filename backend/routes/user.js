const express = require('express');
const { userLogin, userSignUp } = require('../controllers/userController');
const router = express.Router();

//@route api/user

//login
router.post('/login', userLogin);

//signup
router.post('/signup', userSignUp);

module.exports = router;
