import { useState } from 'react';
import { AppUI } from './AppUI';

const STORAGE_NAME = 'TODOS_V1';

function App() {
  const localStorageTodos = localStorage.getItem(STORAGE_NAME);
  let parsedTodos;

  if (!localStorageTodos) {
    localStorage.setItem(STORAGE_NAME, JSON.stringify([]));
    parsedTodos = [];
  } else {
    parsedTodos = JSON.parse(localStorageTodos);
  }

  const saveTodos = (updatedTodos) => {
    setTodos(updatedTodos);
    localStorage.setItem(STORAGE_NAME, JSON.stringify(todos));
  }

  const [searchValue, setSearchValue] = useState('');
  const [todos, setTodos] = useState(parsedTodos);

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
    saveTodos(tmpTodos);
  }
  const deleteTodo = (index) => {
    let tmpTodos = [...todos];
    tmpTodos.splice(index,1);
    saveTodos(tmpTodos);
  }

  return (
    <AppUI
      searchedTodos={searchedTodos}
      totalTodos={totalTodos}
      completedTodos={completedTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
    />
  );
}


export default App;
