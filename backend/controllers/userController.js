const mongoose = require('mongoose');
const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const validator = require('validator');

//@desc login a user
//@access public
//@route POST api/user/logn
const userLogin = asyncHandler(async (req, res) => {
  let { email, password } = req.body;
  // Convert email to lowercase
  email = email.toLowerCase();

  //Validation
  if (!email || !password) {
    res.status(400);
    throw new Error('Please enter the email and password!');
  }

  const user = await User.findOne({ email });
  if (!user) {
    res.status(401);
    throw new Error('Invalid email or password.');
  }

  if (await bcrypt.compare(password, user.password)) {
    const accessToken = jwt.sign(
      {
        user: {
          username: user.username,
          email: user.email,
          id: user._id,
        },
      },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: '3d' }
    );

    res.status(200).json({ username: user.username, email, accessToken });
  } else {
    res.status(401);
    throw new Error('Invalid email or password.');
  }
});

//@desc signUp a user
//@access public
//route POST api/user/signup
const userSignUp = asyncHandler(async (req, res) => {
  let { username, email, password } = req.body;
  // Convert username and email to lowercase
  username = username.toLowerCase();
  email = email.toLowerCase();
  //validation
  if (!username || !email || !password) {
    res.status(400);
    throw new Error('Please enter all the details!');
  }
  if (!validator.isEmail(email)) {
    res.status(400);
    throw new Error('Email is not valid');
  }

  if (!validator.isStrongPassword(password)) {
    res.status(400);
    throw new Error('Password is not strong enough!');
  }

  if (await User.findOne({ email: email })) {
    res.status(400);
    throw new Error('User already registered.');
  }
  // console.log(username, email, password);

  const hashedPass = await bcrypt.hash(password, 10);
  if (!hashedPass) {
    throw new Error('Please try again.');
  }

  const newUser = await User.create({
    username,
    email,
    password: hashedPass,
  });
  if (!newUser) {
    res.status(400);
    throw new Error('User data is not valid');
  }

  const accessToken = jwt.sign(
    {
      user: {
        username: newUser.username,
        email: newUser.email,
        id: newUser._id,
      },
    },
    process.env.ACCESS_TOKEN_SECRET,
    { expiresIn: '3d' }
  );

  res.status(201).json({
    username,
    email,
    accessToken,
  });
});

module.exports = { userLogin, userSignUp };
