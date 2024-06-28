import axios from 'axios';

const BASE_URL = 'https://rickandmortyapi.com/api';

export const getCharacters = async (pageNumber = 1, characterName = "") => {
    try {
        const response = await axios.get(`${BASE_URL}/character`, {
            params: {
                page: pageNumber,
                name: characterName,
            }
        });
        return response.data.results;
    } catch (error) {
        console.error('Error fetching characters:', error);
        throw error;
    }
};

export const api = axios.create({
    baseURL: 'https://rickandmortyapi.com/api'
})