import { useState } from 'react';

export default function App() {
    const [price, setPrice] = useState(100);

    function handleDiscount() {
        setPrice(75);
    }

    return (
        <div>
            <p data-testid="price">${price}</p>
            <button onClick={handleDiscount}>Apply Discount</button>
        </div>
    );
}