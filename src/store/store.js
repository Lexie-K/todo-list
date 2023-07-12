import { v4 as uuidv4 } from 'uuid';
import { makeAutoObservable } from 'mobx';
import { createContext } from 'react';

class TodoStore {
  todos = [];

  constructor() {
    makeAutoObservable(this);
  }

  addTodo(title) {
    this.todos.push({
      id: uuidv4(),
      title,
      isCompleted: false,
      isEditing: false,
    });
  }

  removeTodo(id) {
    this.todos = this.todos.filter(todo => todo.id !== id);
  }

  removeLastTodo() {
    this.todos.pop();
  }

  removeFirstTodo() {
    this.todos.shift();
  }

  updateTitle(todo, title) {
    todo.title = title;
  }

  toggleEditing(todo) {
    todo.isEditing = !todo.isEditing;
  }

  toggleCompleted(id) {
    this.todos = this.todos.map(todo => {
      if (todo.id === id)
        return {
          ...todo,
          isCompleted: !todo.isCompleted,
        };

      return todo;
    });
  }
}

export const todoStore = new TodoStore();
export const TodoStoreContext = createContext(todoStore);
