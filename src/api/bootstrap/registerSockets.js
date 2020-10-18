const userSocket = require('../sockets/middlewares/userSocket')
const authorizeSocket = require("../sockets/middlewares/authorizeSocket");

const registerSockets = (io) => {
    io.sockets
        .use(userSocket())
        .use(authorizeSocket())
        .on('connection', function(socket) {
            socket.on('username', () => {
                io.emit('join_to_chat', `${socket.user.first_name} ${socket.user.last_name} join the chat...`);
            });

            socket.on('disconnect', () => {
                io.emit('left_from_chat', `${socket.user.first_name} ${socket.user.last_name} left the chat...`);
            })

            socket.on('chat_message', function(message) {
                io.emit('chat_message', `[${socket.user.first_name} ${socket.user.last_name}]: ${message}`);
            });
        });
}

module.exports = registerSockets;
