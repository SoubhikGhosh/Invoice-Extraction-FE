import React, { useState, useCallback, useContext } from 'react';
import { useDropzone } from 'react-dropzone';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import invoiceService from '../../services/api';
import { LanguageContext } from '../../context/LanguageContext';
import UploadProgress from './UploadProgress';

const UploadForm = () => {
  const { t } = useContext(LanguageContext);
  const navigate = useNavigate();
  
  const [file, setFile] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState('');

  // Define accepted file types
  const fileTypes = {
    'application/pdf': ['.pdf'],
    'image/jpeg': ['.jpg', '.jpeg'],
    'image/png': ['.png'],
    'image/tiff': ['.tiff', '.tif'],
  };

  // Handle file drop
  const onDrop = useCallback((acceptedFiles) => {
    // Reset previous errors
    setError('');
    
    if (acceptedFiles.length === 0) {
      return;
    }

    // Take the first file only
    const selectedFile = acceptedFiles[0];
    setFile(selectedFile);
  }, []);

  // Configure dropzone
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: fileTypes,
    maxFiles: 1,
    multiple: false,
  });

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!file) {
      setError(t('upload.error'));
      return;
    }
    
    setIsProcessing(true);
    setError('');
    
    try {
      // Process invoice
      const response = await invoiceService.processInvoice(file);
      
      // Check if response was successful
      if (response.status === 200) {
        // For file downloads from blob
        const contentDisposition = response.headers['content-disposition'];
        const filenameRegex = /filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/;
        const matches = filenameRegex.exec(contentDisposition);
        let filename = 'invoice_extraction_results.csv';
        if (matches != null && matches[1]) {
          filename = matches[1].replace(/['"]/g, '');
        }
        
        // Create download link for the CSV
        invoiceService.createDownloadLink(response.data, filename);
        
        // Extract invoice ID from the filename (invoice_extraction_results_ID.csv)
        const idMatch = filename.match(/invoice_extraction_results_(\d+)\.csv/);
        if (idMatch && idMatch[1]) {
          const invoiceId = idMatch[1];
          
          // Show success message
          toast.success(t('upload.success'));
          
          // Navigate to invoice details page
          navigate(`/invoices/${invoiceId}`);
        } else {
          // If we couldn't extract the ID, just show success
          toast.success(t('upload.success'));
          // Clear the form
          setFile(null);
        }
      }
    } catch (error) {
      console.error('Upload error:', error);
      setError(error.message || t('upload.error'));
      toast.error(t('upload.error'));
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="card">
      <div className="card-header">
        <h2 className="text-xl font-bold">{t('upload.title')}</h2>
      </div>
      
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          {/* Dropzone for file upload */}
          <div
            {...getRootProps()}
            className={`dropzone ${isDragActive ? 'active' : ''} ${isProcessing ? 'opacity-50 pointer-events-none' : ''}`}
          >
            <input {...getInputProps()} disabled={isProcessing} />
            
            <div className="text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mx-auto mb-4 text-muted"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="17 8 12 3 7 8"></polyline>
                <line x1="12" y1="3" x2="12" y2="15"></line>
              </svg>
              
              <p className="mb-2">{t('upload.dropzone')}</p>
              <p className="text-sm text-muted">{t('upload.formats')}</p>
              
              {file && (
                <div className="mt-4 p-2 bg-surface text-primary">
                  <p className="text-sm">{file.name} ({(file.size / 1024).toFixed(1)} KB)</p>
                </div>
              )}
            </div>
          </div>
          
          {/* Error message */}
          {error && (
            <div className="alert alert-error mt-4">
              {error}
            </div>
          )}
          
          {/* Processing state */}
          {isProcessing && (
            <div className="mt-4">
              <UploadProgress />
            </div>
          )}
          
          {/* Submit button */}
          <div className="mt-4">
            <button
              type="submit"
              className="btn btn-primary w-full"
              disabled={!file || isProcessing}
            >
              {isProcessing ? t('upload.processing') : t('upload.button')}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UploadForm;