import React from 'react';
import './TodoList.css';
import { Todo } from './Interfaces/Todo';
import TodoItem from './TodoItem';

interface Props {
    todoList: Array<Todo>,
};

const TodoList: React.FC<Props> = ({ todoList }) => {
  return (
    <div>
        {todoList.map((todo) => (
            <TodoItem key={todo.id} todo={todo}/>
        ))}
    </div>
  );
}

export default TodoList;