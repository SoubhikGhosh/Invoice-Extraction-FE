import React, { useState, useEffect, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import invoiceService from '../../services/api';
import { LanguageContext } from '../../context/LanguageContext';
import InvoiceImage from './InvoiceImage';
import ExtractedFields from './ExtractedFields';
import ExtractedTables from './ExtractedTables';

const InvoiceDetails = () => {
  const { id } = useParams();
  const { t } = useContext(LanguageContext);
  
  const [invoice, setInvoice] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  
  // Fetch invoice details
  useEffect(() => {
    const fetchInvoiceDetails = async () => {
      try {
        setLoading(true);
        const data = await invoiceService.getInvoiceDetails(id);
        setInvoice(data);
      } catch (error) {
        console.error('Error fetching invoice details:', error);
        setError(error.message || t('error'));
        toast.error(t('error'));
      } finally {
        setLoading(false);
      }
    };
    
    fetchInvoiceDetails();
  }, [id, t]);
  
  // Handle download CSV
  const handleDownloadCSV = async () => {
    try {
      const response = await invoiceService.getInvoiceCSV(id);
      invoiceService.createDownloadLink(
        response.data,
        `invoice_${id}_export.csv`
      );
    } catch (error) {
      console.error('Error downloading CSV:', error);
      toast.error(t('error'));
    }
  };
  
  // Format date
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleString();
  };
  
  // Loading state
  if (loading) {
    return (
      <div className="text-center p-4">
        <div className="spinner mx-auto mb-2"></div>
        <p>{t('loading')}</p>
      </div>
    );
  }
  
  // Error state
  if (error) {
    return (
      <div className="alert alert-error">
        {error}
      </div>
    );
  }
  
  // Not found state
  if (!invoice) {
    return (
      <div className="alert alert-warning">
        {t('no.data')}
      </div>
    );
  }
  
  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold invoice-title">{t('invoice.details.title')}</h1>
      <div className="flex gap-2">
          <Link to="/invoices" className="btn btn-secondary">
            {t('invoice.details.backToList')}
          </Link>
          <button
            onClick={handleDownloadCSV}
            className="btn btn-primary"
          >
            {t('invoice.details.download')}
          </button>
        </div>
      </div>
      
      <div className="card mb-4">
        <div className="card-body">
          <h2 className="text-xl mb-4">{t('invoice.details.id')}: {invoice.id}</h2>
          
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <p><strong>{t('invoice.details.filename')}:</strong> {invoice.filename}</p>
              <p><strong>{t('invoice.details.processed')}:</strong> {formatDate(invoice.processing_timestamp)}</p>
            </div>
            <div>
              <p>
                <strong>{t('invoice.details.language')}:</strong> {invoice.original_language || 'English'}
                {invoice.is_multilingual && <span className="badge badge-info ml-2">Multilingual</span>}
              </p>
              {invoice.has_translation && (
                <p><strong>Translation:</strong> Available</p>
              )}
            </div>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        {/* Left column - Original Image */}
        <div>
          <h2 className="text-xl mb-4">{t('invoice.details.labelOriginal')}</h2>
          <InvoiceImage invoiceId={invoice.id} filename={invoice.filename} />
        </div>
        
        {/* Right column - Extracted Fields */}
        <div>
          <h2 className="text-xl mb-4">{t('invoice.details.extractedFields')}</h2>
          <ExtractedFields fields={invoice.fields || []} />
        </div>
      </div>
      
      {/* Extracted Tables - Full width */}
      <div className="mt-6">
        <h2 className="text-xl mb-4">{t('invoice.details.extractedTables')}</h2>
        <ExtractedTables tables={invoice.tables || []} />
      </div>
      
      {/* Display Original Text and Translation if available */}
      {invoice.extracted_text && (
        <div className="mt-6">
          <div className="card">
            <div className="card-header">
              <h2 className="text-xl">Extracted Text</h2>
            </div>
            <div className="card-body">
              <pre className="whitespace-pre-wrap">{invoice.extracted_text}</pre>
            </div>
          </div>
        </div>
      )}
      
      {invoice.translation && (
        <div className="mt-6">
          <div className="card">
            <div className="card-header">
              <h2 className="text-xl">Translation</h2>
            </div>
            <div className="card-body">
              <pre className="whitespace-pre-wrap">{invoice.translation}</pre>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default InvoiceDetails;