import axios from 'axios';

// Base URL from environment variable with fallback
const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:8000';

// Create axios instance with base URL
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

// API service for invoice OCR operations
const invoiceService = {
  // Process invoice (upload and extract fields)
  processInvoice: async (file) => {
    const formData = new FormData();
    formData.append('file', file);
    
    const response = await api.post('/process-invoice/', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      responseType: 'blob', // Important for file download
    });
    
    return response;
  },
  
  // Get list of invoices with pagination
  getInvoices: async (limit = 50, offset = 0) => {
    const response = await api.get(`/invoices/?limit=${limit}&offset=${offset}`);
    return response.data;
  },
  
  // Get details for a specific invoice
  getInvoiceDetails: async (invoiceId) => {
    const response = await api.get(`/invoices/${invoiceId}`);
    return response.data;
  },
  
  // Get CSV for a specific invoice
  getInvoiceCSV: async (invoiceId) => {
    const response = await api.get(`/invoices/${invoiceId}/csv`, {
      responseType: 'blob'
    });
    return response;
  },
  
  // Check API health
  healthCheck: async () => {
    try {
      const response = await api.get('/health');
      return response.data;
    } catch (error) {
      return { status: 'unhealthy', error: error.message };
    }
  },
  
  // Helper function to create download URL for blobs
  createDownloadLink: (blob, filename) => {
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', filename);
    document.body.appendChild(link);
    link.click();
    link.remove();
    window.URL.revokeObjectURL(url);
  }
};

export default invoiceService;