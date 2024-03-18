import { TOGGLE_ALL_CHECKBOXES, TOGGLE_CHECKBOX } from "./actions"

const initialState = {
    checkboxes: [
        { id: 0, checked: false },
        { id: 1, checked: false },
        { id: 2, checked: false },
        { id: 3, checked: false },
        ],
    allChecked: false
}

export const checkboxReducer = (state = initialState, action) => {
    switch (action.type) {
      case TOGGLE_CHECKBOX:
        const updatedCheckboxes = state.checkboxes.map(checkbox =>
          checkbox.id === action.payload ? { ...checkbox, checked: !checkbox.checked } : checkbox
        );
        const allChecked = updatedCheckboxes.every(checkbox => checkbox.checked);
        return {
          ...state,
          checkboxes: updatedCheckboxes,
          allChecked
        };
      case TOGGLE_ALL_CHECKBOXES:
        const allCheckedValue = !state.allChecked;
        const updatedCheckboxesAll = state.checkboxes.map(checkbox => ({ ...checkbox, checked: allCheckedValue }));
        return {
          ...state,
          checkboxes: updatedCheckboxesAll,
          allChecked: allCheckedValue
        };
      default:
        return state;
    }
  };