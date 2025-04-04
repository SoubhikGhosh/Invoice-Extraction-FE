import React, { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';
import Dashboard from '../components/Dashboard/Dashboard';

const DashboardPage = () => {
  const { t } = useContext(LanguageContext);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">{t('dashboard.title')}</h1>
      <Dashboard />
    </div>
  );
};

export default DashboardPage;