import axios from 'axios';

const API_URL = 'http://localhost:5000/api/cars'; // כתובת ה-Backend

export const fetchCars = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error('Error fetching cars:', error);
        return [];
    }
};
