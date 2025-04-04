import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import invoiceService from '../../services/api';
import { LanguageContext } from '../../context/LanguageContext';

const InvoicesList = () => {
  const { t } = useContext(LanguageContext);
  
  const [invoices, setInvoices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [pagination, setPagination] = useState({
    total: 0,
    limit: 10,
    offset: 0
  });

  // Fetch invoices on mount and when pagination changes
  useEffect(() => {
    const fetchInvoices = async () => {
      try {
        setLoading(true);
        const response = await invoiceService.getInvoices(
          pagination.limit,
          pagination.offset
        );
        
        setInvoices(response.invoices || []);
        setPagination({
          ...pagination,
          total: response.total || 0
        });
      } catch (error) {
        console.error('Error fetching invoices:', error);
        setError(error.message || t('error'));
        toast.error(t('error'));
      } finally {
        setLoading(false);
      }
    };

    fetchInvoices();
  }, [pagination.limit, pagination.offset, t]);

  // Format date
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleString();
  };

  // Handle download CSV
  const handleDownloadCSV = async (invoiceId, filename) => {
    try {
      const response = await invoiceService.getInvoiceCSV(invoiceId);
      invoiceService.createDownloadLink(
        response.data,
        `invoice_${invoiceId}_export.csv`
      );
    } catch (error) {
      console.error('Error downloading CSV:', error);
      toast.error(t('error'));
    }
  };

  // Pagination handlers
  const handleNextPage = () => {
    if (pagination.offset + pagination.limit < pagination.total) {
      setPagination({
        ...pagination,
        offset: pagination.offset + pagination.limit
      });
    }
  };

  const handlePrevPage = () => {
    if (pagination.offset - pagination.limit >= 0) {
      setPagination({
        ...pagination,
        offset: pagination.offset - pagination.limit
      });
    }
  };

  // Loading state
  if (loading && invoices.length === 0) {
    return (
      <div className="text-center p-4">
        <div className="spinner mx-auto mb-2"></div>
        <p>{t('loading')}</p>
      </div>
    );
  }

  // Error state
  if (error && !loading && invoices.length === 0) {
    return (
      <div className="alert alert-error">
        {error}
      </div>
    );
  }

  // Empty state
  if (!loading && invoices.length === 0) {
    return (
      <div className="text-center p-4">
        <p>{t('invoices.noData')}</p>
      </div>
    );
  }

  return (
    <div>
      <div className="table-container">
        <table className="table">
          <thead>
            <tr>
              <th>{t('invoices.table.id')}</th>
              <th>{t('invoices.table.filename')}</th>
              <th>{t('invoices.table.date')}</th>
              <th>{t('invoices.table.language')}</th>
              <th>{t('invoices.table.actions')}</th>
            </tr>
          </thead>
          <tbody>
            {invoices.map((invoice) => (
              <tr key={invoice.id}>
                <td>{invoice.id}</td>
                <td>{invoice.filename}</td>
                <td>{formatDate(invoice.processing_timestamp)}</td>
                <td>
                  {invoice.original_language || 'English'}
                  {invoice.is_multilingual && (
                    <span className="badge badge-info ml-2">Multi</span>
                  )}
                </td>
                <td>
                  <div className="flex gap-2">
                    <Link
                      to={`/invoices/${invoice.id}`}
                      className="btn btn-primary btn-sm"
                    >
                      {t('invoices.action.view')}
                    </Link>
                    <button
                      onClick={() => handleDownloadCSV(invoice.id, invoice.filename)}
                      className="btn btn-secondary btn-sm"
                    >
                      {t('invoices.action.download')}
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination controls */}
      {pagination.total > pagination.limit && (
        <div className="flex justify-between items-center mt-4">
          <button
            className="btn btn-secondary btn-sm"
            onClick={handlePrevPage}
            disabled={pagination.offset === 0}
          >
            {t('pagination.previous')}
          </button>
          
          <span className="text-sm">
            {pagination.offset + 1} - {Math.min(pagination.offset + pagination.limit, pagination.total)} of {pagination.total}
          </span>
          
          <button
            className="btn btn-secondary btn-sm"
            onClick={handleNextPage}
            disabled={pagination.offset + pagination.limit >= pagination.total}
          >
            {t('pagination.next')}
          </button>
        </div>
      )}
    </div>
  );
};

export default InvoicesList;