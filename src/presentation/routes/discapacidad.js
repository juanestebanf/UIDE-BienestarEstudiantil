import express from 'express';
import DiscapacidadController from '../controllers/DiscapacidadController.js';

const router = express.Router();

router.get('/', DiscapacidadController.obtenerTodas);
router.get('/:id', DiscapacidadController.obtenerPorId);
router.get('/estudiante/:estudiante_id', DiscapacidadController.obtenerPorEstudiante);
router.post('/', DiscapacidadController.crear);
router.put('/:id', DiscapacidadController.actualizar);
router.delete('/:id', DiscapacidadController.eliminar);

export default router;