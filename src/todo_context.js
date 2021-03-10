import React, { useContext, useReducer, useEffect } from 'react';
import reducer from './todo_reducer';

const TodoContext = React.createContext();

const getLocalStorage = () => {
  let list = localStorage.getItem('list');
  if (list) {
    return JSON.parse(localStorage.getItem('list'));
  } else {
    return [];
  }
};

const getLocalDark = () => {
  let isDark = JSON.parse(localStorage.getItem('isDark'));
  console.log(isDark);
  if (isDark) {
    return isDark;
  } else {
    return false;
  }
};

const initialState = {
  text: '',
  list: getLocalStorage(),
  filteredList: [],
  category: 'All',
  isDark: getLocalDark(),
};

export const TodoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: 'FILTER_ITEMS' });
  }, [state.list, state.category]);

  const getItem = e => {
    let value = e.target.value;
    dispatch({ type: 'GET_TEXT', payload: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!state.text) {
      return null;
    }
    dispatch({ type: 'SET_ITEM', payload: state.text });
  };
  const removeItem = id => {
    dispatch({ type: 'REMOVE_ITEM', payload: id });
  };
  const changeCategory = e => {
    const value = e.target.textContent;
    console.log(value);
    dispatch({ type: 'CHANGE_CATEGORY', payload: value });
  };
  const completeItem = (id, name, complete) => {
    dispatch({ type: 'COMPLETE_ITEM', payload: { id, name, complete } });
  };

  const clearComplete = () => {
    dispatch({ type: 'CLEAR_COMPLETE' });
  };

  const toggleMode = () => {
    dispatch({ type: 'TOGGLE_MODE' });
  };

  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(state.list));
    localStorage.setItem('isDark', JSON.stringify(state.isDark));
  }, [state.list, state.isDark]);

  useEffect(() => {});

  return (
    <TodoContext.Provider
      value={{
        ...state,
        getItem,
        handleSubmit,
        removeItem,
        changeCategory,
        completeItem,
        clearComplete,
        toggleMode,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export const useTodoContext = () => {
  return useContext(TodoContext);
};
