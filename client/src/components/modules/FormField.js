import React from 'react';

const FormField = ({ input, label, meta, name, title, type }) => (
  <div>
    <label htmlFor={name} title={title}>
      {label}
    </label>
    <input {...input} id={name} type={type ? type : 'text'} />
    <p>{meta.touched && meta.error}</p>
  </div>
);

export default FormField;
