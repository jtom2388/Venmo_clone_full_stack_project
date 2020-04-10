import { connect } from 'react-redux';
import { fetchAllTransactions } from '../../actions/transactions_actions';
import { fetchAllUsers } from '../../actions/user_actions';
import { logout } from '../../actions/session_actions';
import Profile from './profile';

const mapStatetoProps = state => ({
    currentUser: state.entities.users[state.session.id],
    transactions: Object.values(state.entities.transactions)
});

const mapDispatchtoProps = dispatch => ({
    logout: () => dispatch(logout()),
    fetchAllUsers: () => dispatch(fetchAllUsers()),
    fetchAllTransactions: () => dispatch(fetchAllTransactions)
});

export default connect(mapStatetoProps, mapDispatchtoProps)(Profile);