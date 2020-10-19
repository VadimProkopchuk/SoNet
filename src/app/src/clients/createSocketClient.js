import socketIo from "socket.io-client";
import storage from "../storage/storage";
import { URLS } from "../config";

export default () => socketIo(URLS.SOCKET_URL, {
    query: {
        authorization: `Bearer ${storage.token.get()}`
    }
});
