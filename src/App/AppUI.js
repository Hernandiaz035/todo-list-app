import React from "react";
import { TodoContext } from "../TodoContext";
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { TodoForm } from '../TodoForm'
import { CreateTodoButton } from '../CreateTodoButton';
import { Modal } from "../Modal";
// import './App.css';

function AppUI() {
    const {
        error,
        loading,
        searchedTodos,
        completeTodo,
        deleteTodo,
        openModal,
        setOpenModal,
    } = React.useContext(TodoContext);

    return (
        <React.Fragment>
            <TodoCounter />
            <TodoSearch />

            <TodoList>
                {error && <p>There was an Error!. {`The error is:${error}`}</p>}
                {loading && <p>Fetching Data...</p>}
                {(!loading && !searchedTodos.length) && <p>Create your own ToDos</p>}
                {searchedTodos.map((todo, index) => (
                <TodoItem
                    key={index}
                    text={todo.text}
                    completed={todo.completed}
                    onComplete={() => completeTodo(index)}
                    onDelete={() => deleteTodo(index)}
                />
                ))}
            </TodoList>

            {!!openModal && (
                <Modal>
                    <TodoForm />
                </Modal>
            )}

            <CreateTodoButton
                setOpenModal={setOpenModal}
            />
        </React.Fragment>
    );
}

export { AppUI };
