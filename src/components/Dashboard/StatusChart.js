import React, { useContext } from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { ThemeContext } from '../../context/ThemeContext';
import { LanguageContext } from '../../context/LanguageContext';

// Register the chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

const StatusChart = ({ statusCounts, languageDistribution }) => {
  const { theme } = useContext(ThemeContext);
  const { t } = useContext(LanguageContext);
  
  // Determine what to display - status or language distribution
  // If we have language data, show that, otherwise show status
  const showLanguageDistribution = Object.keys(languageDistribution).length > 0;
  
  // Set chart colors based on theme
  const textColor = theme === 'dark' ? '#e0e0e0' : '#333333';
  
  // Define colors for language distribution
  const languageColors = [
    '#4361ee', '#3a0ca3', '#7209b7', '#f72585', '#4cc9f0',
    '#4895ef', '#560bad', '#f15bb5', '#fee440', '#00bbf9'
  ];
  
  // Define status colors
  const statusColors = {
    completed: '#4caf50',
    processing: '#2196f3',
    failed: '#f44336'
  };
  
  // Prepare data for language distribution
  const languageData = {
    labels: Object.keys(languageDistribution).length > 0 
      ? Object.keys(languageDistribution) 
      : ['English', 'Spanish', 'French', 'German'],
    datasets: [
      {
        data: Object.keys(languageDistribution).length > 0 
          ? Object.values(languageDistribution) 
          : [60, 20, 15, 5],
        backgroundColor: languageColors.slice(0, Object.keys(languageDistribution).length || 4),
        borderWidth: 0
      }
    ]
  };
  
  // Prepare data for status chart
  const statusData = {
    labels: Object.keys(statusCounts).map(key => t(`status.${key}`) || key),
    datasets: [
      {
        data: Object.values(statusCounts),
        backgroundColor: Object.keys(statusCounts).map(key => statusColors[key] || '#999999'),
        borderWidth: 0
      }
    ]
  };
  
  // Chart options
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          color: textColor,
          font: {
            size: 12
          },
          padding: 20
        }
      },
      tooltip: {
        backgroundColor: theme === 'dark' ? '#424242' : 'rgba(255, 255, 255, 0.9)',
        titleColor: theme === 'dark' ? '#ffffff' : '#333333',
        bodyColor: theme === 'dark' ? '#e0e0e0' : '#666666',
        borderColor: theme === 'dark' ? '#666666' : '#cccccc',
        borderWidth: 1
      }
    }
  };
  
  // Choose which data to display
  const chartToShow = showLanguageDistribution ? languageData : statusData;
  
  return (
    <div style={{ height: '250px' }}>
      {(showLanguageDistribution && Object.keys(languageDistribution).length === 0) ||
       (!showLanguageDistribution && Object.values(statusCounts).every(val => val === 0)) ? (
        <div className="flex items-center justify-center h-full">
          <p className="text-muted">{t('no.data')}</p>
        </div>
      ) : (
        <Pie data={chartToShow} options={options} />
      )}
    </div>
  );
};

export default StatusChart;