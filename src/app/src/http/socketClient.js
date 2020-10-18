import socketIo from "socket.io-client";
import storage from "../storage/storage";
import { URLS } from "../config";

const socketClient = () => socketIo(URLS.SOCKET_URL, {
    query: {
        authorization: `Bearer ${storage.token.get()}`
    }
});

export default socketClient;
