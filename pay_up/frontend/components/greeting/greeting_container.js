import { connect } from "react-redux"
import { login, logout, signup } from '../../actions/session_actions';
import Greeting from './greeting.jsx';

const mapStatetoProps = state => { 
    return ({
    currentUser: state.entities.users[state.session.id]
})};

const mapDispatchtoProps = dispatch => ({
    login: user => dispatch(login(user)),
    signup: user => dispatch(signup(user)),
    logout: () => dispatch(logout())
})

export default connect(mapStatetoProps, mapDispatchtoProps)(Greeting);