import './App.css';
import TodoItemCreator from './components/TodoItemCreator';
import { useRecoilValue } from 'recoil';
import { todoListState } from './todoAtoms';
import TodoItem from './components/TodoItem';

function App() {
  const todoList = useRecoilValue(todoListState);
  console.log(todoList);
  return (
    <div className='App'>
      <TodoItemCreator />
      {todoList.map((todoItem) => (
        <TodoItem key={todoItem.id} item={todoItem} />
      ))}
    </div>
  );
}

export default App;
