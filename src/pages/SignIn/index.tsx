import { useRouter } from 'next/router';
import { SetStateAction, useState } from 'react';
import UserService from 'services/UserService';

import * as S from './styles';

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const router = useRouter();
    const [isPasswordShown, setPasswordShow] = useState('password');

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
            UserService.signIn({
                name,
                email,
                password
            }).then(() => {
                router.push('/mindset/login');
            });
        } catch (err) {
            setEmail('');
            setPassword('');
            setName('');
        }
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
                        <S.RecuperarSenha
                            onClick={() => router.push('/mindset/login')}
                        >
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
                <S.SignInButton onClick={handleSignIn}>
                    Cadastrar
                </S.SignInButton>
            </S.SignIn>
            <S.FooterLogo src="/assets/logoWhite.svg" />
        </S.Wrapper>
    );
};
export default SignIn;

/* 
> git -c user.useConfigOnly=true commit --quiet --allow-empty-message --file -
[STARTED] Preparing...
[SUCCESS] Preparing...
[STARTED] Running tasks...
[STARTED] Running tasks for *.ts(x)?
[STARTED] yarn lint --fix
[FAILED] yarn lint --fix [FAILED]
[FAILED] yarn lint --fix [FAILED]
[SUCCESS] Running tasks...
[STARTED] Applying modifications...
[SKIPPED] Skipped because of errors from tasks.
[STARTED] Reverting to original state because of errors...
[SUCCESS] Reverting to original state because of errors...
[STARTED] Cleaning up...
[SUCCESS] Cleaning up...

✖ yarn lint --fix:
ESLint found too many warnings (maximum: 0).
error Command failed with exit code 1.
yarn run v1.22.19
$ eslint src --max-warnings=0 --fix C:/Users/annak/Downloads/Mindset-front/src/components/Card/index.tsx C:/Users/annak/Downloads/Mindset-front/src/components/Header1/index.tsx C:/Users/annak/Downloads/Mindset-front/src/components/Header1/styles.ts C:/Users/annak/Downloads/Mindset-front/src/interfaces/Courses.ts C:/Users/annak/Downloads/Mindset-front/src/pages/Home/index.tsx C:/Users/annak/Downloads/Mindset-front/src/pages/Home/styles.ts C:/Users/annak/Downloads/Mindset-front/src/pages/HomePage/index.tsx C:/Users/annak/Downloads/Mindset-front/src/pages/Login/index.tsx C:/Users/annak/Downloads/Mindset-front/src/pages/index.tsx C:/Users/annak/Downloads/Mindset-front/src/pages/mindset/homePublic.tsx


C:\Users\annak\Downloads\Mindset-front\src\services\UserService.ts
  46:38  warning  Unexpected any. Specify a different type  @typescript-eslint/no-explicit-any
  49:37  warning  Unexpected any. Specify a different type  @typescript-eslint/no-explicit-any

✖ 6 problems (0 errors, 6 warnings)

info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
husky - pre-commit hook exited with code 1 (error)

*/
