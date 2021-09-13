import './App.css';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem.js';
import { CreateTodoButton } from './CreateTodoButton';

const todos = [
  {text: "Do the shopping.", completed: false},
  {text: "Go to the Gym.", completed: true},
  {text: "Go work.", completed: false},
]

function App() {
  return (
    <div id="root">
      <TodoCounter todos={todos}/>
      <TodoSearch />
      <TodoList>
        {todos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
          />
        ))}
      </TodoList>
      <CreateTodoButton />
    </div>
  );
}

export default App;
