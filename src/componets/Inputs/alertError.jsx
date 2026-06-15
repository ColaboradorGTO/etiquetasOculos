import React from 'react';

export const AlertError = ({ error, onClose, fieldName }) => {
  if (!error) return null;

  return (
    <div className="alert alert-danger alert-dismissible h6 fade show">
      <button 
        type="button" 
        className="close" 
        aria-label="Close"
        onClick={() => onClose(fieldName)}
      >
        <span aria-hidden="true">&times;</span>
      </button>
      <span role="alert">
        <strong>Atenção!</strong> {error.message}
      </span>
    </div>
  );
};
