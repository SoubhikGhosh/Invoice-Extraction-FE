import React, { useContext } from 'react';
import { LanguageContext } from '../../context/LanguageContext';

const ExtractedFields = ({ fields }) => {
  const { t } = useContext(LanguageContext);
  
  // If no fields
  if (!fields || fields.length === 0) {
    return (
      <div className="card p-4">
        <p className="text-center text-muted">{t('invoice.details.noFields')}</p>
      </div>
    );
  }
  
  // Helper function to render confidence as a colored badge
  const renderConfidence = (confidence) => {
    if (!confidence && confidence !== 0) return null;
    
    let badgeClass = 'badge-primary';
    if (confidence >= 0.8) {
      badgeClass = 'badge-success';
    } else if (confidence >= 0.6) {
      badgeClass = 'badge-info';
    } else if (confidence >= 0.4) {
      badgeClass = 'badge-warning';
    } else {
      badgeClass = 'badge-error';
    }
    
    return (
      <span className={`badge ${badgeClass}`}>
        {(confidence * 100).toFixed(0)}%
      </span>
    );
  };
  
  return (
    <div className="card">
      <div className="table-container">
        <table className="table">
          <thead>
            <tr>
              <th>{t('invoice.details.field.label')}</th>
              <th>{t('invoice.details.field.value')}</th>
              <th>{t('invoice.details.field.confidence')}</th>
            </tr>
          </thead>
          <tbody>
            {fields.map((field, index) => (
              <tr key={index}>
                <td className="font-medium">{field.label}</td>
                <td>{field.value}</td>
                <td>{renderConfidence(field.confidence)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ExtractedFields;