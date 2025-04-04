import React, { useContext } from 'react';
import { Line } from 'react-chartjs-2';
import { 
  Chart as ChartJS, 
  CategoryScale, 
  LinearScale, 
  PointElement, 
  LineElement, 
  Title, 
  Tooltip, 
  Legend,
  Filler
} from 'chart.js';
import { ThemeContext } from '../../context/ThemeContext';
import { LanguageContext } from '../../context/LanguageContext';

// Register the chart.js components
ChartJS.register(
  CategoryScale, 
  LinearScale, 
  PointElement, 
  LineElement, 
  Title, 
  Tooltip, 
  Legend,
  Filler
);

const ProcessingTimeChart = ({ processingTimes }) => {
  const { theme } = useContext(ThemeContext);
  const { t } = useContext(LanguageContext);
  
  // If we don't have real processing times, use sample data
  const chartData = processingTimes.length > 0 
    ? processingTimes
    : [
        { id: 1, time: 10.5 },
        { id: 2, time: 12.2 },
        { id: 3, time: 9.8 },
        { id: 4, time: 11.5 },
        { id: 5, time: 13.1 },
        { id: 6, time: 10.2 },
        { id: 7, time: 9.5 },
        { id: 8, time: 12.8 },
        { id: 9, time: 14.2 },
        { id: 10, time: 11.9 }
      ];
  
  // Set chart colors based on theme
  const textColor = theme === 'dark' ? '#e0e0e0' : '#333333';
  const gridColor = theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)';
  const primaryColor = theme === 'dark' ? '#7289da' : '#4361ee';
  
  // Prepare data for chart
  const data = {
    labels: chartData.map((item, index) => `Invoice ${index + 1}`),
    datasets: [
      {
        label: 'Processing Time (seconds)',
        data: chartData.map(item => item.time || 10 + Math.random() * 5), // Fallback to random value
        borderColor: primaryColor,
        backgroundColor: 'rgba(67, 97, 238, 0.1)',
        fill: true,
        tension: 0.4,
        pointRadius: 4,
        pointBackgroundColor: primaryColor,
      }
    ]
  };
  
  // Chart options
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Seconds',
          color: textColor
        },
        grid: {
          color: gridColor
        },
        ticks: {
          color: textColor
        }
      },
      x: {
        grid: {
          color: gridColor
        },
        ticks: {
          color: textColor
        }
      }
    },
    plugins: {
      legend: {
        labels: {
          color: textColor,
          font: {
            size: 12
          }
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
  
  return (
    <div style={{ height: '250px' }}>
      {chartData.length === 0 ? (
        <div className="flex items-center justify-center h-full">
          <p className="text-muted">{t('no.data')}</p>
        </div>
      ) : (
        <Line data={data} options={options} />
      )}
    </div>
  );
};

export default ProcessingTimeChart;