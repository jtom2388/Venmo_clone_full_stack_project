import {connect} from 'react-redux';
import { createRequest, fetchAllRequests } from '../../actions/request_action';
import { openModal, closeModal } from '../../actions/modal_actions'
import RequestForm from './request_form';

const mapStateToProps = state => ({
    request: {
        amount: '',
        body: '',
        requestor_id: '',
        requestee_id: ''
    },
    username: state.ui.modalUserReducer.username,
    currentUserId: state.session.id,
    users: Object.values(state.entities.user)
})

const mapDispatchToProps = dispatch => ({
    createRequest: request => dispatch(createRequest(request)),
    closeModal: () => dispatch(closeModal()),
    fetchAllRequests: () => dispatch(fetchAllRequests())
})

export default connect(mapStateToProps, mapDispatchToProps)(RequestForm);