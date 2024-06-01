const authorizedUser = {
  username: 'admin',
  password: 'password',
};

function authenticate(req) {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Basic ')) {
    return false;
  }

  const credentials = Buffer.from(authHeader.split(' ')[1], 'base64').toString('utf8').split(':');
  const username = credentials[0];
  const password = credentials[1];

  return username === authorizedUser.username && password === authorizedUser.password;
}

module.exports = authenticate; 
