import React from 'react';
import Todo from './Todo';

export const DUMMY_TODOS = [
    'Learn React',
    'Practice React',
    'Profit!'
];

export default function App() {
    return (
        <ul>
            {DUMMY_TODOS.map((item) => <Todo key={item} text={item} />)}
        </ul>
    );
}