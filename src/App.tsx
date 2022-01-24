import React, { useRef, useState, useCallback } from 'react';

import './App.css';

import Title from './Title';
import Add from './Add';
import { Todo } from './Interfaces/Todo';
import TodoList from './TodoList';

const App: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [todoList, setTodoList] = useState<Array<Todo>>([]);
  const addTodos = useCallback(() => {
    if(!inputRef?.current?.value?.trim?.()) {
      console.log('No values added');
      return;
    }

    const newList = [...todoList, {
      id: Date.now().toString(),
      text: inputRef?.current?.value || '',
      done: false,
    }];
    console.log('newList:', newList);
    setTodoList(newList);
    inputRef.current.value = '';
  }, [todoList]);
  
  const RemoveToDo = useCallback((id) => {
    setTodoList(todoList.filter(todo => todo.id !== id));
  }, [todoList]);

  const Done = useCallback((id) => {
    const newList = todoList.map(todo => {
      if (todo.id === id) {
        todo.done = !todo.done;
      }
      return todo;
    });
    newList.sort((a,b) => {
      if(a.done) {
        return 1;
      }
      return -1;
    })
    setTodoList(newList);
  }, [todoList]);

  return (
    <div className="App">
      <Title  appTitle='Typescript ToDo list' />
      <Add inputRef={inputRef} onClick={addTodos}/>
      <TodoList todoList={todoList} removeCb={RemoveToDo} doneCb={Done} />
    </div>
  );
}

export default App;
