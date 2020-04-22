import { connect } from 'react-redux';
import { fetchAllTransactions } from '../../actions/transactions_actions';
import { fetchAllUsers, fetchUser, updateImage } from '../../actions/user_actions';
import { logout } from '../../actions/session_actions';
import Profile from './profile';

const mapStatetoProps = state => ({
    currentUser: state.entities.users[state.session.id],
    transactions: Object.values(state.entities.transactions),
    users: Object.values(state.entities.user),
    transactionErrors: state.errors.transactionErrors
});

const mapDispatchtoProps = dispatch => ({
    logout: () => dispatch(logout()),
    fetchAllUsers: () => dispatch(fetchAllUsers()),
    fetchAllTransactions: () => dispatch(fetchAllTransactions()),
    fetchUser: user => dispatch(fetchUser(user)),
    updateImage: user => dispatch(updateImage(user))
});

export default connect(mapStatetoProps, mapDispatchtoProps)(Profile);