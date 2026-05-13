export const excelModules = [
  {
    id: "formulas-basicas",
    title: "Fórmulas Básicas",
    description: "Domina las operaciones fundamentales de Excel",
    icon: "calculator",
    color: "green",
    exercises: [
      {
        id: "fb-01",
        slug: "ejercicios-formulas-basicas",
        title: "Ejercicios de Fórmulas Básicas",
        description: "Aprende los operadores aritméticos (+, -, *, /), cómo escribir fórmulas en la barra de fórmulas y referencias de celda.",
        skills: ["Operadores básicos", "Barra de fórmulas", "Referencias de celda"],
        level: "Principiante",
        fileUrl: "/archivos/excel/Ejercicios Formulas Basicas.xlsx",
        fileName: "Ejercicios-Formulas-Basicas-Servysol.xlsx",
        fileSize: "59 KB"
      },
      {
        id: "fb-02",
        slug: "formulas-basicas-nivel-2",
        title: "Fórmulas Básicas Nivel 2",
        description: "Continúa practicando con fórmulas avanzadas, referencias entre hojas y consolidación de datos.",
        skills: ["Referencias entre hojas", "Consolidación", "Fórmulas encadenadas"],
        level: "Principiante",
        fileUrl: "/archivos/excel/Ejercicio 2.xls",
        fileName: "Formulas-Basicas-2-Servysol.xls",
        fileSize: "16 KB"
      },
      {
        id: "fb-03",
        slug: "contrato-laboral",
        title: "Gestión de Contrato con Fórmulas",
        description: "Caso práctico real: calcula valores de un contrato laboral con salario, deducciones y neto a pagar.",
        skills: ["Fórmulas encadenadas", "Porcentajes", "Formato de moneda"],
        level: "Intermedio",
        fileUrl: "/archivos/excel/contrato1.xls",
        fileName: "Contrato-Servysol.xls",
        fileSize: "25 KB"
      },
      {
        id: "fb-04",
        slug: "analisis-ventas",
        title: "Análisis de Ventas",
        description: "Trabaja con dataset de ventas mensuales. Calcula totales, comisiones y ranking de desempeño.",
        skills: ["SUMA", "Porcentajes de meta", "Rankings"],
        level: "Intermedio",
        fileUrl: "/archivos/excel/ventas1.xls",
        fileName: "Ventas-Servysol.xls",
        fileSize: "30 KB"
      },
      {
        id: "fb-05",
        slug: "taller-excel-basico",
        title: "Taller Excel Básico",
        description: "Taller completo de repaso sobre fórmulas y funciones básicas de Excel.",
        skills: ["Fórmulas básicas", "Operadores", "Funciones simples"],
        level: "Principiante",
        fileUrl: "/archivos/excel/taller_excel_b__sico.xls",
        fileName: "Taller-Excel-Basico-Servysol.xls",
        fileSize: "42 KB"
      }
    ]
  },
  {
    id: "tienda-don-juanchito",
    title: "Caso Tienda Don Juanchito",
    description: "Ejercicios prácticos con datos de una tienda",
    icon: "file-text",
    color: "emerald",
    exercises: [
      {
        id: "tj-01",
        slug: "tienda-don-juanchito",
        title: "Análisis de Ventas - Tienda Don Juanchito",
        description: "Caso real de una tienda: registra ventas, calcula totales por producto y genera reportes diarios.",
        skills: ["Registro de ventas", "Totales por producto", "Reportes"],
        level: "Principiante",
        fileUrl: "/archivos/excel/tienda-don-juanchito1.xls.xlsx",
        fileName: "Tienda-Don-Juanchito-Servysol.xlsx",
        fileSize: "55 KB"
      }
    ]
  },
  {
    id: "funciones-estadisticas",
    title: "Funciones Estadísticas",
    description: "PROMEDIO, MAX, MIN, CONTAR y más",
    icon: "bar-chart-3",
    color: "blue",
    exercises: [
      {
        id: "fe-01",
        slug: "funciones-basicas",
        title: "Funciones Básicas",
        description: "Aprende las funciones más usadas: SUMA, PROMEDIO, MAX, MIN, CONTAR aplicadas a datos de empleados.",
        skills: ["SUMA", "PROMEDIO", "MAX / MIN", "CONTAR"],
        level: "Principiante",
        fileUrl: "/archivos/excel/Formulas básicas.xls",
        fileName: "Funciones-Basicas-Servysol.xls",
        fileSize: "26 KB"
      },
      {
        id: "fe-02",
        slug: "analisis-sueldos",
        title: "Análisis de Sueldos",
        description: "Trabaja con datos de salarios y aplica funciones estadísticas para calcular promedios y percentiles.",
        skills: ["PROMEDIO", "MAX / MIN", "CONTAR", "Estadísticas"],
        level: "Principiante",
        fileUrl: "/archivos/excel/funciones2 sueldos.xls",
        fileName: "Analisis-Sueldos-Servysol.xls",
        fileSize: "51 KB"
      }
    ]
  },
  {
    id: "sumar-si",
    title: "SUMAR.SI y CONTAR.SI",
    description: "Conteo y suma con condiciones específicas",
    icon: "hash",
    color: "teal",
    exercises: [
      {
        id: "ss-01",
        slug: "sumar-si-condicional",
        title: "SUMAR.SI con Condiciones",
        description: "Suma valores que cumplen criterios específicos. Caso práctico de ventas por región y categoría.",
        skills: ["SUMAR.SI", "SUMAR.SI.CONJUNTO", "Criterios múltiples"],
        level: "Intermedio",
        fileUrl: "/archivos/excel/sumarsiconjunto yfiltros.xlsx",
        fileName: "SumarSI-Condicional-Servysol.xlsx",
        fileSize: "24 KB"
      }
    ]
  },
  {
    id: "celdas-absolutas",
    title: "Celdas Absolutas y Relativas",
    description: "El concepto más importante de Excel",
    icon: "pin",
    color: "amber",
    exercises: [
      {
        id: "ca-01",
        slug: "celdas-absolutas-relativas",
        title: "Referencias Absolutas y Relativas",
        description: "Entiende por qué una fórmula cambia al copiarla y cómo fijarla con el símbolo $.",
        skills: ["Referencia relativa A1", "Referencia absoluta $A$1", "Referencia mixta"],
        level: "Principiante",
        fileUrl: "/archivos/excel/Absoluta-relativa/Celdas absolutas y relativas.xlsx",
        fileName: "Celdas-Absolutas-Servysol.xlsx",
        fileSize: "48 KB"
      },
      {
        id: "ca-02",
        slug: "factura-01",
        title: "Factura con Referencias Absolutas",
        description: "Practica con facturas aplicando IVA mediante referencias absolutas.",
        skills: ["Referencias absolutas", "Cálculo de IVA", "Formato de moneda"],
        level: "Principiante",
        fileUrl: "/archivos/excel/Absoluta-relativa/Factura_01.xlsx",
        fileName: "Factura-1-Servysol.xlsx",
        fileSize: "14 KB"
      },
      {
        id: "ca-03",
        slug: "tabla-multiplicar",
        title: "Tabla de Multiplicar con Referencias",
        description: "Crea una tabla de multiplicar usando referencias absolutas y relativas.",
        skills: ["Referencias", "Tablas de cálculo", "Rellenado"],
        level: "Principiante",
        fileUrl: "/archivos/excel/Absoluta-relativa/Tabla_multiplicar.xlsx",
        fileName: "Tabla-Multiplicar-Servysol.xlsx",
        fileSize: "14 KB"
      }
    ]
  },
  {
    id: "filtros-subtotales",
    title: "Filtros y Subtotales",
    description: "Organiza y resume grandes volúmenes de datos",
    icon: "filter",
    color: "purple",
    exercises: [
      {
        id: "fs-01",
        slug: "autofiltros-basicos",
        title: "Autofiltros Básicos",
        description: "Aprende a activar y usar los filtros automáticos para mostrar solo los datos que necesitas.",
        skills: ["Autofiltros", "Filtros por criterio", "Filtros personalizados"],
        level: "Principiante",
        fileUrl: "/archivos/excel/Filtros y Validación/autofiltros.xls",
        fileName: "Autofiltros-Servysol.xls",
        fileSize: "24 KB"
      },
      {
        id: "fs-02",
        slug: "filtros-avanzados",
        title: "Filtros Avanzados",
        description: "Lleva los filtros al siguiente nivel con criterios múltiples y comodines.",
        skills: ["Filtros avanzados", "Comodines", "Rango de criterios"],
        level: "Intermedio",
        fileUrl: "/archivos/excel/Filtros y Validación/Ejercicio Filtros avanzados.xlsx",
        fileName: "Filtros-Avanzados-Servysol.xlsx",
        fileSize: "77 KB"
      },
      {
        id: "fs-03",
        slug: "formato-condicional",
        title: "Formato Condicional",
        description: "Aplica colores automáticamente según valores: resaltar valores altos/bajos.",
        skills: ["Formato condicional", "Reglas de formato", "Iconos"],
        level: "Intermedio",
        fileUrl: "/archivos/excel/Filtros y Validación/Ejercicio Formato Condicional.xlsx",
        fileName: "Formato-Condicional-Servysol.xlsx",
        fileSize: "20 KB"
      }
    ]
  },
  {
    id: "buscarv",
    title: "Función BUSCARV",
    description: "Busca y relaciona datos entre tablas",
    icon: "search",
    color: "coral",
    exercises: [
      {
        id: "bv-01",
        slug: "buscarv-introduccion",
        title: "BUSCARV — Primeros Pasos",
        description: "Aprende la sintaxis completa de BUSCARV: valor_buscado, matriz_tabla, indicador_columnas, ordenado.",
        skills: ["Sintaxis BUSCARV", "Búsqueda exacta", "Búsqueda aproximada"],
        level: "Intermedio",
        fileUrl: "/archivos/excel/BuscarV/BuscarV1.xls",
        fileName: "BUSCARV-1-Servysol.xls",
        fileSize: "18 KB"
      },
      {
        id: "bv-02",
        slug: "buscarv-ejemplo",
        title: "BUSCARV - Ejemplo Práctico",
        description: "Caso real de facturación: ingresa código de producto y trae nombre, precio y categoría.",
        skills: ["BUSCARV en formularios", "Tablas de referencia"],
        level: "Intermedio",
        fileUrl: "/archivos/excel/BuscarV/BUSCARV Ejemplo.xlsx",
        fileName: "BUSCARV-Ejemplo-Servysol.xlsx",
        fileSize: "12 KB"
      },
      {
        id: "bv-03",
        slug: "buscarv-2",
        title: "BUSCARV - Ejercicio 2",
        description: "Practica con tablas de empleados y departamentos.",
        skills: ["BUSCARV", "Tablas relacionadas"],
        level: "Intermedio",
        fileUrl: "/archivos/excel/BuscarV/BuscarV2.xlsx",
        fileName: "BUSCARV-2-Servysol.xlsx",
        fileSize: "15 KB"
      },
      {
        id: "bv-04",
        slug: "buscarv-avanzado",
        title: "BUSCARV - Ejercicio Avanzado",
        description: "Práctica avanzada con búsquedas verticales en bases de datos complejas.",
        skills: ["BUSCARV combinado", "Búsquedas complejas", "Validación de datos"],
        level: "Avanzado",
        fileUrl: "/archivos/excel/BuscarV/EjBuscarV,BH y combi.xls",
        fileName: "BUSCARV-Avanzado-Servysol.xls",
        fileSize: "76 KB"
      }
    ]
  },
  {
    id: "funcion-si",
    title: "Función SI y Condicionales",
    description: "Toma decisiones lógicas dentro de Excel",
    icon: "scale",
    color: "pink",
    exercises: [
      {
        id: "si-01",
        slug: "funcion-si-basica",
        title: "Función SI — Básica",
        description: "Domina la función SI para tomar decisiones automáticas: aprobado/reprobado, mayor/menor.",
        skills: ["SI simple", "SI anidado", "Y / O combinados"],
        level: "Intermedio",
        fileUrl: "/archivos/excel/Funcion Si.xls",
        fileName: "Funcion-SI-Servysol.xls",
        fileSize: "193 KB"
      },
      {
        id: "si-02",
        slug: "funciones-condicionales",
        title: "Funciones Condicionales Avanzadas",
        description: "Practica funciones condicionales avanzadas: SI, Y, O combinados.",
        skills: ["SI avanzado", "Y / O", "Lógica condicional"],
        level: "Avanzado",
        fileUrl: "/archivos/excel/Practica Funciones condicionales.xls",
        fileName: "Funciones-Condicionales-Servysol.xls",
        fileSize: "16 KB"
      },
      {
        id: "si-03",
        slug: "si-anidada",
        title: "Función SI Anidada",
        description: "Lleva la función SI al siguiente nivel con múltiples condiciones anidadas.",
        skills: ["SI anidado", "Múltiples condiciones", "Lógica compleja"],
        level: "Avanzado",
        fileUrl: "/archivos/excel/Funcion Si anidada/10_ejercicios_si_y_o_tiotech.xlsx",
        fileName: "SI-Anidada-Servysol.xlsx",
        fileSize: "40 KB"
      }
    ]
  },
  {
    id: "tablas-dinamicas",
    title: "Tablas Dinámicas",
    description: "Resumen y análisis de datos",
    icon: "bar-chart-3",
    color: "indigo",
    exercises: [
      {
        id: "td-01",
        slug: "ejemplos-tablas-dinamicas",
        title: "3 Ejemplos de Tablas Dinámicas",
        description: "Aprende a crear y configurar tablas dinámicas con diferentes configuraciones.",
        skills: ["Crear tabla dinámica", "Campos de fila/columna", "Filtros"],
        level: "Intermedio",
        fileUrl: "/archivos/excel/Tablas Dinámicas/3 EJEMPLOS DE TABLAS DINÁMICAS.xlsx",
        fileName: "Ejemplos-Tablas-Dinamicas-Servysol.xlsx",
        fileSize: "35 KB"
      },
      {
        id: "td-02",
        slug: "taller-tablas-dinamicas",
        title: "Taller Tablas Dinámicas",
        description: "Ejercicio completo con base de datos de ventas y múltiples configuraciones.",
        skills: ["Tablas dinámicas", "Grupos", "Cálculos personalizados"],
        level: "Intermedio",
        fileUrl: "/archivos/excel/Tablas Dinámicas/Taller Tabla dinámica.xls",
        fileName: "Taller-Tablas-Dinamicas-Servysol.xls",
        fileSize: "57 KB"
      }
    ]
  },
  {
    id: "macros",
    title: "Macros y VBA",
    description: "Automatización con macros",
    icon: "file-text",
    color: "violet",
    exercises: [
      {
        id: "mk-01",
        slug: "ejercicios-macros",
        title: "Ejercicios de Macros",
        description: "Aprende a grabar y ejecutar macros para automatizar tareas repetitivas.",
        skills: ["Grabar macro", "Ejecutar macro", "Programación VBA"],
        level: "Avanzado",
        fileUrl: "/archivos/excel/Macros/Ejercicios MACROS.xlsx",
        fileName: "Ejercicios-Macros-Servysol.xlsx",
        fileSize: "30 KB"
      },
      {
        id: "mk-02",
        slug: "trucos-excel",
        title: "Trucos y Macros Útiles",
        description: "Colección de macros útiles para aumentar productividad.",
        skills: ["Macros útiles", "VBA básico", "Productividad"],
        level: "Avanzado",
        fileUrl: "/archivos/excel/Macros/Trucos.xlsm",
        fileName: "Trucos-Macros-Servysol.xlsm",
        fileSize: "36 KB"
      }
    ]
  },
  {
    id: "practica-final",
    title: "Práctica Final",
    description: "Consolida todo lo aprendido",
    icon: "award",
    color: "gray",
    exercises: [
      {
        id: "pf-01",
        slug: "diagnostico-excel",
        title: "Diagnóstico de Excel",
        description: "Evaluación completa que cubre todas las funciones aprendidas.",
        skills: ["Evaluación integral", "Casos prácticos", "Todas las funciones"],
        level: "Avanzado",
        fileUrl: "/archivos/excel/Practica Final/Diagnostico_Excel.xlsx",
        fileName: "Diagnostico-Excel-Servysol.xlsx",
        fileSize: "141 KB"
      },
      {
        id: "pf-02",
        slug: "examen-final",
        title: "Examen Final de Excel",
        description: "Evaluación final que simula un caso laboral real con múltiples hojas y funciones.",
        skills: ["Caso completo", "Múltiples hojas", "Funciones avanzadas"],
        level: "Avanzado",
        fileUrl: "/archivos/excel/Practica Final/Examen Final.xlsx",
        fileName: "Examen-Final-Servysol.xlsx",
        fileSize: "188 KB"
      }
    ]
  }
]
