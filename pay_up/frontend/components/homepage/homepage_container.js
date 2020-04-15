import { connect } from "react-redux"
import { login, logout, signup } from '../../actions/session_actions';
import Homepage from './homepage';
import {fetchAllUsers, updateImage, fetchUser} from '../../actions/user_actions';
import {fetchAllTransactions} from '../../actions/transactions_actions'

const mapStatetoProps = state => { 
    return ({
    currentUser: state.entities.users[state.session.id],
    // users: Object.values(state.entities.user),
    transactions: Object.values(state.entities.transactions)
})};

const mapDispatchtoProps = dispatch => ({
    login: user => dispatch(login(user)),
    signup: user => dispatch(signup(user)),
    logout: () => dispatch(logout()),
    fetchAllUsers: () => dispatch(fetchAllUsers()),
    fetchAllTransactions: () => dispatch(fetchAllTransactions()),
    updateImage: user => dispatch(updateImage(user)),
    fetchUser: user => dispatch(fetchUser(user))
})

export default connect(mapStatetoProps, mapDispatchtoProps)(Homepage);