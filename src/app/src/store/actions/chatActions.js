import {ADD_MESSAGE} from "./actionTypes";

export function addMessage(message) {
    return {
        type: ADD_MESSAGE,
        message
    }
}

