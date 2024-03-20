//чекбоксы

export const TOGGLE_CHECKBOX = 'TOGGLE_CHECKBOX'
export const TOGGLE_ALL_CHECKBOXES = 'TOGGLE_ALL_CHECKBOXES'

export const toggleCheckbox = (id) => ({
    type: TOGGLE_CHECKBOX,
    payload: id
  });
  
export const toggleAllCheckboxes = () => ({
    type: TOGGLE_ALL_CHECKBOXES
});

//сортировка

export const TOGGLE_CHEAPEST = 'TOGGLE_CHEAPEST'
export const TOGGLE_FASTEST = 'TOGGLE_FASTEST'

export const toggleCheapest = () => ({
    type: TOGGLE_CHEAPEST
})

export const toggleFastest = () => ({
  type: TOGGLE_FASTEST
})

//билеты 
export const ID_LOAD = 'ID_LOAD'
export const TICKETS_LOAD = 'TICKETS_LOAD'

export function searchIdsLoad () {
  return async dispatch => {
    const response = await fetch('https://aviasales-test-api.kata.academy/search')
    const jsonData = await response.json()
    dispatch({
      type: ID_LOAD,
      payload: jsonData
    })
}
}

export function ticketsLoad (searchId) {
  return async dispatch => {
    const response = await fetch(`https://aviasales-test-api.kata.academy/tickets?searchId=${searchId}`)
    const jsonData = await response.json()
    dispatch({
      type: TICKETS_LOAD,
      payload: jsonData
    })


  }
}

