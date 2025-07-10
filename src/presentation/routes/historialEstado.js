import express from 'express';
import HistorialEstadoController from '../controllers/HistorialEstadoController.js';

const router = express.Router();

router.get('/', HistorialEstadoController.obtenerTodos);
router.get('/:id', HistorialEstadoController.obtenerPorId);
router.get('/solicitud/:solicitud_id', HistorialEstadoController.obtenerPorSolicitud);
router.post('/', HistorialEstadoController.crear);
router.put('/:id', HistorialEstadoController.actualizar);
router.delete('/:id', HistorialEstadoController.eliminar);

export default router;