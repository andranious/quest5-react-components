import React from 'react';
import { useState } from 'react';

export default function App() {
    const [showAlert, setShowAlert] = useState(false);

    function handleDelete() {
        setShowAlert(true);
    }

    function handleProceed() {
        setShowAlert(false);
    }

    return (
      <div>
        {showAlert && (
          <div data-testid="alert" id="alert">
            <h2>Are you sure?</h2>
            <p>These changes cannot be reverted!</p>
            <button onClick={handleProceed}>Proceed</button>
          </div>
        )}
        <button onClick={handleDelete}>Delete</button>
      </div>    
    );
}