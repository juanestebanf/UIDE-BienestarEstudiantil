import { DataTypes } from 'sequelize';
import { sequelize } from '../database.js';
import Estudiante from './Estudiante.js';
import SubtipoSolicitud from './SubtipoSolicitud.js';

const Solicitud = sequelize.define('Solicitud', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  estudiante_id: { type: DataTypes.INTEGER, allowNull: false },
  subtipo_id: { type: DataTypes.INTEGER, allowNull: false },
  fecha_solicitud: { type: DataTypes.DATEONLY, allowNull: false },
  estado_actual: { type: DataTypes.ENUM('Pendiente', 'Aprobado', 'Rechazado', 'En espera'), defaultValue: 'Pendiente' },
  nivel_urgencia: { type: DataTypes.ENUM('Normal', 'Alta', 'Crítica'), defaultValue: 'Normal' },
  observaciones: { type: DataTypes.TEXT }
}, {
  tableName: 'Solicitud',
  timestamps: false
});

Solicitud.belongsTo(Estudiante, { foreignKey: 'estudiante_id' });
Solicitud.belongsTo(SubtipoSolicitud, { foreignKey: 'subtipo_id' });

export default Solicitud;