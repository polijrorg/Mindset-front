import { AxiosResponse } from 'axios';

import User from 'interfaces/User';
import { setCookie } from 'nookies';

import api from './api';

interface ILoginRequest {
    email: string;
    password: string;
}
interface ISignInRequest {
    phone: string;
}
interface ISignInResponse {
    phone: string;
}
interface ILoginResponse {
    token: string;
    user: User;
}

export default class UserService {
    static async getUsers(): Promise<User[]> {
        const response = await api.get('/Users');
        return response.data;
    }

    static async login({
        email,
        password
    }: ILoginRequest): Promise<ILoginResponse> {
        try {
            const response: AxiosResponse<ILoginResponse> = await api.post(
                'sessions/login',
                { email, password }
            );
            const { token } = response.data;
            const userId = response.data.user.id;
            setCookie(undefined, '@mindset:token', token);
            setCookie(undefined, '@mindset:useId', userId);
            (api.defaults.headers as any).Authorization = `Bearer $(token)`;
            return response.data;
        } catch (err) {
            throw new Error((err as any).response.data.message);
        }
    }

    static async SignIn({ phone }: ISignInRequest): Promise<ISignInRequest> {
        try {
            const response: AxiosResponse<ISignInResponse> = await api.post(
                'sessions/login',
                { phone }
            );
            setCookie(undefined, '@mindset:phone', phone);
            (api.defaults.headers as any).Authorization = `Bearer $(token)`;
            return response.data;
        } catch (err) {
            throw new Error((err as any).response.data.message);
        }
    }
}
