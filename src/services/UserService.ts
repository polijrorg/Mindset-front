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
    static async login(data: ILoginRequest): Promise<ILoginResponse> {
        const response: AxiosResponse<ILoginResponse> = await api.post(
            '/sessions/login',
            data
        );

        setCookie(undefined, '@mindset:token', response.data.token, {
            maxAge: 60 * 60 * 24
        });
        setCookie(undefined, '@mindset:userId', response.data.user.id, {
            maxAge: 60 * 60 * 24
        });
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (api.defaults.headers as any).Authorization = `Bearer $(token)`;
        return response.data;
    }

    static async signIn(data: ISignInRequest): Promise<ISignInResponse> {
        const response: AxiosResponse<ISignInResponse> = await api.post(
            '',
            data
        );
        return response.data;
    }
}
