import React, { useState } from 'react';
import { useTodoContext } from '../todo_context';
import { FiTrash2 } from 'react-icons/fi';
import { BsCheck } from 'react-icons/bs';
import { ImCheckboxChecked } from 'react-icons/im';
import { ImCheckboxUnchecked } from 'react-icons/im';

const Item = ({ id, name, index, complete }) => {
  const { removeItem, completeItem, isDark } = useTodoContext();

  return (
    <li
      className={` w-full  m-auto rounded-sm my-2 py-4 ${
        isDark ? 'bg-gray-600 text-white' : 'bg-white text-gray-700'
      }  p-2 flex justify-between items-center ${complete && 'opacity-30'}`}
    >
      {index + 1}. {name}
      <div className="flex justify-center items-center">
        <button
          className="focus:outline-none mx-2 "
          onClick={() => completeItem(id, name, complete)}
        >
          {complete ? (
            <ImCheckboxChecked className="text-xl mx-2 focus:outline-none" />
          ) : (
            <ImCheckboxUnchecked className="text-xl mx-2 focus:outline-none" />
          )}
        </button>
        <button
          className="text-xl mx-2 focus:outline-none  "
          onClick={() => removeItem(id)}
        >
          <FiTrash2 className="text-red-500" />
        </button>
      </div>
    </li>
  );
};

export default Item;
