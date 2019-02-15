import React from 'react';

export const Todo = ({ onClick, completed, text }) => (
    <li>
        <span
            onClick={onClick}
            style={{
                textDecoration: completed ? 'line-through' : 'none'
            }}
        >
            {text}
        </span>
    </li>
);

export default Todo;
