import {connect} from 'react-redux';
import { fetchAllUsers } from '../../actions/user_actions';
import UserIndex from './user_index';

const mapStateToProps = state => ({
    users: Object.values(state.users)
})

const mapDispatchToProps = dispatch => ({
    fetchAllUsers: () => dispatch(fetchAllUsers())
})

export default connect(mapStateToProps, mapDispatchToProps)(UserIndex)