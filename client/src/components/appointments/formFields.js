//change this file to change the number of inputs, or edit them.
export default [
  { label: 'Client Name', type: 'text', name: 'client', noValueError: 'You must provide a client name.' },
  { label: 'Employee Name', type: 'text', name: 'employee', noValueError: 'You must provide an employee' },
  { label: 'Client Phone Number', type: 'text', name: 'phone', noValueError: 'You must provide a phone number.' },
  { label: 'Date', name: 'date',  type: "date", onChange: function(e, value) {}, noValueError: 'You must provide a date' },
  { label: 'Start Time', name: 'startTime',  type: "time", onChange: function(e, value) {}, noValueError: 'You must provide a time' },
  { label: 'End Time', name: 'endTime',  type: "time", onChange: function(e, value) {}, noValueError: 'You must provide a time' },
  { label: 'Additional Notes', type: 'text', name: 'desc' }
];
