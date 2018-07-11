//change this file to change the number of inputs, or edit them.
export default [
  { label: 'Customer Name', type: 'text', name: 'customer', noValueError: 'You must provide a customer name.' },
  { label: 'Phone', type: 'text', name: 'phone', noValueError: 'You must provide a phone number.' },
  { label: 'Date', name: 'date',  type: "date", onChange: function(e, value) {}, noValueError: 'You must provide a date' },
  { label: 'Time', name: 'time',  type: "time", onChange: function(e, value) {}, noValueError: 'You must provide a time' },
  { label: 'Employee Name', type: 'text', name: 'employee', noValueError: 'You must provide an employee' },
  { label: 'Additional Notes', type: 'text', name: 'notes' }
];
