import { destroyCookie } from 'nookies';
import React, { useContext, useState, createContext } from 'react';

import api from 'services/api';

import UserService from 'services/UserService';

import User from '../interfaces/User';

interface ILoginRequest {
    email: string;
    password: string;
}

interface AuthContextData {
    user: User;
    login: (data: ILoginRequest) => void;
    logout: () => void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
    const [user, setUser] = useState({} as User);

    const login = async (data: ILoginRequest) => {
        try {
            const response = await UserService.login(data);

            api.defaults.headers.common = {
                Authorization: `Bearer ${response.token}`
            };

            setUser(response.user);
        } catch (error) {
            // Errors handling
        }
    };

    const logout = () => {
        destroyCookie(undefined, '@app:token');
        destroyCookie(undefined, '@app:useId');
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export default () => useContext(AuthContext);
