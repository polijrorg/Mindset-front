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

export default class UserService {
    static async login(data: ILoginRequest): Promise<ILoginResponse> {
        const response: AxiosResponse<ILoginResponse> = await api.post(
            '/session/login',
            data
        );

        setCookie(undefined, '@app:token', response.data.token);
        setCookie(undefined, '@app:useId', response.data.user.id);

        return response.data;
    }
}
/*export default class UserService {
    static async getUsers(): Promise<User[]> {
        const response = await api.get('/Users');
        return response.data;
    }

    static async login({
        email,
        password
    }: LoginRequest): Promise<LoginResponse> {
        try {
            const response: AxiosResponse<LoginResponse> = await api.post(
                '/session/login',
                { email, password }
            );
            const { token } = response.data;
            const userId = response.data.user.id;
            setCookie(undefined, '@Piupiuwer:token', token, {
                maxAge: 60 * 60 * 24
            });
            setCookie(undefined, '@app:useId', userId, {
                maxAge: 60 * 60 * 24
            });
            (api.defaults.headers as any).Authorization = `Bearer $(token)`;
            return response.data;
        } catch (err) {
            throw new Error((err as any).response.data.message);
        }
    }
} */
