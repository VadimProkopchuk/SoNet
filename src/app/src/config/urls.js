export default {
    BASE_API_URL: process.env.REACT_APP_API_URL || 'http://127.0.0.1:4000',
    SOCKET_URL: process.env.REACT_APP_API_URL || 'http://127.0.0.1:4000',
    ACCOUNT: {
        AUTH: '/account/auth'
    },
    USER: {
        CURRENT: '/user'
    },
    USERS: {
        ALL: '/users',
        GET_BY_ID: id => `/users/${id}`
    }
}
