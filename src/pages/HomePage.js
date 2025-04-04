import React, { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';
import UploadForm from '../components/UploadForm/UploadForm';

const HomePage = () => {
  const { t } = useContext(LanguageContext);

  return (
    <div>
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold mb-2">{t('home.title')}</h1>
        <p className="text-xl text-muted">{t('home.subtitle')}</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <UploadForm />
        </div>
        
        <div>
          <div className="card">
            <div className="card-header">
              <h2 className="text-xl font-bold">{t('home.features.title')}</h2>
            </div>
            <div className="card-body">
              <ul className="space-y-4">
                <li className="flex gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-success">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                  <div>
                    <h3 className="font-bold">{t('home.features.ocr')}</h3>
                    <p className="text-sm text-muted">Use Google Gemini to extract text and data from invoices with high accuracy.</p>
                  </div>
                </li>
                
                <li className="flex gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-success">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                  <div>
                    <h3 className="font-bold">{t('home.features.multilingual')}</h3>
                    <p className="text-sm text-muted">Process invoices in multiple languages with automatic translation capabilities.</p>
                  </div>
                </li>
                
                <li className="flex gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-success">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                  <div>
                    <h3 className="font-bold">{t('home.features.tables')}</h3>
                    <p className="text-sm text-muted">Accurately extract table data including line items, prices, quantities, and more.</p>
                  </div>
                </li>
                
                <li className="flex gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-success">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                  <div>
                    <h3 className="font-bold">{t('home.features.export')}</h3>
                    <p className="text-sm text-muted">Export extracted data to CSV format for further processing and integration.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;