const asyncHandler = require('express-async-handler');

const jwt = require('jsonwebtoken');

const validateToken = asyncHandler(async (req, res, next) => {
  let token;
  let authHeader = req.headers.Authorization || req.headers.authorization;

  // @ts-ignore
  if (authHeader && authHeader.startsWith('Bearer')) {
    // @ts-ignore
    token = authHeader.split(' ')[1];
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
      if (err) {
        res.status(401);
        throw new Error('User is not authorized');
      }
      // @ts-ignore=
      req.user = decoded.user;
      next();
    });
  }
  if (!token) {
    res.status(401);
    throw new Error('User is not authorized, please log in again.');
  }
});

module.exports = validateToken;
