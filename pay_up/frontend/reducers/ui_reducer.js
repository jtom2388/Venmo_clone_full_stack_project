import { combineReducers } from 'redux';
import modalUserReducer from './modal_user_reducer';

import modal from './modal_reducer';

export default combineReducers({
  modal,
  modalUserReducer,
});