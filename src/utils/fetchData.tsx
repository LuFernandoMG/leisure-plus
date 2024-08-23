import axios from 'axios';

interface FetchOptions {
    endpoint: string;
    params?: Record<string, any>;
}

const fetchData = async (options: FetchOptions) => {
    const { endpoint, params } = options;
    const baseUrl = 'https://api.themoviedb.org/3';
    const apiKey = `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_KEY}`;

    try {
        const response = await axios.get(`${baseUrl}${endpoint}`, {
            params: {
                ...params,
                api_key: apiKey,
            },
        });

        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};

export default fetchData;