import { combineReducers } from 'redux';
import authReducer from "./authReducer";
import userReducer from "./userReducer";
import chatReducer from "./chatReducer";
import signUpReducer from "./signUpReducer";

export default combineReducers({
    auth: authReducer,
    user: userReducer,
    chat: chatReducer,
    signUp: signUpReducer
});
