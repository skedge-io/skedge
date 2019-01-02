import axios from 'axios';
import { FETCH_USER, FETCH_APPOINTMENTS, CHANGE_DEFAULT_VIEW, FETCH_BUSINESS } from './types';
import { push } from 'react-router-redux'


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
  const res = await axios.post('/api/appointment/new', values);

  history.push('/dashboard');
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const editAppointment = (values, history) => async dispatch => {

  let theAptId = window.location.href.split('').reverse().join('');
  const aptI = theAptId.indexOf('/');

  theAptId = theAptId.substring(0, aptI);
  theAptId = theAptId.split('').reverse().join('');

  const axiosUrl = '/api/appointment/' + theAptId;

  const res = await axios.post('/api/appointment/edit/' + theAptId, values);

  history.push('/dashboard');
  dispatch({ type: FETCH_USER, payload: res.data });
};


export const fetchAppointments = () => async dispatch => {
  const res = await axios.get('/api/appointments/');

  dispatch({ type: FETCH_APPOINTMENTS, payload: res.data })
}

export const changeDefaultView = (view) => {
  return {
    type: CHANGE_DEFAULT_VIEW,
    payload: view
  }
}

export const fetchBusiness = () => async dispatch => {
  const res = await axios.get('/api/current_business')

  dispatch({ type: FETCH_BUSINESS, payload: res.data });
};
