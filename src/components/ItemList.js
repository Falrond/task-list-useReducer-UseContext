import React from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import Item from './Item';
import { useTodoContext } from '../todo_context';

const ItemList = () => {
  const { text, filteredList } = useTodoContext();

  return (
    <div className="mt-10 w-4/5 md:w-2/4 lg:w-2/5 m-auto">
      {filteredList?.map((item, index) => {
        return <Item key={item.id} {...item} index={index} />;
      })}
    </div>
  );
};

export default ItemList;
