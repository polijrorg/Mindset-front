import { AxiosResponse } from 'axios';

import User from 'interfaces/User';
import { setCookie } from 'nookies';

import api from './api';

type Login = (cred: {
    email: string;
    password: string;
}) => Promise<{ data: ILoginResponse }>;

type IRegisterClient = (data: {
    name: string;
    email: string;
    password: string;
}) => Promise<{ data: User }>;

interface ILoginResponse {
    token: string;
    user: User;
}

export default class UserService {
    static login: Login = async ({ email, password }) => {
        const response: AxiosResponse<ILoginResponse> = await api.post(
            '/sessions/login',
            { email, password }
        );

        const { user } = response.data;
        if (response.data.token) {
            localStorage.setItem('mindset:token', response.data.token);
            localStorage.setItem('mindset:name', response.data.user.name);
            setCookie(undefined, '@Mindset::token', response.data.token, {
                maxAge: 60 * 60 * 24 // 1 dia
            });

            setCookie(undefined, '@Mindset::userId', user.id, {
                maxAge: 60 * 60 * 24 // 1 dia
            });

            // eslint-disable-next-line @typescript-eslint/no-explicit-any, prettier/prettier
            (api.defaults.headers as any).Authorization = `Bearer ${response.data.token}`;
        }
        return { data: response.data };
    };

    static registerClient: IRegisterClient = async ({
        email,
        password,
        name
    }) => {
        const response: AxiosResponse<User> = await api.post('/register', {
            name,
            email,
            password
        });
        return { data: response.data };
    };

    static logout = () => {
        localStorage.removeItem('mindset:token');
        localStorage.removeItem('mindset:name');
    };
}
