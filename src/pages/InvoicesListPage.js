import React, { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';
import InvoicesList from '../components/InvoicesList/InvoicesList';

const InvoicesListPage = () => {
  const { t } = useContext(LanguageContext);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">{t('invoices.title')}</h1>
      <InvoicesList />
    </div>
  );
};

export default InvoicesListPage;