import express from 'express';
import NotificacionController from '../controllers/NotificacionController.js';

const router = express.Router();

router.get('/', NotificacionController.obtenerTodas);
router.get('/:id', NotificacionController.obtenerPorId);
router.get('/solicitud/:solicitud_id', NotificacionController.obtenerPorSolicitud);
router.post('/', NotificacionController.crear);
router.put('/:id', NotificacionController.actualizar);
router.put('/:id/leida', NotificacionController.marcarComoLeida);
router.delete('/:id', NotificacionController.eliminar);

export default router;