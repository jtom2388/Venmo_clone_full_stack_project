import {combineReducers} from 'redux';
import sessionsErrorsReducer from './sessions_errors_reducer'

const errorsReducer = combineReducers({
    session: sessionsErrorsReducer
});

export default errorsReducer;