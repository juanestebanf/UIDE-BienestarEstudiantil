# Sistema de Bienestar Estudiantil UIDE

Sistema integral de gestión de bienestar estudiantil que permite a los estudiantes de la UIDE solicitar becas, consultar el estado de sus solicitudes y recibir atención personalizada, optimizando los procesos administrativos del departamento de bienestar.

## Integrantes

- **Mateo [Apellido]** - Full Stack Developer - @mateocp10
- **Chris [Apellido]** - Full Stack Developer - @ChrisSR247
- **Juan Esteban [Apellido]** - Full Stack Developer - @juanestebanf
- **Victor [Apellido]** - Full Stack Developer - @Victor12-ui
- **Ginia [Apellido]** - Full Stack Developer - @ginia18

## Enlaces a GitHub Projects

- https://github.com/UIDE-BienestarU/UIDE-BienestarEstudiantil.git

## Definition of Ready (DoR)

Una Historia de Usuario está lista para ser trabajada cuando:
- Tiene criterios de aceptación claros en formato Gherkin
- Está estimada con story points
- Tiene prioridad asignada (must/should/could/wont-have)
- No tiene dependencias bloqueantes con otras HU
- Los diseños/mockups están disponibles (si aplica)
- El equipo entiende completamente lo que se debe hacer

## Definition of Done (DoD)

Una Historia de Usuario está completa cuando:
- El código está implementado y funciona correctamente
- Los tests unitarios y de integración pasan exitosamente (coverage > 70%)
- La documentación técnica está actualizada (README, API docs)
- La HU cumple todos los criterios de aceptación en formato Gherkin
- No hay bugs críticos o bloqueantes
- Los commits están vinculados al issue (#número)
- El estado del issue está actualizado en GitHub Projects

## Capacidad del Equipo

- **Integrantes:** 5 personas
- **Disponibilidad:** 10-12 horas por persona por sprint (2 semanas)
- **Velocidad estimada:** 2.5 SP por persona = 12-13 SP total por sprint
- **Sprint duration:** 2 semanas

## Convenciones

### Convenciones de Ramas
- `main`: Rama principal de producción
- `develop`: Rama de desarrollo
- `feature/[nombre-funcionalidad]`: Ramas para nuevas funcionalidades (ej: `feature/crear-solicitud-beca`)
- `fix/[nombre-bug]`: Ramas para correcciones de bugs

### Convenciones de Commits
- `feat:` - Nueva funcionalidad (ej: `feat: add scholarship request form #1`)
- `fix:` - Corrección de bugs (ej: `fix: resolve validation error in form #2`)
- `docs:` - Cambios en documentación (ej: `docs: update README with installation steps`)
- `test:` - Agregar o modificar tests (ej: `test: add unit tests for Solicitud model #1`)
- `chore:` - Tareas de mantenimiento (ej: `chore: setup project structure`)
- `refactor:` - Refactorización de código (ej: `refactor: improve API service structure`)

**Importante:** Siempre vincular commits a issues usando `#número` (ej: `feat: implement login screen #4`)

### Labels
- **Tipo:** `feature`, `user-story`, `bug`, `documentation`
- **Prioridad:** `priority:must-have`, `priority:should-have`, `priority:could-have`, `priority:wont-have`
- **Story Points:** `sp:1`, `sp:2`, `sp:3`, `sp:5`, `sp:8`

## Instalación
```bash
# Clonar repositorio
git clone https://github.com/[TU-USUARIO]/bienestar-estudiantil-uide.git
cd bienestar-estudiantil-uide

# Instalar dependencias de Flutter
flutter pub get

# Verificar instalación de Flutter
flutter doctor

# Ejecutar en modo desarrollo
flutter run

# Ejecutar tests
flutter test
```

## Estructura del Proyecto
```
├── docs/                    # Documentación del proyecto
│   ├── SRS.pdf             # Especificación de Requerimientos
│   └── SPRINT1.md          # Documentación del Sprint 1
├── lib/                    # Código fuente Flutter
│   ├── models/             # Modelos de datos (Solicitud, Estudiante, etc.)
│   ├── screens/            # Pantallas de la aplicación
│   ├── widgets/            # Widgets reutilizables
│   ├── services/           # Servicios (API, autenticación)
│   ├── utils/              # Utilidades y helpers
│   └── main.dart           # Punto de entrada
├── test/                   # Tests unitarios e integración
│   ├── models/             # Tests de modelos
│   ├── screens/            # Tests de pantallas
│   ├── widgets/            # Tests de widgets
│   └── services/           # Tests de servicios
├── assets/                 # Imágenes, fuentes, iconos
├── .gitignore              # Archivos ignorados por git
├── pubspec.yaml            # Dependencias del proyecto
└── README.md               # Este archivo
```

## Tecnologías

### Frontend
- **Framework:** Flutter 3.x (Dart)
- **State Management:** Provider / Riverpod / Bloc (a definir por el equipo)
- **UI Components:** Material Design / Custom widgets

### Backend/API
- **Backend:** Node.js + Express / Firebase Functions
- **Base de datos:** Firebase Firestore / MongoDB
- **Autenticación:** Firebase Auth / JWT
- **Storage:** Firebase Storage / AWS S3 (para documentos)

### Testing
- **Testing:** flutter_test, mockito
- **Coverage:** Objetivo > 70%

### Otros Paquetes Útiles
- `http` / `dio` - Peticiones HTTP
- `shared_preferences` - Almacenamiento local
- `file_picker` - Selección de archivos/documentos
- `path_provider` - Manejo de rutas de archivos
- `pdf` - Generación de PDFs (comprobantes)
- `intl` - Formateo de fechas y números

## Funcionalidades Principales

### Módulo de Solicitudes de Becas
- ✅ Crear nueva solicitud de beca con formulario completo
- ✅ Adjuntar documentos requeridos (cédula, certificados, comprobantes)
- ✅ Enviar solicitud y generar número único de seguimiento
- ✅ Consultar estado de solicitudes en "Mis Solicitudes"
- 🔄 Recibir notificaciones de cambios de estado
- 🔄 Descargar comprobante de solicitud en PDF

### Módulo de Autenticación (Futuros sprints)
- 🔄 Login de estudiantes con credenciales UIDE
- 🔄 Recuperación de contraseña
- 🔄 Gestión de perfil de estudiante

### Panel Administrativo (Futuros sprints)
- 🔄 Dashboard con estadísticas de solicitudes
- 🔄 Revisar y aprobar/rechazar solicitudes
- 🔄 Generar reportes de becas otorgadas
- 🔄 Gestión de tipos de becas disponibles

**Leyenda:**
- ✅ Completado en Sprint 1
- 🔄 Planificado para sprints futuros

## Flujo de Usuario Principal
```
1. Estudiante se registra/inicia sesión
   ↓
2. Accede al módulo "Solicitar Beca"
   ↓
3. Completa formulario y adjunta documentos
   ↓
4. Envía solicitud → Sistema genera número único (ej: BEC-2024-000001)
   ↓
5. Estudiante recibe confirmación por email
   ↓
6. Consulta estado en "Mis Solicitudes"
   ↓
7. Recibe notificación cuando hay cambios de estado
```

## Configuración del Entorno

### Requisitos Previos
- Flutter SDK 3.0 o superior
- Dart SDK 2.17 o superior
- Android Studio / Xcode (para emuladores)
- Visual Studio Code con extensiones Flutter y Dart

### Variables de Entorno
Crear archivo `.env` en la raíz del proyecto:
```env
API_BASE_URL=https://api-bienestar-uide.com
FIREBASE_API_KEY=tu_api_key
FIREBASE_PROJECT_ID=tu_project_id
```

## Comandos Útiles
```bash
# Verificar estado de Flutter
flutter doctor -v

# Limpiar proyecto
flutter clean

# Actualizar dependencias
flutter pub upgrade

# Ejecutar tests con coverage
flutter test --coverage

# Generar reporte de coverage HTML
genhtml coverage/lcov.info -o coverage/html

# Analizar código
flutter analyze

# Formatear código
dart format lib/
```

## Contribuir

1. Crear rama desde `develop`:
```bash
   git checkout develop
   git pull origin develop
   git checkout -b feature/nombre-funcionalidad
```

2. Hacer commits frecuentes vinculados a issues:
```bash
   git commit -m "feat: descripción del cambio #número-issue"
```

3. Push de la rama:
```bash
   git push origin feature/nombre-funcionalidad
```

4. Crear Pull Request hacia `develop`

5. Esperar code review y aprobación

6. Hacer merge a `develop`

## Contacto y Soporte

- **Repositorio:** [https://github.com/[TU-USUARIO]/bienestar-estudiantil-uide](https://github.com/[TU-USUARIO]/bienestar-estudiantil-uide)
- **Issues:** [https://github.com/[TU-USUARIO]/bienestar-estudiantil-uide/issues](https://github.com/[TU-USUARIO]/bienestar-estudiantil-uide/issues)
- **Documentación:** Ver carpeta `/docs`

## Licencia

Este proyecto es de uso académico para la materia de Ingeniería de Software - UIDE.

---

**Última actualización:** Noviembre 2024  
**Sprint actual:** Sprint 1 - Gestión de Solicitudes de Becas

