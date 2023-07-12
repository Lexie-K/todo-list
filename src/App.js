import { useContext, useState } from 'react';
import CreateTodo from './components/CreateTodo';
import { TodoStoreContext } from './store/store';
import TodoItem from './components/TodoItem';
import { observer } from 'mobx-react-lite';
import cn from 'classnames';

const App = observer(({ todo }) => {
  const store = useContext(TodoStoreContext);
  const [highlight, setHighlight] = useState(null);

  return (
    <div className="App">
      <header className="header">
        <h1>My Todolist App</h1>
        <CreateTodo />
        <div className="btn-container">
        <button className='styled-btn' onClick={()=> setHighlight((prev)=> (prev === "even" ? null : "even"))}>Even Tasks</button>
        <button className='styled-btn' onClick={()=> setHighlight((prev)=> (prev === "odd" ? null : "odd"))}>Odd Tasks</button>
        <button className='styled-btn' onClick={() => store.removeLastTodo(todo)}>
          Remove last task
        </button>
        <button className='styled-btn' onClick={() => store.removeFirstTodo(todo)}>
          Remove first task
        </button>
        </div>
      </header>
      <ul className={cn({[`highlight-${highlight}`]: highlight !== null})}>
        {store.todos
          .filter(todo => !todo.isCompleted)
          .map(todo => (
            <TodoItem key={todo.id} todo={todo} />
          ))}
        {store.todos
          .filter(todo => todo.isCompleted)
          .map(todo => (
            <TodoItem key={todo.id} todo={todo} />
          ))}
      </ul>
    </div>
  );
});

export default App;
