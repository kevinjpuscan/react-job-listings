const initialState = {
  filters: []
};
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_FILTER": {
      return { ...state, filters: [...state.filters, action.payload] };
    }
    case "REMOVE_FILTER": {
      let newFilters = [...state.filters];
      let idx = newFilters.indexOf(action.payload);
      newFilters.splice(idx, 1);
      return { ...state, filters: newFilters };
    }
    case "CLEAR_FILTER": {
      return { ...state, filters: [] };
    }
    default: {
      return state;
    }
  }
};
