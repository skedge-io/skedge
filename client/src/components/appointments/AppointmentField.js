// AppointmentField contains logic to render a single
// label and text input
import React from 'react';
import { Input } from 'react-materialize'

                  //same as props.input
export default ({ onChange, name, defaultValue, input, type, label, meta: { error, touched } }) => {
  return (
    <div>
      <Input placeholder={label} defaultValue={defaultValue} id={name} onChange={onChange} type={type} {...input} style={{ marginBottom: '1rem', height: '2rem', paddingTop: '1rem' }} />
      <div className="red-text" style={{ marginBottom: '0px' }}>
        {touched && error}
      </div>
    </div>
  );
};
