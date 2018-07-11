// AppointmentField contains logic to render a single
// label and text input
import React from 'react';
import { Input } from 'react-materialize'

                  //same as props.input
export default ({ onChange, input, type, label, meta: { error, touched } }) => {
  return (
    <div>
      <label>{label}</label>
      <Input onChange={onChange} type={type} {...input} style={{ marginBottom: '0px', height: '1rem' }} />
      <div className="red-text" style={{ marginBottom: '0px' }}>
        {touched && error}
      </div>
    </div>
  );
};
