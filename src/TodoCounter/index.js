import './TodoCounter.css';

function TodoCounter({ completedTodos, totalTodos }) {

    return (
        <h2>You have completed {completedTodos} out of {totalTodos} items.</h2>
    );
}

export { TodoCounter }
