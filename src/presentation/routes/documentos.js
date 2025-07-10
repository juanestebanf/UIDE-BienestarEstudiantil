import express from 'express';
import DocumentoController from '../controllers/DocumentoController.js';

const router = express.Router();

router.get('/', DocumentoController.obtenerTodos);
router.get('/:id', DocumentoController.obtenerPorId);
router.get('/solicitud/:solicitud_id', DocumentoController.obtenerPorSolicitud);
router.post('/', DocumentoController.crear);
router.put('/:id', DocumentoController.actualizar);
router.delete('/:id', DocumentoController.eliminar);

export default router;