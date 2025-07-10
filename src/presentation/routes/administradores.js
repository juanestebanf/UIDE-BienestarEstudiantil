import express from 'express';
import AdministradorController from '../controllers/AdministradorController.js';

const router = express.Router();

router.get('/', AdministradorController.obtenerTodos);
router.get('/:id', AdministradorController.obtenerPorId);
router.post('/', AdministradorController.crear);
router.put('/:id', AdministradorController.actualizar);
router.delete('/:id', AdministradorController.eliminar);

export default router;