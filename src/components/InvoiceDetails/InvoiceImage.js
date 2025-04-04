import React, { useState, useEffect, useContext } from 'react';
import { LanguageContext } from '../../context/LanguageContext';
import axios from 'axios';

// This component displays the original invoice image
const InvoiceImage = ({ invoiceId, filename }) => {
  const { t } = useContext(LanguageContext);
  const [imageSrc, setImageSrc] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  
  // Determine if file is a PDF based on filename
  const isPdf = filename.toLowerCase().endsWith('.pdf');
  
  useEffect(() => {
    const fetchInvoiceImage = async () => {
      try {
        setLoading(true);
        
        // We need to create a custom endpoint to get the file data directly
        const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:8000';
        const response = await axios.get(`${API_BASE_URL}/invoices/${invoiceId}/file`, {
          responseType: 'arraybuffer'
        });
        
        // Convert the binary data to base64
        const base64 = btoa(
          new Uint8Array(response.data)
            .reduce((data, byte) => data + String.fromCharCode(byte), '')
        );
        
        // Set the image src based on file type
        if (isPdf) {
          // For PDFs, we need to use a PDF viewer or convert to image on the server
          setImageSrc(`data:application/pdf;base64,${base64}`);
        } else {
          // For images, we can display directly
          const mimeType = determineMimeType(filename);
          setImageSrc(`data:${mimeType};base64,${base64}`);
        }
      } catch (error) {
        console.error('Error fetching invoice image:', error);
        setError(error.message || t('error'));
      } finally {
        setLoading(false);
      }
    };
    
    // Attempt to fetch the image
    if (invoiceId) {
      fetchInvoiceImage();
    }
  }, [invoiceId, filename, isPdf, t]);
  
  // Helper to determine mime type from filename
  const determineMimeType = (filename) => {
    const ext = filename.split('.').pop().toLowerCase();
    switch (ext) {
      case 'jpg':
      case 'jpeg':
        return 'image/jpeg';
      case 'png':
        return 'image/png';
      case 'tiff':
      case 'tif':
        return 'image/tiff';
      default:
        return 'application/octet-stream';
    }
  };
  
  // Loading state
  if (loading) {
    return (
      <div className="card p-4 text-center">
        <div className="spinner mx-auto mb-2"></div>
        <p>{t('loading')}</p>
      </div>
    );
  }
  
  // Error state
  if (error) {
    return (
      <div className="card p-4">
        <div className="alert alert-error">
          <p>Unable to load invoice image</p>
          <p className="text-sm">{error}</p>
        </div>
      </div>
    );
  }
  
  // If we don't have an image source
  if (!imageSrc) {
    return (
      <div className="card p-4 text-center">
        <p>Preview not available</p>
      </div>
    );
  }

  return (
    <div className="card p-2 invoice-image-container">
      {isPdf ? (
        <div className="text-center">
          <p className="mb-2">PDF Document</p>
          <iframe
            src={imageSrc}
            title="PDF Document"
            width="100%"
            height="600px"
            className="border-0"
          />
        </div>
      ) : (
        <div className="image-wrapper">
          <img
            src={imageSrc}
            alt="Invoice"
            className="invoice-image"
          />
        </div>
      )}
    </div>
  );
};

export default InvoiceImage;