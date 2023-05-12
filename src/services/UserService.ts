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
    name: string;
    email: string;
    password: string;
}

interface ISignInResponse {
    token: string;
    user: User;
}

export default class UserService {
    static async login({
        email,
        password
    }: ILoginRequest): Promise<ILoginResponse> {
        try {
            const response: AxiosResponse<ILoginResponse> = await api.post(
                '/sessions/login',
                { email, password }
            );
            const { token } = response.data;
            const userId = response.data.user.id;
            setCookie(undefined, '@mindset:token', token, {
                maxAge: 60 * 60 * 24
            });
            setCookie(undefined, '@mindset:useId', userId, {
                maxAge: 60 * 60 * 24
            });
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            (api.defaults.headers as any).Authorization = `Bearer $(token)`;
            return response.data;
        } catch (err) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            throw new Error((err as any).response.data.message);
        }
    }

    static async signIn(data: ISignInRequest): Promise<ISignInResponse> {
        const response: AxiosResponse<ISignInResponse> = await api.post(
            '/register',
            data
        );
        return response.data;
    }
}
