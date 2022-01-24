import React from 'react';
import './TodoList.css';
import { Todo } from './Interfaces/Todo';
import TodoItem from './TodoItem';

interface Props {
    todoList: Array<Todo>,
    removeCb: (id:string) => void,
    doneCb: (id:string) => void,
};

const TodoList: React.FC<Props> = ({ todoList, removeCb, doneCb }) => {
  if (!todoList.length) {
    return null;
  }
    
  return (
    <table id="TodoListTable">
        <thead>
            <tr>
                <th>ToDo</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            {todoList.map((todo) => (
                <TodoItem key={todo.id} todo={todo} removeCb={removeCb} doneCb={doneCb} />
            ))}
        </tbody>
    </table>
  );
}

export default TodoList;