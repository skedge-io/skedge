// AppointmentField contains logic to render a single
// label and text input
import React from 'react';
import { Input } from 'react-materialize'

                  //same as props.input
export default ({ onChange, input, type, label, meta: { error, touched } }) => {
  return (
    <div>
      <label>{label}</label>
      <Input onChange={onChange} type={type} {...input} style={{ marginBottom: '5px' }} />
      <div className="red-text" style={{ marginBottom: '20px' }}>
        {touched && error}
      </div>
    </div>
  );
};
