import { DataTypes } from 'sequelize';
import { sequelize } from '../database.js';

const TipoSolicitud = sequelize.define('TipoSolicitud', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  nombre: { 
    type: DataTypes.ENUM('Beca', 'Apoyo Psicoeducativo', 'Financiamiento', 'Intercambios Estudiantiles'), 
    allowNull: false 
  },
  otrasSolicitudes: { type: DataTypes.STRING(255) }
}, {
  tableName: 'TipoSolicitud',
  timestamps: false
});

export default TipoSolicitud;