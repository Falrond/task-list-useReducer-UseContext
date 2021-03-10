import React from 'react';
import { useTodoContext } from '../todo_context';
import { BsMoon } from 'react-icons/bs';
import { BiSun } from 'react-icons/bi';

const DarkModeButton = () => {
  const { isDark, toggleMode } = useTodoContext();
  return (
    <>
      <button
        onClick={toggleMode}
        className={`p-3 rounded-md focus:outline-none m-auto text-3xl ${
          isDark ? 'text-gray-100' : 'text-gray-700'
        } font-medium text-center m-auto block`}
      >
        {isDark ? <BiSun /> : <BsMoon />}
      </button>
    </>
  );
};

export default DarkModeButton;
