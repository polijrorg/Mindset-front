import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import UserService from 'services/UserService';
import Transition from 'template/Transition';
import * as S from './styles';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
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
    const handleLogin = async () => {
        try {
            setIsLoading(true);
            await UserService.login({
                email,
                password
            }).then(() => {
                router.push('/');
                setIsLoading(false);
            });
        } catch (err) {
            setIsLoading(false);
            setError('email ou senha errados');
            router.push('/login');
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        }
        setIsLoading(false);
    };
    return isLoading ? (
        <Transition />
    ) : (
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
                    <text style={{ color: '#eeac0e', fontSize: '14px' }}>
                        {error}
                    </text>
                    <S.Checkbox>
                        <S.InputCheckbox type="checkbox" />
                        <span>Lembrar de mim</span>
                    </S.Checkbox>
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
