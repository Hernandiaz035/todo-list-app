import react from 'react'

function TodoItem(props) {
    return (
        <li>
            <span>C</span>
            <p>{props.text}</p>
            <input type="checkbox" checked={props.completed} />
            <span>X</span>
        </li>
    );
}

export { TodoItem }
