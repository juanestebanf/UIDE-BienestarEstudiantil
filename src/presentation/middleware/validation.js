export const validateFields = (requiredFields) => {
  return (req, res, next) => {
    const missingFields = [];

    requiredFields.forEach(field => {
      if (req.body[field] === undefined || req.body[field] === null || req.body[field] === '') {
        missingFields.push(field);
      }
    });

    if (missingFields.length > 0) {
      return res.status(400).json({
        message: 'Faltan campos requeridos',
        campos_faltantes: missingFields
      });
    }

    next();
  };
};

// Valida que el estudiante tenga todos los campos requeridos para registro
export const validarEstudiante = (req, res, next) => {
  const requiredFields = ['nombre_completo', 'cedula', 'matricula', 'telefono', 'carrera', 'semestre'];
  return validateFields(requiredFields)(req, res, next);
};

// Valida que solo se actualicen campos permitidos en estudiante
export const validarActualizarEstudiante = (req, res, next) => {
  const allowedFields = ['nombre_completo', 'telefono', 'carrera', 'semestre'];
  const invalidFields = Object.keys(req.body).filter(field => !allowedFields.includes(field));
  if (invalidFields.length > 0) {
    return res.status(400).json({
      message: 'Campos no permitidos en actualización',
      campos_invalidos: invalidFields
    });
  }
  next();
};