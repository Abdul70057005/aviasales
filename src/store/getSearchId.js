import { ID_LOAD, TICKETS_LOAD } from "./actions";

const initialState = {
    searchId: null,
    tickets: [],
    stop: false
}

export const getSearchId = (state = initialState, action) => {
    switch(action.type) {
        case ID_LOAD:
            return {
                ...state,
                searchId: action.payload.searchId,
                tickets: state.tickets,
                stop: state.stop
            }
        case TICKETS_LOAD:
            return {
                ...state,
                searchId: state.searchId,
                tickets: action.payload.tickets,
                stop: action.payload.stop
            }

        default:
            return state
    }
}