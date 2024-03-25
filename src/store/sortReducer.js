import { TOGGLE_CHEAPEST, TOGGLE_FASTEST } from './actions'

const initialState = {
  cheapest: false,
  fastest: false,
  sortTickets: [],
}

export const sortReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_CHEAPEST: {
      const sortedCheapestTickets = [...action.payload].sort((a, b) => a.price - b.price)

      return {
        ...state,
        cheapest: true,
        fastest: false,
        sortTickets: sortedCheapestTickets,
      }
    }
    case TOGGLE_FASTEST: {
      const sortedFastestTickets = [...action.payload].sort(
        (a, b) => a.segments[0].duration + a.segments[1].duration - (b.segments[0].duration + b.segments[1].duration)
      )
      return {
        ...state,
        cheapest: false,
        fastest: true,
        sortTickets: sortedFastestTickets,
      }
    }
    default:
      return state
  }
}
