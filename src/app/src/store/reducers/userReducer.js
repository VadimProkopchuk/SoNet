import {FETCH_ALL_CONTACTS, UPDATE_CURRENT_USER} from "../actions/actionTypes";

const initialState = {
    current: null,
    contacts: []
}

export default function userReducer(state = initialState, action) {
    switch (action.type) {
        case UPDATE_CURRENT_USER: {
            return {
                ...state,
                current: action.user,
            };
        }

        case FETCH_ALL_CONTACTS: {
            return {
                ...state,
                contacts: action.contacts
            }
        }

        default: return state;
    }
}
