import React, { useContext } from 'react';
import { LanguageContext } from '../../context/LanguageContext';

const Footer = () => {
  const { t } = useContext(LanguageContext);
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <p className="text-muted">
          {t('app.footer')} {currentYear}
        </p>
      </div>
    </footer>
  );
};

export default Footer;