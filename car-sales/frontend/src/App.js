import React, { useEffect, useState } from 'react';
import { fetchCars } from './api';

function App() {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        const getCars = async () => {
            const data = await fetchCars();
            setCars(data);
        };

        getCars();
    }, []);

    return (
        <div>
            <h1>רשימת רכבים</h1>
            <ul>
                {cars.map((car) => (
                    <li key={car.id}>{car.brand} {car.model} ({car.year})</li>
                ))}
            </ul>
        </div>
    );
}

export default App;
