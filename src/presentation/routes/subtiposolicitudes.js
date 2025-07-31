import express from 'express';
import SubtipoSolicitudController from '../controllers/SubtipoSolicitudController.js';
import { verifyToken } from '../middleware/auth.js';

const router = express.Router();

router.get('/subtiposolicitudes', verifyToken, SubtipoSolicitudController.getSubtiposSolicitud);

export default router;
