import { connect } from 'react-redux';
import { login, clearSessionErrors } from '../../actions/session_actions';
import LoginForm from './login_form';

const mapStatetoProps = (state, ownProps) => ({
    errors: state.errors.sessionErrors,
    formtype: 'login',
    ownProps
})

const mapDispatchtoProps = (dispatch, ownProps) => ({
    processForm: user => dispatch(login(user)),
    clearSessionErrors: () => dispatch(clearSessionErrors())
})

export default connect(mapStatetoProps, mapDispatchtoProps)(LoginForm);