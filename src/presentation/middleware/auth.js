import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const verifyToken = (req, res, next) => {
  const token = req.headers['authorization'];

  if (!token || !token.startsWith('Bearer ')) {
    return res.status(403).json({ message: 'Token no proporcionado o inválido' });
  }

  const jwtToken = token.split(' ')[1];

  try {
    const decoded = jwt.verify(jwtToken, process.env.JWT_SECRET || 'secreto123');
    req.usuario = decoded; 
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Token inválido o expirado' });
  }
};

export default verifyToken;