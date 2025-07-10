import express from 'express';
import SolicitudController from '../controllers/SolicitudController.js';

const router = express.Router();

router.get('/', SolicitudController.obtenerTodas);
router.get('/:id', SolicitudController.obtenerPorId);
router.post('/', SolicitudController.crear);
router.put('/:id', SolicitudController.actualizar);
router.delete('/:id', SolicitudController.eliminar);

export default router;