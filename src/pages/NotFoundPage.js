import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { LanguageContext } from '../context/LanguageContext';

const NotFoundPage = () => {
  const { t } = useContext(LanguageContext);

  return (
    <div className="text-center p-10">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-xl mb-6">Page not found</p>
      <Link to="/" className="btn btn-primary">
        Return to Home
      </Link>
    </div>
  );
};

export default NotFoundPage;