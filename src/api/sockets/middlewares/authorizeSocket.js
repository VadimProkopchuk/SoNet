const authorizeSocket = () => {
    return (socket, next) => {
        if (socket.user) {
            next();
        } else {
            next(new Error('Authentication error.'));
        }
    }
}

module.exports = authorizeSocket;
