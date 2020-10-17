import {UPDATE_CURRENT_USER} from "../actions/actionTypes";

const initialState = {
    current: null
}

export default function userReducer(state = initialState, action) {
    switch (action.type) {
        case UPDATE_CURRENT_USER: {
            return {
                ...state,
                current: action.user,
            };
        }

        default: return state;
    }
}
