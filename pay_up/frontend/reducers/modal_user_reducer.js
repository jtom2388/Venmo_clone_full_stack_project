import { OPEN_MODAL, CLOSE_MODAL } from '../actions/modal_actions';

export default function modalUserReducer(state = null, action) {
  switch (action.type) {
    case OPEN_MODAL:
        
      return {username: action.username};
    case CLOSE_MODAL:
      return null;
    default:
      return state;
  }
}