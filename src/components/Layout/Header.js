import React, { useState, useEffect, useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ThemeContext } from '../../context/ThemeContext';
import { LanguageContext } from '../../context/LanguageContext';
import ThemeToggle from './ThemeToggle';
import LanguageSelector from './LanguageSelector';
import invoiceService from '../../services/api';

const Header = () => {
  const { t } = useContext(LanguageContext);
  const [apiStatus, setApiStatus] = useState('loading');

  // Check API health status on component mount
  useEffect(() => {
    const checkHealth = async () => {
      try {
        const healthData = await invoiceService.healthCheck();
        setApiStatus(healthData.status === 'healthy' ? 'healthy' : 'unhealthy');
      } catch (error) {
        setApiStatus('unhealthy');
      }
    };

    checkHealth();
    
    // Set interval to check API health periodically
    const interval = setInterval(checkHealth, 60000); // Check every minute
    
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="header">
      <div className="container">
        <div className="flex justify-between items-center">
        <Link to="/" className="text-xl font-bold app-title">
          {t('app.title')}
        </Link>
          
          <nav>
            <ul className="nav-list">
              <li>
                <NavLink 
                  to="/" 
                  className={({ isActive }) => 
                    isActive ? 'nav-link active' : 'nav-link'
                  }
                >
                  {t('nav.home')}
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/dashboard" 
                  className={({ isActive }) => 
                    isActive ? 'nav-link active' : 'nav-link'
                  }
                >
                  {t('nav.dashboard')}
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/invoices" 
                  className={({ isActive }) => 
                    isActive ? 'nav-link active' : 'nav-link'
                  }
                >
                  {t('nav.invoices')}
                </NavLink>
              </li>
            </ul>
          </nav>
          
          <div className="flex items-center gap-2">
            {/* API Status Indicator */}
            <div className="flex items-center mr-4">
              <span className="text-sm mr-2">{t('health.status')}:</span>
              <span className={`badge ${apiStatus === 'healthy' 
                ? 'badge-success' 
                : apiStatus === 'loading' 
                  ? 'badge-warning' 
                  : 'badge-error'}`}
              >
                {t(`health.${apiStatus}`)}
              </span>
            </div>
            
            {/* Theme Toggle */}
            <ThemeToggle />
            
            {/* Language Selector */}
            <LanguageSelector />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;