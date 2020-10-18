import { combineReducers } from 'redux';
import authReducer from "./authReducer";
import userReducer from "./userReducer";
import chatReducer from "./chatReducer";

export default combineReducers({
    auth: authReducer,
    user: userReducer,
    chat: chatReducer
});
