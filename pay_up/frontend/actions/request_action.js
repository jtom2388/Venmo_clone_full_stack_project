import * as RequestAPIUtil from '../util/request_util';

export const RECEIVE_REQUESTS = 'RECEIVE_REQUESTS';
export const RECEIVE_REQUEST = 'RECEIVE_REQUEST';
export const REMOVE_REQUEST = 'REMOVE_REQUEST';

const receiveRequests = requests => ({
    type: RECEIVE_REQUESTS,
    requests
})

const receiveRequest = request => ({
    type: RECEIVE_REQUEST,
    request
})

const removeRequest = requestId => ({
    type: REMOVE_REQUEST,
    requestId
})

export const fetchAllRequests = () => dispatch => (
    RequestAPIUtil.fetchRequests().then(
        requests => dispatch(receiveRequests(requests))
    )
)

export const createRequest = request => dispatch => (
    RequestAPIUtil.createRequest(request).then(
        request => dispatch(receiveRequest(request))
    )
)

export const deleteRequest = requestId => {
    RequestAPIUtil.deleteRequest(requestId).then(
        () => dispatch(removeRequest(requestId))
    )
}