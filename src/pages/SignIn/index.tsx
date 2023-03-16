import Input from 'components/InputLogin';
import { useRouter } from 'next/router';
import { useState } from 'react';

import * as S from './styles';

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const router = useRouter();
    const handleLogin = async () => {
        try {
            router.push('/mindset/login');
        } catch (err) {
            // verificar se é um email válido, senha tem requisitos?, desabilitar o botão de cadastrar até que esteja tudo ok
            setError('');
            setEmail('');
            setPassword('');
        }
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
                <S.SignInButton onClick={handleLogin}>Cadastrar</S.SignInButton>
            </S.SignIn>
            <S.FooterLogo src="/assets/logoWhite.svg" />
        </S.Wrapper>
    );
};
export default SignIn;
