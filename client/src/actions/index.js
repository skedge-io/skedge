import axios from 'axios';
import { FETCH_USER, FETCH_APPOINTMENTS } from './types';

export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/current_user')

  dispatch({ type: FETCH_USER, payload: res.data });
};

export const submitAccount = (values, history) => async dispatch => {
  const res = await axios.post('/api/user/new', values);

  history.push('/dashboard');
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const submitAppointment = (values, history) => async dispatch => {
  // const res = await axios.post('/api/appointment/new', values);
  const res = await axios.post('/api/appointment/new', values)
  .then(function (response) {
    //Redirect to /dashboard here
    window.location = '/dashboard';
    history.push('/dashboard');
    dispatch({ type: FETCH_USER, payload: response.data });
  })
  .catch(function (error) {
    // Couldnt Create new Appointment
    console.log(error);
  });

};


export const fetchAppointments = () => async dispatch => {
  const res = await axios.get('/api/appointments/');

  dispatch({ type: FETCH_APPOINTMENTS, payload: res.data })
}
