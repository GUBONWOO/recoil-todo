import './App.css';
import TodoItemCreator from './components/TodoItemCreator';
import { useRecoilValue } from 'recoil';
import { filteredTodoListState, todoListState } from './todoAtoms';
import TodoItem from './components/TodoItem';
import TodoListFiltered from './components/TodoListFiltered';
import TodoListStats from './components/TodoListStats';
import { currentUserNameQuery } from './userAtoms';
import React from 'react';

function App() {
  const todoList = useRecoilValue(todoListState);
  const filteredTodoList = useRecoilValue(filteredTodoListState);
  console.log(todoList);
  return (
    <div className='App'>
      <React.Suspense fallback={<div>...Loading</div>}>
        <CurrentUserInfo />
      </React.Suspense>
      <TodoListStats />
      <TodoListFiltered />
      <TodoItemCreator />
      {todoList.map((todoItem) => (
        <TodoItem key={todoItem.id} item={todoItem} />
      ))}
    </div>
  );
}

export default App;

function CurrentUserInfo() {
  const userName = useRecoilValue(currentUserNameQuery);
  return <div>{userName}</div>;
}
