import { Router } from 'express';
import EstudianteController from '../../presentation/controllers/EstudianteController.js';
import verifyToken from '../middleware/auth.js'; 

const router = Router();

router.post('/', verifyToken, EstudianteController.crear);
router.get('/', verifyToken, EstudianteController.obtenerTodos);
router.get('/:id', verifyToken, EstudianteController.obtenerPorId);
router.put('/:id', verifyToken, EstudianteController.actualizar);
router.delete('/:id', verifyToken, EstudianteController.eliminar);

export default router;