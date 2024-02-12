




const errorHandler = (err, req, res, next) => {
    console.error(err.stack); 
  
    const statusCode = err.statusCode || 500; // Default to 500 if no status code is set
    const message = err.message || 'Internal Server Error';
  
    // Send error response based on environment
    if (process.env.NODE_ENV === 'development') {
      // In production, send a more generic error message
      res.status(statusCode).json({ error: 'Something went wrong' });
    } else {
      // In development or other environments, send detailed error information
      res.status(statusCode).json({
        message: message,
        stack: err.stack || 'Error details are hidden in production',
      });
    }
  };
  
  module.exports = errorHandler;
  