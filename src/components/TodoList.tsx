import React from 'react';

interface Todo {
    id: number;
    text: string;
    completed: boolean;
    }

    interface TodoListProps {
    todos: Todo[];
    toggleComplete: (id: number) => void;
    removeTodo: (id: number) => void;
    }

    const TodoList: React.FC<TodoListProps> = ({ todos, toggleComplete, removeTodo }) => {
    return (
        <ul className="list-group mt-3">
        {todos.map(todo => (
            <li
            key={todo.id}
            className={`list-group-item d-flex justify-content-between align-items-center ${
                todo.completed ? 'list-group-item-success' : ''
            }`}
            >
            <span
                style={{ textDecoration: todo.completed ? 'line-through' : 'none', cursor: 'pointer' }}
                onClick={() => toggleComplete(todo.id)}
            >
                {todo.text}
            </span>
            <button className="btn btn-danger btn-sm" onClick={() => removeTodo(todo.id)}>
                Remove
            </button>
            </li>
        ))}
        </ul>
    );
};

export default TodoList;
