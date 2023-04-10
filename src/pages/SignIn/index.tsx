import Input from 'components/InputLogin';
import { useRouter } from 'next/router';
import { useState } from 'react';
import UserService from 'services/UserService';

import * as S from './styles';

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [error, setError] = useState('');
    const router = useRouter();
    const handleLogin = async () => {
        try {
            router.push('/mindset/login');
        } catch (err) {
            setError('');
            setEmail('');
            setPassword('');
        }
    };

    const handleSignIn = async () => {
        UserService.signIn({ phone: '123456' });

        router.push('/mindset/login');
    };
    return (
        <S.Wrapper>
            <S.ImageBack src="/assets/backArrow.svg" />
            <S.SignIn>
                <S.AuxII>
                    <S.LoginName>Cadastre-se</S.LoginName>
                    <S.GeneralText>
                        Já tem uma conta?{' '}
                        <S.RecuperarSenha onClick={handleLogin}>
                            Faça Login
                        </S.RecuperarSenha>
                    </S.GeneralText>
                    <S.InputContainer>
                        <Input
                            isPassword={false}
                            Text="Nome"
                            type="text"
                            image="/assets/whitepersonicon.svg"
                        />
                        <Input
                            isPassword={false}
                            Text="E-mail"
                            type="text"
                            image="/assets/Mail.svg"
                        />
                        <Input
                            isPassword
                            Text="Senha"
                            type="password"
                            image="/assets/password.svg"
                        />
                        <S.ErrorWrapper>{error}</S.ErrorWrapper>
                    </S.InputContainer>
                </S.AuxII>
                <S.SignInButton onClick={handleSignIn}>
                    Cadastrar
                </S.SignInButton>
            </S.SignIn>
            <S.FooterLogo src="/assets/logoWhite.svg" />
        </S.Wrapper>
    );
};
export default SignIn;
