import { ActionReducer, Action } from '@ngrx/store';
import { TEST } from '../constants'

const initialState = {
  text: '',
  loading: false
}

export const bookingReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case TEST:
      return Object.assign({}, state, {
        loading: false,
        text: 'test'
      })
    default:
      return state;
  }
}