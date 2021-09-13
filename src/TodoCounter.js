import react from 'react';
import './TodoCounter.css';

function TodoCounter({ todos }) {
    const completedTodos = todos.filter((todo) => !!todo.completed).length;
    const totalTodos = todos.length;

    return (
        <h2>You have completed {completedTodos} out of {totalTodos} items.</h2>
    );
}

export { TodoCounter }
