import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import LoginForm from './login_form';

const mapStatetoProps = (state, ownProps) => ({
    errors: state.errors.session,
    formtype: 'login',
    ownProps
})

const mapDispatchtoProps = (dispatch, ownProps) => ({
    processForm: user => dispatch(login(user))
})

export default connect(mapStatetoProps, mapDispatchtoProps)(LoginForm);