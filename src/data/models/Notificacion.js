import { DataTypes } from 'sequelize';
import sequelize from '../database.js';
import Solicitud from './Solicitud.js';
import Estudiante from './Estudiante.js';

const Notificacion = sequelize.define('Notificacion', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  solicitud_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Solicitud',
      key: 'id',
    },
  },
  mensaje: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  tipo: {
    type: DataTypes.ENUM('Alerta', 'Actualización', 'Recordatorio', 'Confirmación'),
    allowNull: false,
  },
  fecha_envio: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  leido: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  destinatario_rol: {
    type: DataTypes.ENUM('administrador', 'estudiante'),
    allowNull: false,
  },
  destinatario_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: 'Estudiante',
      key: 'id',
    },
  },
}, {
  tableName: 'Notificacion',
  timestamps: false,
});

// Definir relaciones
Notificacion.belongsTo(Solicitud, { foreignKey: 'solicitud_id', as: 'Solicitud' });
Solicitud.hasMany(Notificacion, { foreignKey: 'solicitud_id', as: 'Notificaciones' });
Notificacion.belongsTo(Estudiante, { foreignKey: 'destinatario_id', as: 'Estudiante', constraints: false });

export default Notificacion;
