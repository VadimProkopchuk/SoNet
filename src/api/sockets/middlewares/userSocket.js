const AuthService = require("../../services/Account/AuthService");

const userSocket = () => {
    return async (socket, next) => {
        const authorization = socket.handshake.query && socket.handshake.query.authorization
            ? socket.handshake.query.authorization || ""
            : "";
        const token = authorization.replace("Bearer", "").trim();

        socket.user = await AuthService.getUserByToken(token);
        next();
    }
}

module.exports = userSocket;
