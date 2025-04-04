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
  },
  
  hi: {
    // General
    'app.title': 'इनवॉइस OCR डैशबोर्ड',
    'app.footer': '© 2025 इनवॉइस OCR सिस्टम',
    
    // Navigation
    'nav.home': 'होम',
    'nav.dashboard': 'डैशबोर्ड',
    'nav.invoices': 'इनवॉइस',
    
    // Home Page
    'home.title': 'AI के साथ इनवॉइस डेटा निकालें',
    'home.subtitle': 'Google Gemini का उपयोग करके तत्काल डेटा निष्कर्षण के लिए अपने इनवॉइस अपलोड करें',
    'home.features.title': 'विशेषताएँ',
    'home.features.ocr': 'उन्नत OCR तकनीक',
    'home.features.multilingual': 'बहुभाषी समर्थन',
    'home.features.tables': 'तालिका डेटा निष्कर्षण',
    'home.features.export': 'CSV निर्यात',
    
    // Upload Form
    'upload.title': 'इनवॉइस अपलोड करें',
    'upload.dropzone': 'अपने इनवॉइस को यहां खींचें और छोड़ें, या ब्राउज़ करने के लिए क्लिक करें',
    'upload.formats': 'समर्थित प्रारूप: PDF, JPG, PNG, TIFF',
    'upload.button': 'इनवॉइस प्रोसेस करें',
    'upload.processing': 'प्रोसेसिंग हो रही है...',
    'upload.success': 'इनवॉइस सफलतापूर्वक प्रोसेस किया गया!',
    'upload.error': 'इनवॉइस प्रोसेसिंग में त्रुटि। कृपया पुनः प्रयास करें।',
    
    // Invoices List
    'invoices.title': 'प्रोसेस किए गए इनवॉइस',
    'invoices.noData': 'कोई इनवॉइस नहीं मिला',
    'invoices.table.id': 'आईडी',
    'invoices.table.filename': 'फाइल नाम',
    'invoices.table.date': 'दिनांक',
    'invoices.table.language': 'भाषा',
    'invoices.table.actions': 'कार्यवाई',
    'invoices.action.view': 'देखें',
    'invoices.action.download': 'CSV डाउनलोड करें',
    
    // Invoice Details
    'invoice.details.title': 'इनवॉइस विवरण',
    'invoice.details.backToList': 'सूची पर वापस जाएँ',
    'invoice.details.download': 'CSV डाउनलोड करें',
    'invoice.details.id': 'इनवॉइस आईडी',
    'invoice.details.filename': 'फाइल नाम',
    'invoice.details.processed': 'प्रोसेस किया गया',
    'invoice.details.language': 'मूल भाषा',
    'invoice.details.extractedFields': 'निकाले गए फील्ड',
    'invoice.details.extractedTables': 'निकाली गई तालिकाएँ',
    'invoice.details.noFields': 'कोई फील्ड नहीं निकाला गया',
    'invoice.details.noTables': 'कोई तालिका नहीं निकाली गई',
    'invoice.details.field.label': 'फील्ड',
    'invoice.details.field.value': 'मान',
    'invoice.details.field.confidence': 'विश्वास स्तर',
    
    // Dashboard
    'dashboard.title': 'सिस्टम डैशबोर्ड',
    'dashboard.statsCards.title': 'सारांश',
    'dashboard.statsCards.total': 'कुल इनवॉइस',
    'dashboard.statsCards.multilingual': 'बहुभाषी',
    'dashboard.statsCards.avgFields': 'प्रति इनवॉइस औसत फील्ड',
    'dashboard.statsCards.processingTime': 'औसत प्रोसेसिंग समय',
    'dashboard.charts.processingTime.title': 'प्रोसेसिंग समय प्रवृत्ति',
    'dashboard.charts.languageDistribution.title': 'भाषा वितरण',
    'dashboard.charts.confidenceScores.title': 'औसत विश्वास स्कोर',
    
    // Components
    'loading': 'लोड हो रहा है...',
    'error': 'एक त्रुटि हुई। कृपया पुनः प्रयास करें।',
    'theme.toggle': 'थीम बदलें',
    'theme.light': 'लाइट',
    'theme.dark': 'डार्क',
    'language.select': 'भाषा',
    'no.data': 'कोई डेटा उपलब्ध नहीं है',
    'pagination.previous': 'पिछला',
    'pagination.next': 'अगला',
    'health.status': 'API स्थिति',
    'health.healthy': 'स्वस्थ',
    'health.unhealthy': 'अस्वस्थ'
  },
  
  bn: {
    // General
    'app.title': 'ইনভয়েস OCR ড্যাশবোর্ড',
    'app.footer': '© 2025 ইনভয়েস OCR সিস্টেম',
    
    // Navigation
    'nav.home': 'হোম',
    'nav.dashboard': 'ড্যাশবোর্ড',
    'nav.invoices': 'ইনভয়েস',
    
    // Home Page
    'home.title': 'AI দিয়ে ইনভয়েস ডেটা নিষ্কাশন করুন',
    'home.subtitle': 'Google Gemini ব্যবহার করে তাৎক্ষণিক ডেটা নিষ্কাশনের জন্য আপনার ইনভয়েস আপলোড করুন',
    'home.features.title': 'বৈশিষ্ট্য',
    'home.features.ocr': 'উন্নত OCR প্রযুক্তি',
    'home.features.multilingual': 'বহুভাষিক সমর্থন',
    'home.features.tables': 'টেবিল ডেটা নিষ্কাশন',
    'home.features.export': 'CSV এক্সপোর্ট',
    
    // Upload Form
    'upload.title': 'ইনভয়েস আপলোড করুন',
    'upload.dropzone': 'আপনার ইনভয়েস এখানে টেনে আনুন, অথবা ব্রাউজ করতে ক্লিক করুন',
    'upload.formats': 'সমর্থিত ফরম্যাট: PDF, JPG, PNG, TIFF',
    'upload.button': 'ইনভয়েস প্রসেস করুন',
    'upload.processing': 'প্রসেস হচ্ছে...',
    'upload.success': 'ইনভয়েস সফলভাবে প্রসেস করা হয়েছে!',
    'upload.error': 'ইনভয়েস প্রসেস করতে ত্রুটি। অনুগ্রহ করে আবার চেষ্টা করুন।',
    
    // Invoices List
    'invoices.title': 'প্রসেস করা ইনভয়েস',
    'invoices.noData': 'কোন ইনভয়েস পাওয়া যায়নি',
    'invoices.table.id': 'আইডি',
    'invoices.table.filename': 'ফাইলের নাম',
    'invoices.table.date': 'তারিখ',
    'invoices.table.language': 'ভাষা',
    'invoices.table.actions': 'অ্যাকশন',
    'invoices.action.view': 'দেখুন',
    'invoices.action.download': 'CSV ডাউনলোড করুন',
    
    // Invoice Details
    'invoice.details.title': 'ইনভয়েস বিবরণ',
    'invoice.details.backToList': 'তালিকায় ফিরে যান',
    'invoice.details.download': 'CSV ডাউনলোড করুন',
    'invoice.details.id': 'ইনভয়েস আইডি',
    'invoice.details.filename': 'ফাইলের নাম',
    'invoice.details.processed': 'প্রসেস করা হয়েছে',
    'invoice.details.language': 'মূল ভাষা',
    'invoice.details.extractedFields': 'নিষ্কাশিত ফিল্ড',
    'invoice.details.extractedTables': 'নিষ্কাশিত টেবিল',
    'invoice.details.noFields': 'কোন ফিল্ড নিষ্কাশন করা হয়নি',
    'invoice.details.noTables': 'কোন টেবিল নিষ্কাশন করা হয়নি',
    'invoice.details.field.label': 'ফিল্ড',
    'invoice.details.field.value': 'মান',
    'invoice.details.field.confidence': 'বিশ্বাসযোগ্যতা',
    
    // Dashboard
    'dashboard.title': 'সিস্টেম ড্যাশবোর্ড',
    'dashboard.statsCards.title': 'সারাংশ',
    'dashboard.statsCards.total': 'মোট ইনভয়েস',
    'dashboard.statsCards.multilingual': 'বহুভাষিক',
    'dashboard.statsCards.avgFields': 'গড় ফিল্ড প্রতি ইনভয়েস',
    'dashboard.statsCards.processingTime': 'গড় প্রসেসিং সময়',
    'dashboard.charts.processingTime.title': 'প্রসেসিং সময় প্রবণতা',
    'dashboard.charts.languageDistribution.title': 'ভাষা বিতরণ',
    'dashboard.charts.confidenceScores.title': 'গড় বিশ্বাসযোগ্যতা স্কোর',
    
    // Components
    'loading': 'লোড হচ্ছে...',
    'error': 'একটি ত্রুটি ঘটেছে। অনুগ্রহ করে আবার চেষ্টা করুন।',
    'theme.toggle': 'থিম পরিবর্তন করুন',
    'theme.light': 'লাইট',
    'theme.dark': 'ডার্ক',
    'language.select': 'ভাষা',
    'no.data': 'কোন ডেটা উপলব্ধ নেই',
    'pagination.previous': 'আগের',
    'pagination.next': 'পরবর্তী',
    'health.status': 'API স্ট্যাটাস',
    'health.healthy': 'স্বাস্থ্যকর',
    'health.unhealthy': 'অস্বাস্থ্যকর'
  },
  
  ja: {
    // General
    'app.title': '請求書OCRダッシュボード',
    'app.footer': '© 2025 請求書OCRシステム',
    
    // Navigation
    'nav.home': 'ホーム',
    'nav.dashboard': 'ダッシュボード',
    'nav.invoices': '請求書',
    
    // Home Page
    'home.title': 'AIで請求書データを抽出',
    'home.subtitle': 'Google Geminiを使用した即時データ抽出のために請求書をアップロードしてください',
    'home.features.title': '特徴',
    'home.features.ocr': '高度なOCR技術',
    'home.features.multilingual': '多言語サポート',
    'home.features.tables': 'テーブルデータ抽出',
    'home.features.export': 'CSVエクスポート',
    
    // Upload Form
    'upload.title': '請求書アップロード',
    'upload.dropzone': '請求書をここにドラッグ＆ドロップ、またはクリックして参照',
    'upload.formats': '対応フォーマット: PDF, JPG, PNG, TIFF',
    'upload.button': '請求書を処理',
    'upload.processing': '処理中...',
    'upload.success': '請求書が正常に処理されました！',
    'upload.error': '請求書の処理中にエラーが発生しました。もう一度お試しください。',
    
    // Invoices List
    'invoices.title': '処理済み請求書',
    'invoices.noData': '請求書が見つかりません',
    'invoices.table.id': 'ID',
    'invoices.table.filename': 'ファイル名',
    'invoices.table.date': '日付',
    'invoices.table.language': '言語',
    'invoices.table.actions': 'アクション',
    'invoices.action.view': '表示',
    'invoices.action.download': 'CSVダウンロード',
    
    // Invoice Details
    'invoice.details.title': '請求書詳細',
    'invoice.details.backToList': 'リストに戻る',
    'invoice.details.download': 'CSVダウンロード',
    'invoice.details.id': '請求書ID',
    'invoice.details.filename': 'ファイル名',
    'invoice.details.processed': '処理日時',
    'invoice.details.language': '原語',
    'invoice.details.extractedFields': '抽出フィールド',
    'invoice.details.extractedTables': '抽出テーブル',
    'invoice.details.noFields': 'フィールドが抽出されていません',
    'invoice.details.noTables': 'テーブルが抽出されていません',
    'invoice.details.field.label': 'フィールド',
    'invoice.details.field.value': '値',
    'invoice.details.field.confidence': '信頼度',
    
    // Dashboard
    'dashboard.title': 'システムダッシュボード',
    'dashboard.statsCards.title': '概要',
    'dashboard.statsCards.total': '合計請求書',
    'dashboard.statsCards.multilingual': '多言語',
    'dashboard.statsCards.avgFields': '請求書あたりの平均フィールド',
    'dashboard.statsCards.processingTime': '平均処理時間',
    'dashboard.charts.processingTime.title': '処理時間の傾向',
    'dashboard.charts.languageDistribution.title': '言語分布',
    'dashboard.charts.confidenceScores.title': '平均信頼度スコア',
    
    // Components
    'loading': '読み込み中...',
    'error': 'エラーが発生しました。もう一度お試しください。',
    'theme.toggle': 'テーマ切替',
    'theme.light': 'ライト',
    'theme.dark': 'ダーク',
    'language.select': '言語',
    'no.data': 'データがありません',
    'pagination.previous': '前へ',
    'pagination.next': '次へ',
    'health.status': 'APIステータス',
    'health.healthy': '正常',
    'health.unhealthy': '異常'
  }
}