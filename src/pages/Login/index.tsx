import { useRouter } from 'next/router';
import { useState } from 'react';
import UserService from 'services/UserService';
import Transition from 'pages/Transition';
import * as S from './styles';

const Login = () => {
    const [email, setEmail] = useState('');
    const [isLoading, setLoading] = useState(false);
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const router = useRouter();
    const [isPasswordShown, setPasswordShow] = useState('password');

    const handlePasswordShow = () => {
        if (isPasswordShown === 'text') {
            setPasswordShow('password');
        } else {
            setPasswordShow('text');
        }
    };
    const handleLogin = async () => {
        try {
            setLoading(true);
            const response = await UserService.login({ email, password });
            if (!response.token) {
                setLoading(false);
                setError('e-mail ou senha errados');
            } else {
                router.push('/mindset/home/');
                setLoading(false);
            }
        } catch (err) {
            setError('email ou senha errados');
            setEmail('');
            setPassword('');
        }
    };

    return isLoading ? (
        <Transition />
    ) : (
        <S.Wrapper>
            <S.ImageBack src="/assets/backArrow.svg" />
            <S.Login>
                <S.AuxII>
                    <S.LoginName>Faça Login</S.LoginName>
                    <S.GeneralText>
                        Ainda não tem uma conta?{' '}
                        <S.RecuperarSenha
                            onClick={() => router.push('/mindset/signin')}
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
                        <S.GeneralText>{error}</S.GeneralText>
                    </S.InputContainer>
                    <S.Checkbox>
                        <S.InputCheckbox type="checkbox" />
                        <span>Lembrar de mim</span>
                    </S.Checkbox>
                    <S.SignInButton onClick={handleLogin}>
                        ENTRAR
                    </S.SignInButton>
                </S.AuxII>
            </S.Login>
            <S.FooterLogo src="/assets/logoWhite.svg" />
        </S.Wrapper>
    );
};
export default Login;
