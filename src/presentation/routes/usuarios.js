import express from 'express';
import UsuarioController from '../controllers/UsuarioController.js';
import { validateFields } from '../middleware/validation.js';

const router = express.Router();

// Login de usuario
router.post('/login', validateFields(['correo_institucional', 'contrasena']), UsuarioController.login);

// Registro de usuario
router.post('/registro', validateFields(['correo_institucional', 'contrasena', 'rol']), UsuarioController.registrar);

export default router;