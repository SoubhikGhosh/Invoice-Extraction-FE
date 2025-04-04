import React, { useContext } from 'react';
import { LanguageContext } from '../../context/LanguageContext';

const StatsSummary = ({ stats }) => {
  const { t } = useContext(LanguageContext);
  
  // Calculate average processing time (placeholder)
  const avgProcessingTime = stats.processingTimes.length > 0 
    ? stats.processingTimes.reduce((sum, time) => sum + time, 0) / stats.processingTimes.length 
    : 0;
    
  // Calculate average fields per invoice (placeholder)
  const avgFieldsPerInvoice = 12; // Hardcoded for demo
  
  // Format processing time in seconds
  const formatProcessingTime = (seconds) => {
    if (seconds < 60) {
      return `${seconds.toFixed(1)}s`;
    }
    return `${Math.floor(seconds / 60)}m ${Math.round(seconds % 60)}s`;
  };
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {/* Total Invoices Card */}
      <div className="stats-card">
        <span className="stats-card-label">{t('dashboard.statsCards.total')}</span>
        <span className="stats-card-value">{stats.totalInvoices}</span>
      </div>
      
      {/* Multilingual Invoices Card */}
      <div className="stats-card">
        <span className="stats-card-label">{t('dashboard.statsCards.multilingual')}</span>
        <span className="stats-card-value">{stats.multilingualCount}</span>
        <span className="text-sm text-muted">
          {stats.totalInvoices > 0 
            ? `${Math.round((stats.multilingualCount / stats.totalInvoices) * 100)}%` 
            : '0%'}
        </span>
      </div>
      
      {/* Average Fields Card */}
      <div className="stats-card">
        <span className="stats-card-label">{t('dashboard.statsCards.avgFields')}</span>
        <span className="stats-card-value">{avgFieldsPerInvoice}</span>
      </div>
      
      {/* Average Processing Time Card */}
      <div className="stats-card">
        <span className="stats-card-label">{t('dashboard.statsCards.processingTime')}</span>
        <span className="stats-card-value">{formatProcessingTime(avgProcessingTime || 12.5)}</span>
        <span className="text-sm text-muted">per invoice</span>
      </div>
    </div>
  );
};

export default StatsSummary;