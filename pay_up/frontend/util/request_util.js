export const fetchRequests = () => {
    return $.ajax({
        url:`/api/requests`,
        method: 'GET'
    })
}

export const createRequest = request => {
    return $.ajax({
        url:`/api/requests`,
        method: 'POST',
        date: { request }
    })
}

export const deleteRequest = requestId => {
    return $.ajax({
        url:`/api/requests/${requestId}`,
        method: 'DELETE'
    })
}