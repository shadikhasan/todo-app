import React, { useState } from 'react';

interface AddTodoProps {
    addTodo: (text: string) => void;
    }

    const AddTodo: React.FC<AddTodoProps> = ({ addTodo }) => {
    const [input, setInput] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (input.trim()) {
        addTodo(input);
        setInput('');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="d-flex mt-3">
        <input
            type="text"
            value={input}
            onChange={e => setInput(e.target.value)}
            className="form-control me-2"
            placeholder="Add a new task"
        />
        <button type="submit" className="btn btn-primary">
            Add
        </button>
        </form>
    );
};

export default AddTodo;
