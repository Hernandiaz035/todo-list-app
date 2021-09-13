import React from "react";
import { useState } from 'react';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem/index.js';
import { CreateTodoButton } from '../CreateTodoButton';
// import './App.css';

function AppUI({
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
