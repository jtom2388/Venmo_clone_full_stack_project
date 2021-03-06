import { connect } from 'react-redux';
import { fetchAllRequests } from '../../actions/request_action';
import RequestIndex from './request_index';

const mapStateToProps = state => ({
    requests: Object.values(state.entities.requests)
})

const mapDispatchToProps = dispatch => ({
    fetchAllRequests: () => dispatch(fetchAllRequests())
})

export default connect(mapStateToProps, mapDispatchToProps)(RequestIndex);