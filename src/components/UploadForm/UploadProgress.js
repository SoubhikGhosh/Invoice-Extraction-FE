import React, { useContext } from 'react';
import { LanguageContext } from '../../context/LanguageContext';

const UploadProgress = () => {
  const { t } = useContext(LanguageContext);

  return (
    <div>
      <div className="flex items-center">
        <div className="spinner mr-2"></div>
        <span>{t('upload.processing')}</span>
      </div>
      <p className="text-sm text-muted mt-2">
        {t('upload.processing')} (OCR, table detection, and field extraction may take a moment)
      </p>
    </div>
  );
};

export default UploadProgress;