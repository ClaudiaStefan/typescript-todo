import React from 'react';
import './TodoList.css';
import { Todo } from './Interfaces/Todo';
import Button from './Button';

interface Props {
    todo: Todo,
    removeCb: (id:string) => void,
    doneCb: (id:string) => void,
};


const TodoItem: React.FC<Props> = ({ todo, removeCb, doneCb }) => { 
  const textClasses = todo.done ? 'ToDoText ToDoChecked' : 'ToDoText';
  return (
    <tr>
        <td className={textClasses}>
            {todo.text}
        </td>
        <td className="Actions">
            <Button text={todo.done ? 'Undo' : 'Do'} onClick={() => { doneCb(todo.id); }} />
            <Button text="Remove" onClick={() => { removeCb(todo.id); }} />
        </td>
    </tr>
  );
}

export default TodoItem;
