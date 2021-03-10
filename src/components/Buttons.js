import React from 'react';
import { useTodoContext } from '../todo_context';

const Buttons = () => {
  const {
    category,
    changeCategory,
    clearComplete,
    list,
    isDark,
  } = useTodoContext();

  const categories = ['All', 'Active', 'Completed'];
  return (
    <div
      className={`tracking-wider w-4/5 md:w-2/4 lg:w-2/5 m-auto text-sm bg-white shadow-md flex justify-around p-2 h-16 rounded-sm items-center ${
        isDark ? 'bg-gray-600' : null
      } `}
    >
      {list.length > 0 && (
        <h2
          className={`border-gray-700 border-r-2 pr-2 font-bold ${
            isDark ? 'text-gray-200' : 'text-gray-600'
          } uppercase`}
        >
          {list.filter(item => item.complete === false).length}{' '}
          {list.length > 1 ? 'tasks' : 'task'} left
        </h2>
      )}
      {categories.map((item, index) => {
        return (
          <button
            key={index}
            className={`${
              category === item ? 'text-red-500' : null
            } font-bold ${isDark ? 'text-gray-200' : 'text-gray-600'}`}
            onClick={changeCategory}
          >
            {item}
          </button>
        );
      })}
      <button
        onClick={clearComplete}
        className="text-gray-400 font-bold pl-2 border-gray-700 border-l-2"
      >
        Clear complete
      </button>
    </div>
  );
};

export default Buttons;
