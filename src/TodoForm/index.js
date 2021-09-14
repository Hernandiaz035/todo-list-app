import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoForm.css';

function TodoForm () {
    const {
        addTodo,
        setOpenModal,
    } = React.useContext(TodoContext);

    const onSubmit = (event) => {
        event.preventDefault();
        todoText && addTodo(todoText);
        setOpenModal(false);
    }

    const onCancel = () => {
        setOpenModal(false);
    }

    const onValueChange = (event) => {
        setTodoText(event.target.value);
    }

    const [todoText, setTodoText] = React.useState("");

    return (
        <form onSubmit={onSubmit}>
            <label>Type your TODO title.</label>
            <textarea
                placeholder="Todo Title"
                value={todoText}
                onChange={onValueChange}
            />
            <div className="TodoForm-buttonContainer">
                <button
                    className="TodoForm-button TodoForm-button--cancel"
                    type="button"
                    onClick={onCancel}
                    >
                    Cancel
                </button>
                <button
                    type="submit"
                    className="TodoForm-button TodoForm-button--add"
                >
                    Add
                </button>
            </div>
        </form>
    );
}

export { TodoForm };
