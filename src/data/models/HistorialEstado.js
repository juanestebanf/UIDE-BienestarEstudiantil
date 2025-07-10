import { DataTypes } from 'sequelize';
import { sequelize } from '../database.js';
import Solicitud from './Solicitud.js';
import Administrador from './Administrador.js';

const HistorialEstado = sequelize.define('HistorialEstado', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  solicitud_id: { type: DataTypes.INTEGER, allowNull: false },
  admin_id: { type: DataTypes.INTEGER, allowNull: false },
  estado: { type: DataTypes.ENUM('Pendiente', 'Aprobado', 'Rechazado', 'En espera'), allowNull: false },
  fecha: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  comentario: { type: DataTypes.TEXT }
}, {
  tableName: 'HistorialEstado',
  timestamps: false
});

HistorialEstado.belongsTo(Solicitud, { foreignKey: 'solicitud_id' });
HistorialEstado.belongsTo(Administrador, { foreignKey: 'admin_id' });

export default HistorialEstado;