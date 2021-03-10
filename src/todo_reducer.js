const todoReducer = (state, action) => {
  if (action.type === 'GET_TEXT') {
    return { ...state, text: action.payload };
  }
  if (action.type === 'SET_ITEM') {
    const newItem = {
      id: new Date().getTime().toString(),
      name: action.payload,
      complete: false,
    };
    return {
      ...state,
      filteredList: [newItem, ...state.filteredList],
      list: [newItem, ...state.list],
      text: '',
    };
  }
  if (action.type === 'REMOVE_ITEM') {
    const tempList = [...state.list];
    const newList = tempList.filter(item => {
      return item.id !== action.payload;
    });
    return { ...state, filteredList: newList, list: newList };
  }
  if (action.type === 'CHANGE_CATEGORY') {
    return { ...state, category: action.payload };
  }
  if (action.type === 'COMPLETE_ITEM') {
    const { id } = action.payload;

    const tempList = [...state.list];
    const newItems = tempList.map(item => {
      if (item.id === id) {
        return { ...item, complete: !item.complete };
      }
      return item;
    });
    return { ...state, list: newItems, filteredList: newItems };
  }
  if (action.type === 'FILTER_ITEMS') {
    const tempList = [...state.list];
    if (state.category === 'Active') {
      const activeList = tempList.filter(item => {
        return item.complete === false;
      });
      return {
        ...state,
        filteredList: activeList,
      };
    }
    if (state.category === 'Completed') {
      const completedList = tempList.filter(item => {
        return item.complete === true;
      });
      return {
        ...state,
        filteredList: completedList,
      };
    }
    if (state.category === 'All') {
      return {
        ...state,
        filteredList: [...state.list],
      };
    }
  }
  if (action.type === 'CLEAR_COMPLETE') {
    const tempList = [...state.list];
    const deletComplete = tempList.filter(item => {
      return item.complete === false;
    });
    return { ...state, list: deletComplete };
  }
  if ((action.type = 'TOGGLE_MODE')) {
    return { ...state, isDark: !state.isDark };
  }

  return state;
};

export default todoReducer;
