import { connect } from 'react-redux';
import { signup, clearSessionErrors } from '../../actions/session_actions';
import SignupForm from './signup_form';

const mapStatetoProps = (state, ownProps) => ({
    errors: state.errors.sessionErrors,
    formtype: 'signup',
    ownProps
})

const mapDispatchtoProps = (dispatch, ownProps) => ({
    processForm: user => dispatch(signup(user)),
    clearSessionErrors: () => dispatch(clearSessionErrors())
})

export default connect(mapStatetoProps, mapDispatchtoProps)(SignupForm);