import { useRouter } from 'next/router';
import { SetStateAction, useState, useEffect } from 'react';
import UserService from 'services/UserService';

import * as S from './styles';

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const router = useRouter();
    const [isPasswordShown, setPasswordShow] = useState('password');
    const [isDisable, setIsDisable] = useState(true);

    useEffect(() => {
        if ((email.length && password.length) === 0) {
            setIsDisable(true);
        } else {
            setIsDisable(false);
        }
    }, [email, password]);
    const handleChangeEmail = (e: {
        target: { value: SetStateAction<string> };
    }) => {
        setEmail(e.target.value);
    };
    const handleChangeName = (e: {
        target: { value: SetStateAction<string> };
    }) => {
        setName(e.target.value);
    };
    const handleChangePassword = (e: {
        target: { value: SetStateAction<string> };
    }) => {
        setPassword(e.target.value);
    };
    const handlePasswordShow = () => {
        if (isPasswordShown === 'text') {
            setPasswordShow('password');
        } else {
            setPasswordShow('text');
        }
    };

    const handleSignIn = async () => {
        try {
            UserService.registerClient({
                name,
                email,
                password
            }).then(() => {
                router.push('/login');
            });
        } catch (err) {
            setEmail('');
            setPassword('');
            setName('');
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
                        <S.RecuperarSenha onClick={() => router.push('/login')}>
                            Faça Login
                        </S.RecuperarSenha>
                    </S.GeneralText>
                    <S.InputContainer>
                        <S.Container>
                            <S.Input
                                placeholder="Nome"
                                onChange={handleChangeName}
                            />
                            <S.Image src="/assets/whitepersonicon.svg" />
                        </S.Container>
                        <S.Container>
                            <S.Input
                                placeholder="E-mail"
                                onChange={handleChangeEmail}
                            />
                            <S.Image src="/assets/Mail.svg" />
                        </S.Container>
                        <S.Container>
                            <S.Input
                                placeholder="Senha"
                                type={isPasswordShown}
                                onChange={handleChangePassword}
                            />
                            <S.Image
                                src="/assets/password.svg"
                                onClick={handlePasswordShow}
                            />
                        </S.Container>
                    </S.InputContainer>
                </S.AuxII>
                <S.SignInButton
                    onClick={handleSignIn}
                    disabled={isDisable}
                    disable={isDisable}
                >
                    Cadastrar
                </S.SignInButton>
            </S.SignIn>
            <S.FooterLogo src="/assets/logoWhite.svg" />
        </S.Wrapper>
    );
};
export default SignIn;
