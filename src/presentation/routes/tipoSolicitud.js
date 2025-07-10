import express from 'express';
import TipoSolicitudController from '../controllers/TipoSolicitudController.js';

const router = express.Router();

router.get('/', TipoSolicitudController.obtenerTodos);
router.get('/:id', TipoSolicitudController.obtenerPorId);
router.post('/', TipoSolicitudController.crear);
router.put('/:id', TipoSolicitudController.actualizar);
router.delete('/:id', TipoSolicitudController.eliminar);

export default router;