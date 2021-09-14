import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoCounter.css';

function TodoCounter() {
    const { totalTodos, completedTodos } = React.useContext(TodoContext);

    return (
        <h2>You have completed {completedTodos} out of {totalTodos} items.</h2>
    );
}

export { TodoCounter }
