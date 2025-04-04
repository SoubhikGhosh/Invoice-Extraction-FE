export const translations = {
    en: {
      // General
      'app.title': 'Invoice OCR Dashboard',
      'app.footer': '© 2025 Invoice OCR System',
      
      // Navigation
      'nav.home': 'Home',
      'nav.dashboard': 'Dashboard',
      'nav.invoices': 'Invoices',
      
      // Home Page
      'home.title': 'Extract Invoice Data with AI',
      'home.subtitle': 'Upload your invoices for instant data extraction using Google Gemini',
      'home.features.title': 'Features',
      'home.features.ocr': 'Advanced OCR Technology',
      'home.features.multilingual': 'Multilingual Support',
      'home.features.tables': 'Table Data Extraction',
      'home.features.export': 'CSV Export',
      
      // Upload Form
      'upload.title': 'Upload Invoice',
      'upload.dropzone': 'Drag & drop your invoice here, or click to browse',
      'upload.formats': 'Supported formats: PDF, JPG, PNG, TIFF',
      'upload.button': 'Process Invoice',
      'upload.processing': 'Processing...',
      'upload.success': 'Invoice processed successfully!',
      'upload.error': 'Error processing invoice. Please try again.',
      
      // Invoices List
      'invoices.title': 'Processed Invoices',
      'invoices.noData': 'No invoices found',
      'invoices.table.id': 'ID',
      'invoices.table.filename': 'Filename',
      'invoices.table.date': 'Date',
      'invoices.table.language': 'Language',
      'invoices.table.actions': 'Actions',
      'invoices.action.view': 'View',
      'invoices.action.download': 'Download CSV',
      
      // Invoice Details
      'invoice.details.title': 'Invoice Details',
      'invoice.details.backToList': 'Back to list',
      'invoice.details.download': 'Download CSV',
      'invoice.details.id': 'Invoice ID',
      'invoice.details.filename': 'Filename',
      'invoice.details.processed': 'Processed on',
      'invoice.details.language': 'Original Language',
      'invoice.details.extractedFields': 'Extracted Fields',
      'invoice.details.extractedTables': 'Extracted Tables',
      'invoice.details.noFields': 'No fields extracted',
      'invoice.details.noTables': 'No tables extracted',
      'invoice.details.field.label': 'Field',
      'invoice.details.field.value': 'Value',
      'invoice.details.field.confidence': 'Confidence',
      
      // Dashboard
      'dashboard.title': 'System Dashboard',
      'dashboard.statsCards.title': 'Summary',
      'dashboard.statsCards.total': 'Total Invoices',
      'dashboard.statsCards.multilingual': 'Multilingual',
      'dashboard.statsCards.avgFields': 'Avg. Fields per Invoice',
      'dashboard.statsCards.processingTime': 'Avg. Processing Time',
      'dashboard.charts.processingTime.title': 'Processing Time Trend',
      'dashboard.charts.languageDistribution.title': 'Language Distribution',
      'dashboard.charts.confidenceScores.title': 'Average Confidence Scores',
      
      // Components
      'loading': 'Loading...',
      'error': 'An error occurred. Please try again.',
      'theme.toggle': 'Toggle Theme',
      'theme.light': 'Light',
      'theme.dark': 'Dark',
      'language.select': 'Language',
      'no.data': 'No data available',
      'pagination.previous': 'Previous',
      'pagination.next': 'Next',
      'health.status': 'API Status',
      'health.healthy': 'Healthy',
      'health.unhealthy': 'Unhealthy'
    },
    es: {
      // General
      'app.title': 'Panel de OCR de Facturas',
      'app.footer': '© 2025 Sistema de OCR de Facturas',
      
      // Navigation
      'nav.home': 'Inicio',
      'nav.dashboard': 'Panel',
      'nav.invoices': 'Facturas',
      
      // Home Page
      'home.title': 'Extrae Datos de Facturas con IA',
      'home.subtitle': 'Sube tus facturas para extracción instantánea de datos usando Google Gemini',
      'home.features.title': 'Características',
      'home.features.ocr': 'Tecnología OCR Avanzada',
      'home.features.multilingual': 'Soporte Multilingüe',
      'home.features.tables': 'Extracción de Datos Tabulares',
      'home.features.export': 'Exportación a CSV',
      
      // Upload Form
      'upload.title': 'Subir Factura',
      'upload.dropzone': 'Arrastra y suelta tu factura aquí, o haz clic para explorar',
      'upload.formats': 'Formatos soportados: PDF, JPG, PNG, TIFF',
      'upload.button': 'Procesar Factura',
      'upload.processing': 'Procesando...',
      'upload.success': '¡Factura procesada con éxito!',
      'upload.error': 'Error al procesar la factura. Por favor, intenta de nuevo.',
      
      // Invoices List
      'invoices.title': 'Facturas Procesadas',
      'invoices.noData': 'No se encontraron facturas',
      'invoices.table.id': 'ID',
      'invoices.table.filename': 'Nombre del Archivo',
      'invoices.table.date': 'Fecha',
      'invoices.table.language': 'Idioma',
      'invoices.table.actions': 'Acciones',
      'invoices.action.view': 'Ver',
      'invoices.action.download': 'Descargar CSV',
      
      // Invoice Details
      'invoice.details.title': 'Detalles de Factura',
      'invoice.details.backToList': 'Volver a la lista',
      'invoice.details.download': 'Descargar CSV',
      'invoice.details.id': 'ID de Factura',
      'invoice.details.filename': 'Nombre del Archivo',
      'invoice.details.processed': 'Procesado el',
      'invoice.details.language': 'Idioma Original',
      'invoice.details.extractedFields': 'Campos Extraídos',
      'invoice.details.extractedTables': 'Tablas Extraídas',
      'invoice.details.noFields': 'No se extrajeron campos',
      'invoice.details.noTables': 'No se extrajeron tablas',
      'invoice.details.field.label': 'Campo',
      'invoice.details.field.value': 'Valor',
      'invoice.details.field.confidence': 'Confianza',
      
      // Dashboard
      'dashboard.title': 'Panel del Sistema',
      'dashboard.statsCards.title': 'Resumen',
      'dashboard.statsCards.total': 'Total de Facturas',
      'dashboard.statsCards.multilingual': 'Multilingües',
      'dashboard.statsCards.avgFields': 'Promedio de Campos por Factura',
      'dashboard.statsCards.processingTime': 'Tiempo Promedio de Procesamiento',
      'dashboard.charts.processingTime.title': 'Tendencia de Tiempo de Procesamiento',
      'dashboard.charts.languageDistribution.title': 'Distribución de Idiomas',
      'dashboard.charts.confidenceScores.title': 'Puntuaciones de Confianza Promedio',
      
      // Components
      'loading': 'Cargando...',
      'error': 'Ocurrió un error. Por favor, intenta de nuevo.',
      'theme.toggle': 'Cambiar Tema',
      'theme.light': 'Claro',
      'theme.dark': 'Oscuro',
      'language.select': 'Idioma',
      'no.data': 'No hay datos disponibles',
      'pagination.previous': 'Anterior',
      'pagination.next': 'Siguiente',
      'health.status': 'Estado de la API',
      'health.healthy': 'Funcionando',
      'health.unhealthy': 'No Disponible'
    }
  };