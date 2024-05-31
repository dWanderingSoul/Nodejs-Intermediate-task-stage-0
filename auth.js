function authenticate(req) {
    const authorization = req.headers.authorization;
  
    if (!authorization || !authorization.startsWith('Basic ')) {
      return false; // Missing or invalid authorization header
    }
  
    const [username, encodedPassword] = Buffer.from(authorization.split(' ')[1], 'base64').toString().split(':');
  
    // Replace with secure password hashing in production
    const password = 'password'; // Replace with actual hashed password
    return username === 'admin' && encodedPassword === password;
  }
  
  module.exports = authenticate;
  