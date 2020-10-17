export default {
    BASE_API_URL: process.env.REACT_APP_API_URL || 'http://127.0.0.1:4000',
    ACCOUNT: {
        AUTH: '/account/auth'
    },
    USER: {
        CURRENT: '/user'
    }
}
