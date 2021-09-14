import { TodoIcon } from '../TodoIcon';
import './TodoItem.css';

function TodoItem(props) {

    return (
        <li className="TodoItem">
            <TodoIcon
                type="check"
                color={props.completed && "green"}
                onClick={props.onComplete}
            />
            <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
                {props.text}
            </p>
            <TodoIcon
                type="delete"
                onClick={props.onDelete}
            />
        </li>
    );
}

export { TodoItem }
