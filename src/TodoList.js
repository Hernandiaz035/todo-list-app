import react from 'react'

function TodoList(props) {
    return (
        <ul>
            {props.children}
        </ul>
    );
}

export { TodoList }
