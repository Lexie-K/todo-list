import { useState, useContext } from 'react';
import { TodoStoreContext } from '../store/store';
import { observer } from 'mobx-react-lite';
import './StyledCreateTodo.css'

const CreateTodo = observer(() => {
  const [title, setTitle] = useState("");
  const store = useContext(TodoStoreContext);

  const handleSubmit = e => {
    e.preventDefault();
    if (title && title.trim()) {
      store.addTodo(title);
      
      setTitle('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className='input-container'>
      <input autoFocus type='text' className='styled-input' value={title} onChange={(e) => setTitle(e.target.value)}/>
      <button type='submit' className='styled-btn'>Add Task</button>
    </form>
  );
});

export default CreateTodo;
