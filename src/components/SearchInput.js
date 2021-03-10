import React from 'react';
import { useTodoContext } from '../todo_context';

const SearchInput = () => {
  const { text, getItem, handleSubmit, isDark } = useTodoContext();
  return (
    <div className="w-4/5 md:w-2/4 lg:w-2/5 h-10 m-auto mt-10">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className={`w-full h-full p-4  text-xl shadow-md rounded-sm ${
            isDark ? 'bg-gray-600 text-white' : null
          } focus:outline-none`}
          value={text}
          onChange={getItem}
          placeholder="task"
        />
      </form>
    </div>
  );
};

export default SearchInput;
