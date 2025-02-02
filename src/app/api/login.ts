import { serialize } from 'cookie';

export default function handler(req, res) {
  const { username, password } = req.body;

  // Authenticate user (pseudo-code)
  const user = authenticateUser(username, password);
  if (user) {
    // Set a cookie with a token
    const token = generateToken(user);
    const serialized = serialize('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV !== 'development',
      maxAge: 60 * 60 * 24 * 7, // 1 week
      path: '/',
    });

    res.setHeader('Set-Cookie', serialized);
    res.status(200).json({ message: 'Logged in successfully' });
  } else {
    res.status(401).json({ message: 'Authentication failed' });
  }
}

function authenticateUser(username, password) {
  // Authentication logic here
  return { id: 1, username: username }; // Dummy user
}

function generateToken(user) {
  // Token generation logic here
  return 'token123'; // Dummy token
}
