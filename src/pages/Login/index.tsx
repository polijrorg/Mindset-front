import Input from 'components/InputLogin';
import { useRouter } from 'next/router';
import { useState } from 'react';

import * as S from './styles';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const router = useRouter();
    const handleLogin = async () => {
        try {
            router.push('/mindset/home');
        } catch (err) {
            setError('Incorrect password or e-mail');
            setEmail('');
            setPassword('');
        }
    };
    const handleSignin = async () => {
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
                        <S.RecuperarSenha onClick={handleSignin}>
                            Cadastre-se
                        </S.RecuperarSenha>
                    </S.GeneralText>
                    <S.InputContainer>
                        <Input
                            isPassword={false}
                            Text="E-mail"
                            type=" "
                            image="/assets/Mailemail.png"
                        />
                        <S.ForgotPassword>
                            <Input
                                isPassword
                                Text="Senha"
                                type="password"
                                image="/assets/password.svg"
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
