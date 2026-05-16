import React from 'react';
import { useState } from 'react';

export default function App() {
    const [isActive, setIsActive] = useState(false);

    function handleToggle() {
        setIsActive(true);
    }

    return (
        <div>
            <p className={isActive ? 'active' : ''}>Style me!</p>
            <button onClick={handleToggle}>Toggle style</button>
        </div>
    );
}