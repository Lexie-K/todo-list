import { observer } from 'mobx-react-lite';
import { useContext } from 'react';
import { TodoStoreContext } from '../store/store';
import {
  BsJournalCheck,
  BsFillTrash3Fill,
  BsPencilSquare,
} from 'react-icons/bs';
import './StyledTodoItem.css';

const TodoItem = observer(({ todo }) => {
  const store = useContext(TodoStoreContext);

  return (
    <>
      <li className={`${todo.isCompleted ? 'complete' : ''}`}>
        {todo.isEditing && (
          <input
            value={todo.title}
            onChange={e => store.updateTitle(todo, e.target.value)}
            onBlur={() => store.toggleEditing(todo)}
            className="input-edit"
          />
        )}
        {!todo.isEditing && (
          <span className="styled-title-task ">{todo.title}</span>
        )}
        <button
          className="task-btns"
          onClick={() => store.toggleCompleted(todo.id)}
        >
          <BsJournalCheck size={20} />
        </button>
        <button className="task-btns" onClick={() => store.removeTodo(todo.id)}>
          <BsFillTrash3Fill size={20} />
        </button>
        <button className="task-btns" onClick={() => store.toggleEditing(todo)}>
          <BsPencilSquare size={20} />
        </button>
      </li>
    </>
  );
});

export default TodoItem;
//
