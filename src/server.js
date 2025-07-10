import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { testConnection, sequelize } from './data/database.js';
import usuarioRoutes from './presentation/routes/usuarios.js';
import estudianteRoutes from './presentation/routes/estudiantes.js';
import administradorRoutes from './presentation/routes/administradores.js';
import tipoSolicitudRoutes from './presentation/routes/tipoSolicitud.js';
import subtipoSolicitudRoutes from './presentation/routes/subtipoSolicitud.js';
import solicitudRoutes from './presentation/routes/solicitudes.js';
import documentoRoutes from './presentation/routes/documentos.js';
import historialEstadoRoutes from './presentation/routes/historialEstado.js';
import discapacidadRoutes from './presentation/routes/discapacidad.js';
import notificacionRoutes from './presentation/routes/notificaciones.js';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(express.json());

// Rutas
app.use('/api/usuarios', usuarioRoutes);
app.use('/api/estudiantes', estudianteRoutes);
app.use('/api/administradores', administradorRoutes);
app.use('/api/tipos-solicitud', tipoSolicitudRoutes);
app.use('/api/subtipos-solicitud', subtipoSolicitudRoutes);
app.use('/api/solicitudes', solicitudRoutes);
app.use('/api/documentos', documentoRoutes);
app.use('/api/historial-estados', historialEstadoRoutes);
app.use('/api/discapacidades', discapacidadRoutes);
app.use('/api/notificaciones', notificacionRoutes);


app.get('/api/testmysql', async (req, res) => {
    try {
        const result = await testConnection();
        res.json({
            status: 200,
            message: 'Conexión a la base de datos establecida correctamente.',
            database: process.env.DB_NAME,
            timestamp: new Date().toISOString()
        });
    } catch (error) {
        res.status(500).json({
            status: 500,
            message: 'No se pudo conectar a la base de datos',
            error: error.message || error
        });
    }
});


const startServer = async () => {
    try {
        const dbConnected = await testConnection();
        if (!dbConnected) {
            throw new Error('No se pudo conectar a la base de datos');
        }
        // Sincronizar modelos
        await sequelize.sync({ alter: true });
        console.log('Modelos sincronizados');
        app.listen(PORT, () => {
            console.log(`Servidor escuchando en el puerto ${PORT}`);
        });
    } catch (error) {
        console.error('Error al inicializar el servidor:', error);
        process.exit(1); 
    }
};

startServer();