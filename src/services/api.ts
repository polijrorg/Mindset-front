import axios from 'axios';
import { parseCookies } from 'nookies';

const api = axios.create({ baseURL: 'https://mindset.polijrinternal.com' });

/* const { '@Mindset:token': token } = parseCookies();

if (token) (api.defaults.headers as any).Authorization = `Bearer ${token}`; */

export default api;
