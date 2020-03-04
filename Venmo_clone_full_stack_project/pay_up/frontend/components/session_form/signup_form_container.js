import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';
import SignupForm from './session_form';

const mapStatetoProps = (state, ownProps) => ({
    errors: state.errors.session,
    formtype: 'signup',
    ownProps
})

const mapDispatchtoProps = (dispatch, ownProps) => ({
    processForm: user => dispatch(signup(user))
})

export default connect(mapStatetoProps, mapDispatchtoProps)(SignupForm);