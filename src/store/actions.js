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

