import * as UserAPIUtil from '../util/user_util';

export const RECEIVE_ALL_USERS = 'RECEIVE_ALL_USERS';
export const RECEIVE_UPDATED_USER = 'RECEIVE_UPDATED_USER';

const receiveAllUsers = users => ({
    type: RECEIVE_ALL_USERS,
    users
})

const receiveUpdatedUser = user => ({
    type: RECEIVE_UPDATED_USER,
    user
})

export const fetchAllUsers = () => dispatch => (
    UserAPIUtil.fetchAllUsers().then(
        users => dispatch(receiveAllUsers(users))
    )
)

export const fetchUser = user => dispatch => (
    UserAPIUtil.updatePayer(user).then(
        user => dispatch(receiveUpdatedUser(user))
    )
)

export const updateRecipient = user => dispatch => (
    UserAPIUtil.updateRecipient(user).then(
        user => dispatch(receiveUpdatedUser(user))
    )
)