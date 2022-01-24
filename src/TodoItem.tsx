import React from 'react';
import './TodoList.css';
import { Todo } from './Interfaces/Todo';

interface Props {
    todo: Todo,
};

const TodoItem: React.FC<Props> = ({ todo }) => {
  return (
    <div>
        {todo.text}
    </div>
  );
}

export default TodoItem;
;