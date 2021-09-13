import React from "react";
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem/index.js';
import { CreateTodoButton } from '../CreateTodoButton';
// import './App.css';

function AppUI({
    error,
    loading,
    searchedTodos,
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    completeTodo,
    deleteTodo,
}) {
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
                {error && <p>There was an Error!</p>}
                {loading && <p>Fetching Data...</p>}
                {(!loading && !searchedTodos.length) && <p>Create your own ToDos</p>}
                {searchedTodos.map((todo, index) => (
                <TodoItem
                    key={todo.text}
                    text={todo.text}
                    completed={todo.completed}
                    onComplete={() => completeTodo(index)}
                    onDelete={() => deleteTodo(index)}
                />
                ))}
            </TodoList>

            <CreateTodoButton />
        </div>
    );
}

export { AppUI };
