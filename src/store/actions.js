//чекбоксы

export const TOGGLE_CHECKBOX = 'TOGGLE_CHECKBOX'
export const TOGGLE_ALL_CHECKBOXES = 'TOGGLE_ALL_CHECKBOXES'

export const toggleCheckbox = (id) => ({
  type: TOGGLE_CHECKBOX,
  payload: id,
})

export const toggleAllCheckboxes = () => ({
  type: TOGGLE_ALL_CHECKBOXES,
})

//сортировка

export const TOGGLE_CHEAPEST = 'TOGGLE_CHEAPEST'
export const TOGGLE_FASTEST = 'TOGGLE_FASTEST'

export const toggleCheapest = (tickets) => ({
  type: TOGGLE_CHEAPEST,
  payload: tickets,
})

export const toggleFastest = (tickets) => ({
  type: TOGGLE_FASTEST,
  payload: tickets,
})

// buttonSliceValue
export const TOGGLE_VALUE = 'TOGGLE_VALUE'
export const toggleValue = () => ({
  type: TOGGLE_VALUE,
})

//билеты
export const ID_LOAD = 'ID_LOAD'
export const TICKETS_LOAD = 'TICKETS_LOAD'

export function searchIdsLoad() {
  return async (dispatch) => {
    const response = await fetch('https://aviasales-test-api.kata.academy/search')
    const jsonData = await response.json()
    dispatch({
      type: ID_LOAD,
      payload: jsonData,
    })
  }
}

export function ticketsLoad(searchId) {
  return async (dispatch) => {
    try {
      let response = await fetch(`https://aviasales-test-api.kata.academy/tickets?searchId=${searchId}`)
      if (!response.ok) {
        if (response.status === 502 || response.status === 500) {
          dispatch(ticketsLoad(searchId))
        } else {
          throw new Error('Ошибка')
        }
      }
      const jsonData = await response.json()
      dispatch({
        type: TICKETS_LOAD,
        payload: jsonData,
      })
      if (!jsonData.stop) {
        dispatch(ticketsLoad(searchId))
      }
    } catch (error) {
      console.log(error.message)
    }
  }
}
