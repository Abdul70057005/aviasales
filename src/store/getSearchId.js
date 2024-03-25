import { ID_LOAD, TICKETS_LOAD, TOGGLE_VALUE } from './actions'

const initialState = {
  searchId: null,
  tickets: [],
  stop: false,
  buttonValue: 5,
}

export const getSearchId = (state = initialState, action) => {
  switch (action.type) {
    case ID_LOAD:
      return {
        ...state,
        earchId: action.payload.searchId,
        tickets: state.tickets,
        stop: state.stop,
        buttonValue: state.buttonValue,
      }
    case TICKETS_LOAD: {
      let updateTickets = [...state.tickets, ...action.payload.tickets]
      return {
        ...state,
        searchId: state.searchId,
        tickets: updateTickets,
        stop: action.payload.stop,
        buttonValue: state.buttonValue,
      }
    }
    case TOGGLE_VALUE: {
      let newValue = state.buttonValue + 5

      return {
        ...state,
        searchId: state.searchId,
        tickets: state.tickets,
        stop: state.stop,
        buttonValue: newValue,
      }
    }
    default:
      return state
  }
}
