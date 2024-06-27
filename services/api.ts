import axios from 'axios';

const BASE_URL = 'https://rickandmortyapi.com/api';

export const getCharacters = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/character/?page=2`);
        return response.data.results;
    } catch (error) {
        console.error('Error fetching characters:', error);
        throw error;
    }
};