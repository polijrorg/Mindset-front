import { AxiosResponse } from 'axios';

import User from 'interfaces/User';
import { setCookie } from 'nookies';

import api from './api';

interface ILoginRequest {
    email: string;
    password: string;
}

interface ILoginResponse {
    token: string;
    user: User;
}
interface ISignInRequest {
    phone: string;
}

interface ISignInResponse {
    token: string;
    user: User;
}

export default class UserService {
    static async login(data: ILoginRequest): Promise<ILoginResponse> {
        const response: AxiosResponse<ILoginResponse> = await api.post(
            '/session/login',
            data
        );
        if (response.data.token) {
            setCookie(undefined, '@mindset:token', response.data.token, {
                path: '/',
                maxAge: 60 * 60 * 24
            });
            setCookie(undefined, '@mindset:useId', response.data.user.id, {
                path: '/',
                maxAge: 60 * 60 * 24
            });
            (
                api.defaults.headers as any
            ).Authorization = `Bearer ${response.data.token}`;
        }

        return response.data;
    }

    static async signIn(data: ISignInRequest): Promise<ISignInResponse> {
        const response: AxiosResponse<ILoginResponse> = await api.post(
            '/register',
            data
        );
        return response.data;
    }
}
