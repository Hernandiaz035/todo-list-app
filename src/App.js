import { useState } from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem.js';
import { CreateTodoButton } from './CreateTodoButton';
import './App.css';

const defaultTodos = [
  {text: "Do the shopping.", completed: false},
  {text: "Go to the Gym.", completed: true},
  {text: "Go work.", completed: false},
]

function App() {
  const [searchValue, setSearchValue] = useState('');
  const [todos, setTodos] = useState(defaultTodos);

  let searchedTodos;
  if (searchValue.length === 0) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter((todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  }

  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;

  const completeTodo = (index) => {
    let tmpTodos = [...todos];
    tmpTodos[index].completed = !tmpTodos[index].completed;
    setTodos(tmpTodos);
  }
  const deleteTodo = (index) => {
    let tmpTodos = [...todos];
    tmpTodos.splice(index,1);
    setTodos(tmpTodos);
  }

  return (
    <div id="root">
      <TodoCounter
        totalTodos={totalTodos}
        completedTodos={completedTodos}
      />
      <TodoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <TodoList>
        {searchedTodos.map((todo, index) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={( ) => completeTodo(index)}
            onDelete={( ) => deleteTodo(index)}
          />
        ))}
      </TodoList>
      <CreateTodoButton />
    </div>
  );
}


export default App;
