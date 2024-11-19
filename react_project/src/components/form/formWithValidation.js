import React, { useState } from 'react';
import './form.css';

function FormWithValidation() {
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [errors, setErrors] = useState({});
  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    const errors = {};
    if (!formData.name) {
      errors.name = 'Name is required';
    } else if (/\d/.test(formData.name)) {
      errors.name = 'Name should not contain numbers';
    }
    if (!formData.email) {
      errors.email = 'Email is required';
    }
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      setSubmittedData(formData);
      setFormData({ name: '', email: '' });
      setErrors({});
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div>
      <h1 className="navbar-align">Counter App</h1>
      <p className="content-below-heading">This is the content of the counter app</p>
      <div className="login-container">
        <div className="login-card">
          <h2 className="login-title">Simple Form</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`form-input ${errors.name ? 'input-error' : ''}`}
              />
              {errors.name && <span className="error-text">{errors.name}</span>}
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`form-input ${errors.email ? 'input-error' : ''}`}
              />
              {errors.email && <span className="error-text">{errors.email}</span>}
            </div>
            <button type="submit" className="submit-button">
              Submit
            </button>
          </form>
          {submittedData && (
            <div className="submitted-data-card">
              <h3>Submitted Data</h3>
              <p>
                <strong>Name </strong> {submittedData.name}
              </p>
              <p>
                <strong>Email </strong> {submittedData.email}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default FormWithValidation;
