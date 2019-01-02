import { FETCH_MONTHLY_DATA } from '../actions/types';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_MONTHLY_DATA:
      return action.payload;
    default:
      return state;
  }
}
