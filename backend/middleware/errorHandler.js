const { errCodes } = require('../constants/errorCodes');

const errorHandler = (err, req, res, next) => {
  //res.statusCode, or 500 if not available
  const statusCode = res.statusCode ? res.statusCode : 500;

  const errorResponse = {
    error: {
      message: err.message || 'An unexpected error occurred',
      code: statusCode,
      stack: 'Not available',
    },
  };

  // Only include stack trace in development environment
  if (process.env.NODE_ENV === 'development') {
    errorResponse.error.stack = err.stack;
  }

  // Set the appropriate error title based on the status code
  switch (statusCode) {
    case errCodes.NOT_FOUND:
      errorResponse.error.title = 'Not Found';
      break;
    case errCodes.VALIDATION_ERROR:
      errorResponse.error.title = 'Validation Error';
      break;
    case errCodes.FORBIDDEN:
      errorResponse.error.title = 'Forbidden';
      break;
    case errCodes.UNAUTHORIZED:
      errorResponse.error.title = 'Unauthorized';
      break;
    case errCodes.SERVER_ERROR:
      errorResponse.error.title = 'Server Error';
      break;
    default:
      errorResponse.error.title = 'Unknown Error';
  }

  // Log the error (consider using a proper logging library in production)
  // console.error(`[Error] ${errorResponse.error.title}: ${err.message}`);

  // Send the error response
  res.status(statusCode).json(errorResponse);
};

module.exports = errorHandler;
