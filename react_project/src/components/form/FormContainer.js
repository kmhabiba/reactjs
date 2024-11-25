import React, { useState } from 'react';
import FormSubmit from './FormSubmit';

function FormContainer() {
  const [submittedData, setSubmittedData] = useState(null);

  const handleFormSubmit = (data) => {
    setSubmittedData(data);
  };

  return (
    <div>
      <h2>Form Submission</h2>
      
      <FormSubmit onFormSubmit={handleFormSubmit} />

      {submittedData && (
        <div style={{ marginTop: '20px' }}>
          <h3>Submitted Data</h3>
          <p> Name: {submittedData.name} </p>
          <p> Email: {submittedData.email} </p>
        </div>
      )}
    </div>
  );
}

export default FormContainer;
