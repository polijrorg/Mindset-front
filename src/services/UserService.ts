import { AxiosResponse } from 'axios';

import { User, InfosUser } from 'interfaces/User';
import { setCookie } from 'nookies';

import api from './api';

type ILoginRequest = (cred: {
    email: string;
    password: string;
}) => Promise<{ data: ILoginResponse }>;
interface ILoginResponse {
    token: string;
    user: User;
}
interface IRegisterRequest {
    email: string;
    password: string;
    name: string;
}
interface IDRequest {
    id: string;
}

export default class UserService {
    static login: ILoginRequest = async ({ email, password }) => {
        try {
            // const auth = getAuth();
            const response: AxiosResponse<ILoginResponse> = await api.post(
                '/sessions/login',
                { email, password }
            );

            const { token, user } = response.data;

            if (token) {
                setCookie(undefined, '@Mindset:token', token, {
                    path: '/',
                    maxAge: 60 * 60 * 24 // 1 dia
                });
                setCookie(undefined, '@Mindset:userId', user.id, {
                    path: '/',
                    maxAge: 60 * 60 * 24 // 1 dia
                });
                setCookie(undefined, '@Mindset:userName', user.name, {
                    path: '/',
                    maxAge: 60 * 60 * 24 // 1 dia
                });
                setCookie(undefined, '@Mindset:userEmail', user.email, {
                    path: '/',
                    maxAge: 60 * 60 * 24 // 1 dia
                });
                setCookie(
                    undefined,
                    '@Mindset:userType',
                    String(user.producer),
                    {
                        path: '/',
                        maxAge: 60 * 60 * 24 // 1 dia
                    }
                );

                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                (api.defaults.headers as any).Authorization = `Bearer ${token}`;
            }

            return { data: response.data };
        } catch (error) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            throw new Error((error as any).response.data.message);
        }
    };

    static async register(data: IRegisterRequest): Promise<InfosUser> {
        const responses: AxiosResponse<InfosUser> = await api.post(
            '/users/register',
            data
        );
        return responses.data;
    }

    static async findbyId(data: IDRequest): Promise<InfosUser> {
        const responses: AxiosResponse<InfosUser> = await api.get(
            `/users/${data.id}`
        );
        return responses.data;
    }
}
