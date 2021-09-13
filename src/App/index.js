import React from 'react';
import { AppUI } from './AppUI';

function useLocalStorage(itemName, initialValue) {
  const [loading, setLoading] = React.useState(true)
  const [error, setError] = React.useState(false)
  const [item, setItem] = React.useState(initialValue);

  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);

        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(item));
        } else {
          setItem(JSON.parse(localStorageItem));
          throw Error('Checking try');
        }
        setError(false);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }, 1000);
  });

  const saveItem = (updatedItem) => {
    try {
      const stringifiedItem = JSON.stringify(updatedItem)
      localStorage.setItem(itemName, stringifiedItem);
      setItem(updatedItem);
    } catch (error) {
      setError(error);
    }
  }

  return {
    item,
    saveItem,
    loading,
    error,
  }
}

function App() {
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
   } = useLocalStorage('TODOS_V1', []);
  const [searchValue, setSearchValue] = React.useState('');

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
      error={error}
      loading={loading}
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
