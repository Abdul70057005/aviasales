import { TOGGLE_CHEAPEST, TOGGLE_FASTEST } from "./actions";

const initialState = {
    cheapest: false,
    fastest: false,
}

export const sortReducer = (state = initialState, action) => {
    switch(action.type) {
        case TOGGLE_CHEAPEST:
            return {
                ...state,
                cheapest: true,
                fastest: false
            }
        case TOGGLE_FASTEST:
            return {
                ...state,
                cheapest: false,
                fastest: true
            }
        default:
            return state
    }
}