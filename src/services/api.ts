import axios from 'axios';

const api = axios.create({ baseURL: 'https://[your_api_url]' });

export default api;
