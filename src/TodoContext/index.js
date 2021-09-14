import React from 'react';
import { useLocalStorage } from './useLocalStorage'

const TodoContext = React.createContext();

function TodoProvider(props) {
    const {
        item: todos,
        saveItem: saveTodos,
        loading,
        error,
    } = useLocalStorage('TODOS_V1', []);
    const [searchValue, setSearchValue] = React.useState('');
    const [openModal, setOpenModal] = React.useState(false);

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
    const addTodo = (text) => {
        let tmpTodos = [...todos];
        tmpTodos.push({
            text,
            completed: false,
        });
        saveTodos(tmpTodos);
    }
    return (
        <TodoContext.Provider value={{
            error,
            loading,
            searchedTodos,
            totalTodos,
            completedTodos,
            searchValue,
            setSearchValue,
            completeTodo,
            addTodo,
            deleteTodo,
            openModal,
            setOpenModal,
        }}>
            {props.children}
        </TodoContext.Provider>
    );
}

export { TodoContext, TodoProvider};
