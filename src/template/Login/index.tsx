import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
import { Checkbox } from '@mui/material';
import useAuth from 'hooks/useAuth';
import Transition from 'template/Transition';
import * as S from './styles';

const Login: React.FC = () => {
    const { login, errorLogin } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();
    const [isDisable, setIsDisable] = useState(true);
    const [isPasswordShown, setPasswordShow] = useState('password');

    const handlePasswordShow = () => {
        if (isPasswordShown === 'text') {
            setPasswordShow('password');
        } else {
            setPasswordShow('text');
        }
    };
    useEffect(() => {
        if ((email.length && password.length) === 0) {
            setIsDisable(true);
        } else {
            setIsDisable(false);
        }
    }, [email, password]);
    const handleLogin = (e: { preventDefault: () => void }) => {
        e.preventDefault();
        login({ email, password });
    };
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 3000);
    }, []);
    if (isLoading) {
        return <Transition />;
    }
    return (
        <S.Wrapper>
            <S.ImageBack
                src="/assets/backArrow.svg"
                onClick={() => router.push('/')}
            />
            <S.Login>
                <S.AuxII>
                    <S.LoginName>Faça Login</S.LoginName>
                    <S.GeneralText>
                        Ainda não tem uma conta?{' '}
                        <S.RecuperarSenha
                            onClick={() => router.push('/register')}
                        >
                            Cadastre-se
                        </S.RecuperarSenha>
                    </S.GeneralText>
                    <S.InputContainer>
                        <S.Container>
                            <S.Input
                                placeholder="E-mail"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <S.Image src="/assets/Mail.svg" />
                        </S.Container>
                        <br />
                        <br />
                        <br />
                        <S.ForgotPassword>
                            <S.Container>
                                <S.Input
                                    placeholder="Senha"
                                    type={isPasswordShown}
                                    value={password}
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                />
                                <S.Image
                                    src="/assets/password.svg"
                                    onClick={handlePasswordShow}
                                />
                            </S.Container>
                            <S.GeneralText>
                                <br />
                                Esqueceu a senha?{' '}
                                <S.RecuperarSenha>
                                    Recupere-a aqui
                                </S.RecuperarSenha>
                            </S.GeneralText>
                        </S.ForgotPassword>
                    </S.InputContainer>
                    <S.Error visible={errorLogin}>
                        Usuário ou senha incorreto
                    </S.Error>
                    <S.AuxI>
                        <Checkbox
                            defaultChecked
                            color="primary"
                            style={{
                                width: '24px',
                                height: '24px',
                                color: '#eeac0e'
                            }}
                        />
                        <S.GeneralText>Lembrar de mim</S.GeneralText>
                    </S.AuxI>

                    <S.LoginButton
                        onClick={handleLogin}
                        disabled={isDisable}
                        disable={isDisable}
                    >
                        ENTRAR
                    </S.LoginButton>
                </S.AuxII>
            </S.Login>
            <S.FooterLogo src="/assets/logoWhite.svg" />
        </S.Wrapper>
    );
};
export default Login;
