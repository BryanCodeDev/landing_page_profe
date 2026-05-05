# Servysol - Ejercicios de Ofimática Gratis

Plataforma educativa gratuita con ejercicios prácticos de Microsoft Excel y Word listos para descargar. Sin registro, sin publicidad, sin redirecciones. Descarga directa de archivos `.xlsx` y `.docx`.

## 📊 Características

- **32+ ejercicios reales** organizados en módulos temáticos
- **Excel**: 28 ejercicios en 11 módulos (BUSCARV, SUMAR.SI, fórmulas, tablas dinámicas, macros)
- **Word**: 4 ejercicios en 2 módulos (formato, tabulaciones, SmartArt)
- **Búsqueda en tiempo real** con debounce de 300ms
- **Responsive design** - funciona en móvil, tablet y desktop
- **SEO optimizado** con meta tags y JSON-LD schema
- **Descarga directa** sin necesidad de backend
- **Accesible** - cumple WCAG 2.1 (nivel A)

## 🚀 Tecnologías

| Tecnología | Versión | Uso |
|------------|---------|-----|
| React | 19.2.5 | Framework UI |
| Vite | 8.0.10 | Build tool |
| React Router DOM | 7.14.2 | Enrutamiento |
| Tailwind CSS | 4.2.4 | Estilos utilitarios |
| Framer Motion | 12.38.0 | Animaciones |
| Lucide React | 1.14.0 | Iconos |
| Vitest | 4.1.5 | Testing |

## 📁 Estructura del Proyecto

```
servysol/
├── public/
│   └── archivos/           # Archivos descargables (Word, Excel)
│       ├── excel/         # 30+ archivos .xlsx
│       └── word/          # 15+ archivos .docx
├── src/
│   ├── components/        # Componentes React reutilizables
│   │   ├── ModuleAccordion.jsx    # Acordeón de módulos
│   │   ├── ExerciseCard.jsx       # Tarjeta de ejercicio
│   │   ├── Navbar.jsx             # Navegación
│   │   ├── Footer.jsx             # Pie de página
│   │   ├── SearchBar.jsx          # Barra de búsqueda
│   │   ├── ScrollToTop.jsx        # Scroll al navegar
│   │   └── ErrorBoundary.jsx      # Captura de errores
│   ├── data/              # Contenido centralizado
│   │   ├── excelContent.js        # 11 módulos Excel
│   │   └── wordContent.js         # 2 módulos Word
│   ├── hooks/             # Hooks personalizados
│   │   ├── useSearch.js           # Búsqueda genérica
│   │   └── useExerciseSearch.js   # Búsqueda anidada
│   ├── pages/             # Vistas principales
│   │   ├── Home.jsx               # Landing page
│   │   ├── ExcelPage.jsx          # Listado Excel
│   │   ├── WordPage.jsx           # Listado Word
│   │   ├── WindowsPage.jsx        # (próximamente)
│   │   └── NotFound.jsx           # 404
│   └── test/              # Configuración de tests
├── dist/                  # Build de producción (generado)
├── nginx.conf             # Configuración Nginx
├── Dockerfile             # Containerización
├── vite.config.js         # Config Vite + testing
├── tailwind.config.js     # Config Tailwind
└── package.json           # Dependencias
```

## ⚡ Comandos

### Desarrollo
```bash
npm run dev          # Iniciar servidor de desarrollo
npm run build        # Build de producción
npm run preview      # Previsualizar build local
```

### Testing
```bash
npm run test         # Modo watch (desarrollo)
npm run test:run     # Ejecutar tests una vez (CI)
npm run test:coverage # Ver coverage
```

### Calidad de código
```bash
npm run lint         # Ejecutar ESLint
```

## 🧪 Tests

El proyecto incluye **37 tests unitarios** que cubren:

- ✅ ModuleAccordion (7 tests) - expand/collapse, contador, rotación ícono
- ✅ SearchBar (8 tests) - debounce, actualización estado, eventos
- ✅ ExerciseCard (20 tests) - renderizado, niveles, skills, descarga
- ✅ NotFound (2 tests) - metadata, navegación

**Coverage objetivo:** >70% (pendiente configurar)

## 🎯 Roadmap

- [x] Testing completo con Vitest
- [x] ErrorBoundary component
- [x] Accesibilidad básica (ARIA, labels)
- [x] Refactorizar búsqueda en hook reutilizable
- [ ] Migrar a TypeScript (fase 1)
- [ ] Externalizar contenido a JSON/API
- [ ] PWA capabilities (offline support)
- [ ] Analytics (Google Analytics / Plausible)
- [ ] Multilanguage (i18n)
- [ ] Completar sección Windows
- [ ] Página de detalle de ejercicio

## 🎨 Diseño

- **Paleta**: Azules (#2563eb), Esmeralda (#10b981), Ámbar (#d97706)
- **Tipografía**: Inter (sans-serif) + system fonts
- **Breakpoints**: Mobile-first, md: 768px
- **Dark mode**: No implementado (podría agregarse)

## 📦 Despliegue

### Build
```bash
npm run build
```
Los archivos generados están en `dist/` listos para subir a hosting estático.

### Nginx (opcional)
El proyecto incluye `nginx.conf` para deployment con:
- Compresión gzip
- Headers de cache
- Servir archivos estáticos

### Docker (opcional)
```bash
docker build -t servysol .
docker run -p 80:80 servysol
```

## 🔧 Configuración

### Variables de entorno
No requiere variables de entorno para funcionar.

### Añadir nuevo ejercicio
Edita `src/data/excelContent.js` o `src/data/wordContent.js`:

```js
{
  id: 1,
  title: 'Nuevo Ejercicio',
  description: 'Descripción del ejercicio',
  level: 'Principiante', // Principiante | Intermedio | Avanzado
  skills: ['FUNCIÓN', 'OTRO'],
  fileName: 'archivo.xlsx',
  fileSize: '15 KB',
  fileUrl: '/archivos/excel/archivo.xlsx'
}
```

Los archivos `.xlsx` o `.docx` deben colocarse en `public/archivos/excel/` o `public/archivos/word/`.

### Modificar estilos
El proyecto usa **Tailwind CSS 4**. Para personalizar colores, fuentes, etc. edita `tailwind.config.js`.

## 🐛 Debugging

### Tests fallan
```bash
# Limpiar cache
npx vitest --clean
# Reinstalar dependencias
rm -rf node_modules package-lock.json
npm install
```

### Problemas de build
```bash
# Verificar configuración Vite
npx vite --debug
```

### ErrorBoundary activado
Si ves la pantalla de error de.ErrorBoundary, revisa la consola del navegador (F12) para ver el stack trace.

## 📄 Licencia

Este proyecto es de código abierto bajo licencia MIT. Puedes usarlo, modificarlo y distribuirlo libremente.

## 🙋 Contacto

Para reportar bugs o sugerir features, abre un issue en el repositorio.

---

**Desarrollado con ❤️ por el equipo Servysol**
