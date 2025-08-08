import express from 'express';
import UsuarioController from '../controllers/UsuarioController.js';
import { validateUser, validateLogin } from '../middleware/validation.js';
import { verifyToken, restrictTo } from '../middleware/auth.js';
import Estudiante from '../../data/models/Estudiante.js';
import Usuario from '../../data/models/Usuario.js';

const router = express.Router();

router.post('/auth/register', validateUser, UsuarioController.register);
router.post('/auth/login', validateLogin, UsuarioController.login);
router.post('/auth/logout', verifyToken, UsuarioController.logout);
router.get('/estudiantes-con-solicitudes', verifyToken, restrictTo('administrador'), UsuarioController.getEstudiantesConSolicitudes);

router.get('/perfil', verifyToken, async (req, res) => {
  try {
    const userId = req.user.userId;
    console.log('Buscando usuario con ID:', userId);
    const usuario = await Usuario.scope('public').findByPk(userId);
    if (!usuario) {
      console.log('Usuario no encontrado para ID:', userId);
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }
    console.log('Usuario encontrado:', usuario.toJSON());
    const estudiante = await Estudiante.findByPk(userId);
    if (!estudiante) {
      console.log('Estudiante no encontrado para ID:', userId);
      return res.status(404).json({ message: 'Estudiante no encontrado' });
    }
    console.log('Estudiante encontrado:', estudiante.toJSON());
    res.json({
      data: {
        id: usuario.id,
        nombre_completo: usuario.nombre_completo,
        correo_institucional: usuario.correo_institucional,
        rol: usuario.rol,
        cedula: estudiante.cedula,
        matricula: estudiante.matricula,
        telefono: estudiante.telefono,
        carrera: estudiante.carrera,
        semestre: estudiante.semestre,
      },
    });
  } catch (error) {
    console.error('Error al obtener perfil:', { message: error.message, stack: error.stack });
    res.status(500).json({ message: 'Error interno del servidor', error: error.message });
  }
});

router.put('/estudiantes', verifyToken, async (req, res) => {
  try {
    const userId = req.user.userId;
    const { telefono } = req.body;
    console.log('Actualizando teléfono para ID:', userId, 'Teléfono:', telefono);
    if (!telefono || !telefono.match(/^\d{9,10}$/)) {
      return res.status(400).json({ message: 'Teléfono inválido. Debe tener 9 o 10 dígitos.' });
    }
    const estudiante = await Estudiante.findByPk(userId);
    if (!estudiante) {
      console.log('Estudiante no encontrado para ID:', userId);
      return res.status(404).json({ message: 'Estudiante no encontrado' });
    }
    estudiante.telefono = telefono;
    await estudiante.save();
    console.log('Teléfono actualizado:', estudiante.toJSON());
    res.json({ message: 'Teléfono actualizado correctamente', data: estudiante });
  } catch (error) {
    console.error('Error al actualizar teléfono:', { message: error.message, stack: error.stack });
    res.status(500).json({ message: 'Error interno del servidor', error: error.message });
  }
});

export default router;