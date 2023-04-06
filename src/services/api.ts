import axios from 'axios';

const api = axios.create({ baseURL: 'https://mindset.polijrinternal.com' });
export default api;
