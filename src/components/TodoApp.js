import React from 'react';
import ItemList from './components/ItemList';
import SearchInput from './components/SearchInput';
import Buttons from './components/Buttons';
import DarkModeButton from './components/DarkModeButton';
import { useTodoContext } from './todo_context';

const TodoContainer = () => {
  return (
    <div>
      <DarkModeButton />
      <SearchInput />
      <ItemList />
      <Buttons />
    </div>
  );
};

export default TodoContainer;
