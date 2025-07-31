import express from 'express';
import NotificacionController from '../controllers/NotificacionController.js';
import { verifyToken } from '../middleware/auth.js';
import { validateNotificacion } from '../middleware/validation.js';

const router = express.Router();

router.get('/notificaciones', verifyToken, NotificacionController.getNotificaciones);
router.get('/notificaciones/:userId', verifyToken, NotificacionController.getNotificacionesByUserId);
router.put('/notificaciones/:id/leido', verifyToken, validateNotificacion, NotificacionController.markAsRead);

export default router;