import Input from 'components/InputLogin';
import Button from 'components/Button';
import { useRouter } from 'next/router';
import { useState } from 'react';

import * as S from './styles';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const router = useRouter();
    /* const handleLogin = async () => {
        try {
            await UserService.login({ email, password });
            router.push('/piupiuwer/feed');
        } catch (err) {
            setError('Incorrect password or e-mail');
            setEmail('');
            setPassword('');
        }
    };
    */
    return (
        <S.Wrapper>
            <S.Login>
                <S.ImageBack src="/assets/backArrow.svg" />
                <S.AuxII>
                    <S.LoginName>Faça Login</S.LoginName>
                    <S.Aux>
                        <S.FootText>
                            Ainda não tem uma conta?{' '}
                            <S.RecuperarSenha>Cadastre-se</S.RecuperarSenha>
                        </S.FootText>
                    </S.Aux>
                    <S.InputContainer>
                        <Input
                            Text="E-mail"
                            type=" "
                            image="/assets/Mailemail.png"
                        />
                        <Input
                            Text="Senha"
                            type="password"
                            image="/assets/password.svg"
                        />
                        <S.ErrorWrapper>{error}</S.ErrorWrapper>
                    </S.InputContainer>
                    <S.Aux>
                        <S.FootText>
                            Esqueceu a senha?{' '}
                            <S.RecuperarSenha>Recupere-a aqui</S.RecuperarSenha>
                        </S.FootText>
                    </S.Aux>
                    <S.SignInButton /* onClick={handleLogin} */>
                        ENTRAR
                    </S.SignInButton>
                </S.AuxII>
            </S.Login>
        </S.Wrapper>
    );
};
export default Login;
