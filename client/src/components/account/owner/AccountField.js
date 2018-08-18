// AccountField contains logic to render a single
// label and text input
import React from 'react';
                  //same as props.input
export default ({ input, value, type, label, checked, meta: { error, touched } }) => {
  return (
    <div>
      <label>{label}</label>
      <input {...input} type={type} defaultValue={value} checked={checked} style={{ marginBottom: '5px' }} />
      <div className="red-text" style={{ marginBottom: '20px' }}>
        {touched && error}
      </div>
    </div>
  );
};
