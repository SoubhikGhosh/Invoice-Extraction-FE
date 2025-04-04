import React, { useContext } from 'react';
import { LanguageContext } from '../../context/LanguageContext';

const ExtractedTables = ({ tables }) => {
  const { t } = useContext(LanguageContext);
  
  // If no tables
  if (!tables || tables.length === 0) {
    return (
      <div className="card p-4">
        <p className="text-center text-muted">{t('invoice.details.noTables')}</p>
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
    <div className="space-y-6">
      {tables.map((table, tableIndex) => (
        <div key={tableIndex} className="card">
          <div className="card-header flex justify-between items-center">
            <h3 className="text-lg font-bold">
              {table.table_name || `Table ${tableIndex + 1}`}
            </h3>
            {table.confidence && (
              <div className="flex items-center">
                <span className="text-sm mr-2">Confidence:</span>
                {renderConfidence(table.confidence)}
              </div>
            )}
          </div>
          
          {table.reason && (
            <div className="text-sm text-muted p-2 bg-surface">
              {table.reason}
            </div>
          )}
          
          <div className="table-container">
            <table className="table">
              {/* Headers */}
              {table.headers && table.headers.length > 0 && (
                <thead>
                  <tr>
                    {table.headers.map((header, headerIndex) => (
                      <th key={headerIndex}>{header}</th>
                    ))}
                  </tr>
                </thead>
              )}
              
              {/* Rows */}
              <tbody>
                {table.rows && table.rows.length > 0 ? (
                  table.rows.map((row, rowIndex) => (
                    <tr key={rowIndex}>
                      {Array.isArray(row) ? (
                        // If row is an array
                        row.map((cell, cellIndex) => (
                          <td key={cellIndex}>{cell}</td>
                        ))
                      ) : (
                        // If row is an object
                        Object.values(row).map((cell, cellIndex) => (
                          <td key={cellIndex}>{cell}</td>
                        ))
                      )}
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={table.headers ? table.headers.length : 1} className="text-center text-muted">
                      No rows found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExtractedTables;