import Input from 'components/InputLogin';
import { useRouter } from 'next/router';
import { SetStateAction, useState } from 'react';
import UserService from 'services/UserService';
import * as S from './styles';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const router = useRouter();

    const handleChangeEmail = (e: {
        target: { value: SetStateAction<string> };
    }) => {
        setEmail(e.target.value);
        console.log(email);
    };
    const handleChangePassword = (e: {
        target: { value: SetStateAction<string> };
    }) => {
        setPassword(e.target.value);
        console.log(password);
    };

    const handleLogin = async () => {
        try {
            UserService.login({
                email,
                password
            });
            router.push('/mindset/home');
        } catch {
            router.push('/mindset/login');
            setPassword('');
            setEmail('');
            setError('E-mail ou senha errada');
        }
    };
    const goToSignIn = async () => {
        router.push('/mindset/signin');
    };
    return (
        <S.Wrapper>
            <S.ImageBack src="/assets/backArrow.svg" />
            <S.Login>
                <S.AuxII>
                    <S.LoginName>Faça Login</S.LoginName>
                    <S.GeneralText>
                        Ainda não tem uma conta?{' '}
                        <S.RecuperarSenha onClick={goToSignIn}>
                            Cadastre-se
                        </S.RecuperarSenha>
                    </S.GeneralText>
                    <S.InputContainer>
                        <input
                            type="text"
                            placeholder="E-mail"
                            value={email}
                            onChange={handleChangeEmail}
                        />
                        <S.ForgotPassword>
                            <input
                                placeholder="Senha"
                                type="password"
                                value={password}
                                onChange={handleChangePassword}
                            />
                            <S.GeneralText>
                                Esqueceu a senha?{' '}
                                <S.RecuperarSenha>
                                    Recupere-a aqui
                                </S.RecuperarSenha>
                            </S.GeneralText>
                        </S.ForgotPassword>
                        <S.ErrorWrapper>{error}</S.ErrorWrapper>
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
