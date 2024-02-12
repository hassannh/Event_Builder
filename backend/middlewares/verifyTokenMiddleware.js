import jwt from 'jsonwebtoken';
import { promisify } from 'util';

const verifyTokenMiddleware = async (req, res, next) => {
  const token = req.headers.authorization;

  // Ensure the token starts with 'Bearer '
  if (!token || !token.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'No token provided, authorization denied' });
  }

  // Extract the token without the 'Bearer ' prefix
  const authToken = token.split(' ')[1];

  try {
    // Verify the token asynchronously using promisify
    const decoded = await promisify(jwt.verify)(authToken, 'SecretKey');

    // If verification is successful, attach the decoded user ID to the request
    req.userId = decoded.userId;
    
    next(); // Proceed to the next middleware or route handler
  } catch (error) {
    return res.status(401).json({ message: 'Token is not valid' });
  }
};

export default verifyTokenMiddleware;
