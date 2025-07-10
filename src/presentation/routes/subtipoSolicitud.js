import express from 'express';
import SubtipoSolicitudController from '../controllers/SubtipoSolicitudController.js';

const router = express.Router();

router.get('/', SubtipoSolicitudController.obtenerTodos);
router.get('/:id', SubtipoSolicitudController.obtenerPorId);
router.get('/tipo/:tipo_id', SubtipoSolicitudController.obtenerPorTipo);
router.post('/', SubtipoSolicitudController.crear);
router.put('/:id', SubtipoSolicitudController.actualizar);
router.delete('/:id', SubtipoSolicitudController.eliminar);

export default router;