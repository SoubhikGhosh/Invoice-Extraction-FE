import React, { useState, useEffect, useContext } from 'react';
import { LanguageContext } from '../../context/LanguageContext';
import invoiceService from '../../services/api';
import StatsSummary from './StatsSummary';
import ProcessingTimeChart from './ProcessingTimeChart';
import StatusChart from './StatusChart';

const Dashboard = () => {
  const { t } = useContext(LanguageContext);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [stats, setStats] = useState({
    totalInvoices: 0,
    totalProcessed: 0,
    multilingualCount: 0,
    languageDistribution: {},
    processingTimes: [],
    statusCounts: {
      completed: 0,
      processing: 0,
      failed: 0
    },
    confidenceScores: {
      fields: 0,
      tables: 0
    }
  });

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        setLoading(true);
        
        // Fetch invoices data - we'll analyze it for stats
        const response = await invoiceService.getInvoices(100, 0);
        const invoices = response.invoices || [];
        
        // Calculate stats from invoices
        const totalInvoices = response.total || invoices.length;
        const multilingualCount = invoices.filter(inv => inv.is_multilingual).length;
        
        // Language distribution
        const languageDistribution = {};
        invoices.forEach(invoice => {
          const lang = invoice.original_language || 'Unknown';
          languageDistribution[lang] = (languageDistribution[lang] || 0) + 1;
        });
        
        // For more detailed stats, we need to fetch each invoice's details
        // This would be expensive, so we'll sample only recent ones for processing times
        const recentInvoices = invoices.slice(0, 10);
        const processingTimes = [];
        
        // This is a placeholder for confidence scores
        // In a real app, you would fetch invoice details to calculate these
        const confidenceScores = {
          fields: 0.85, // Placeholder
          tables: 0.78  // Placeholder
        };
        
        // Set the stats
        setStats({
          totalInvoices,
          totalProcessed: invoices.length,
          multilingualCount,
          languageDistribution,
          processingTimes,
          statusCounts: {
            completed: totalInvoices, // Assuming all are completed
            processing: 0,
            failed: 0
          },
          confidenceScores
        });
      } catch (error) {
        console.error('Error fetching dashboard data:', error);
        setError(error.message || t('error'));
      } finally {
        setLoading(false);
      }
    };
    
    fetchDashboardData();
  }, [t]);

  if (loading) {
    return (
      <div className="text-center p-4">
        <div className="spinner mx-auto mb-2"></div>
        <p>{t('loading')}</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="alert alert-error">
        {error}
      </div>
    );
  }

  return (
    <div>
      {/* Stats Summary Cards */}
      <div className="mb-6">
        <h2 className="text-xl font-bold mb-4">{t('dashboard.statsCards.title')}</h2>
        <StatsSummary stats={stats} />
      </div>
      
      {/* Charts Section */}
      <div className="grid grid-cols-2 gap-4">
        {/* Processing Time Chart */}
        <div className="chart-container">
          <h3 className="text-lg font-bold mb-2">{t('dashboard.charts.processingTime.title')}</h3>
          <ProcessingTimeChart processingTimes={stats.processingTimes} />
        </div>
        
        {/* Status Distribution Chart */}
        <div className="chart-container">
          <h3 className="text-lg font-bold mb-2">{t('dashboard.charts.languageDistribution.title')}</h3>
          <StatusChart 
            statusCounts={stats.statusCounts} 
            languageDistribution={stats.languageDistribution} 
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;