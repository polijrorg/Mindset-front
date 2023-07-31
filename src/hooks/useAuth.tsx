import { useRouter } from 'next/router';
import { destroyCookie, parseCookies } from 'nookies';
import React, { useState, createContext, useContext, useEffect } from 'react';
import UserService from 'services/UserService';
import { InfosUser } from 'interfaces/User';

interface ILoginRequest {
    email: string;
    password: string;
}

interface IRegisterRequest {
    email: string;
    password: string;
    name: string;
}

interface AuthContextData {
    infosuser: InfosUser;
    login: (data: ILoginRequest) => void;
    logout: () => void;
    errorLogin: boolean;
    errorRegister: string;
    register: (data: IRegisterRequest) => void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
    const navigation = useRouter();
    const [infosuser, setInfosUser] = useState({} as InfosUser);
    const [errorLogin, seterrorLogin] = useState(false);
    const [errorRegister, seterrorRegister] = useState('');

    useEffect(() => {
        const getRecentUserData = async () => {
            const { '@Mindset:userId': userId } = parseCookies();
            const { '@Mindset:userName': userName } = parseCookies();
            const { '@Mindset:userEmail': userEmail } = parseCookies();
            const { '@Mindset:userType': userType } = parseCookies();
            /* console.log('useAuth: ', userId, userName, userEmail, userType); */
            setInfosUser({
                // precisa ter uma rota com o get user que devolve os dados do usuário quando passo o id dele
                id: userId,
                name: userName,
                /* photo: string;
                cartao: string; */
                email: userEmail,
                producer: Boolean(userType)
            });
        };
        getRecentUserData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const login = async (data: ILoginRequest) => {
        try {
            const response = await UserService.login(data);
            if (response.data.token) {
                seterrorLogin(false);
            }
            if (!response.data.token) {
                seterrorLogin(true);
                return;
            }
            if (infosuser.producer) {
                navigation.push('/producer/home');
            } else {
                navigation.push('/student/home');
            }
        } catch (error) {
            navigation.push('/login');
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            seterrorLogin(true);
        }
    };

    const logout = async () => {
        destroyCookie(undefined, '@Mindset:token', {
            path: '/' // THE KEY IS TO SET THE SAME PATH
        });
        destroyCookie(undefined, '@Mindset:userId', {
            path: '/' // THE KEY IS TO SET THE SAME PATH
        });
        destroyCookie(undefined, '@Mindset:userName', {
            path: '/' // THE KEY IS TO SET THE SAME PATH
        });
        destroyCookie(undefined, '@Mindset:userEmail', {
            path: '/' // THE KEY IS TO SET THE SAME PATH
        });
        destroyCookie(undefined, '@Mindset:userType', {
            path: '/' // THE KEY IS TO SET THE SAME PATH
        });
        setInfosUser({} as InfosUser);
        navigation.push('/');
    };

    const register = async (data: IRegisterRequest) => {
        try {
            await UserService.register(data);
            seterrorRegister('');
            navigation.push('/login');
        } catch (error) {
            seterrorRegister((error as Error).message);
            /* console.log((error as Error).message); */
            navigation.push('/register');
        }
    };

    return (
        <AuthContext.Provider
            value={{
                infosuser,
                login,
                logout,
                errorLogin,
                errorRegister,
                register
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

const useAuth = () => useContext(AuthContext);
export default useAuth;
