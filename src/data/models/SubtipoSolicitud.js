import { DataTypes } from 'sequelize';
import { sequelize } from '../database.js';
import TipoSolicitud from './TipoSolicitud.js';

const SubtipoSolicitud = sequelize.define('SubtipoSolicitud', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  tipo_id: { type: DataTypes.INTEGER, allowNull: false },
  nombre_sub: { 
    type: DataTypes.ENUM(
      'Beca por excelencia académica',
      'Beca por situación socioeconómica',
      'Beca deportiva/cultural', 
      'Crédito directo', 
      'Consultas individuales',
      'Certificados médicos',
      'Permisos especiales', 
      'Apoyo psicológico', 
      'Atención de discapacidad', 
      'Intercambios presenciales', 
      'Intercambios online'
    ), 
    allowNull: false 
  },
  otros_sub: { type: DataTypes.STRING(255) }
}, {
  tableName: 'SubtipoSolicitud',
  timestamps: false
});

SubtipoSolicitud.belongsTo(TipoSolicitud, { foreignKey: 'tipo_id' });
TipoSolicitud.hasMany(SubtipoSolicitud, { foreignKey: 'tipo_id' });

export default SubtipoSolicitud;