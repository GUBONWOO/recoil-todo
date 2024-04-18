import './App.css';
import TodoItemCreator from './components/TodoItemCreator';
import { useRecoilValue } from 'recoil';
import { filteredTodoListState, todoListState } from './todoAtoms';
import TodoItem from './components/TodoItem';
import TodoListFiltered from './components/TodoListFiltered';
import TodoListStats from './components/TodoListStats';

function App() {
  const todoList = useRecoilValue(todoListState);
  const filteredTodoList = useRecoilValue(filteredTodoListState);
  console.log(todoList);
  return (
    <div className='App'>
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
