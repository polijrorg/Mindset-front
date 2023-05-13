import Button from 'components/Button';
import { useState } from 'react';
import { useRouter } from 'next/router';
import * as S from './styles';

export type headerComponentProps = {
    onclick?(): void;
};
const Header: React.FC<headerComponentProps> = () => {
    const [isHomeSelected, setIsHomeSelected] = useState(true);
    const [isFAQSelected, setIsFAQSelected] = useState(false);
    const [isWorkSelected, setIsWorkSelected] = useState(false);
    const [isLogado, setIsLogado] = useState(true);
    const [isDropdownSelected, setDropdownSelected] = useState(false);
    const router = useRouter();

    const handleLogout = () => {
        router.push('/mindset/login');
        setIsLogado(false);
    };
    const onCLickDropdown = () => {
        setDropdownSelected(!isDropdownSelected);
    };
    const onClickHome = () => {
        setIsFAQSelected(false);
        setIsWorkSelected(false);
        setIsHomeSelected(true);
        router.push('/mindset/home');
    };
    const onClickFAQ = () => {
        setIsWorkSelected(false);
        setIsHomeSelected(false);
        setIsFAQSelected(true);
        router.push('/mindset/faq');
    };
    const onClickWork = () => {
        setIsFAQSelected(false);
        setIsHomeSelected(false);
        setIsWorkSelected(true);
        router.push('/mindset/trabalhe-conosco');
    };
    const handleLogin = async () => {
        router.push('/mindset/login');
    };
    const handleSignin = async () => {
        router.push('/mindset/register');
    };

    return (
        <S.Container>
            <S.Logo />
            {isLogado ? (
                <>
                    <S.Container1>
                        <Button
                            onclick={onClickHome}
                            selected={isHomeSelected}
                            type2={false}
                            Text="Home"
                        />
                        <Button
                            onclick={onClickFAQ}
                            selected={isFAQSelected}
                            type2={false}
                            Text="FAQ"
                        />
                        <Button
                            onclick={onClickWork}
                            selected={isWorkSelected}
                            type2={false}
                            Text="Trabalhe Conosco"
                        />
                    </S.Container1>
                    <S.LoginContainer>
                        <S.LogedWithSearch>
                            <S.SearchButton>
                                <S.SearchLogged placeholder="Buscar..." />
                                <img
                                    src="/assets/blackSearch.svg"
                                    alt=" "
                                    width={30}
                                    height={24}
                                />
                            </S.SearchButton>
                        </S.LogedWithSearch>
                        <S.Dropdown onClick={onCLickDropdown}>
                            <S.Perfil src="/assets/perfil.svg" />
                            {isDropdownSelected ? (
                                <S.DropdownMenu>
                                    <S.DropdownItem onClick={handleLogout}>
                                        Logout
                                    </S.DropdownItem>
                                </S.DropdownMenu>
                            ) : null}
                        </S.Dropdown>
                    </S.LoginContainer>
                </>
            ) : (
                <S.WrapperLogout>
                    <S.SearchContainer>
                        <S.SearchButton>
                            <S.SearchLogged placeholder="Buscar..." />
                            <img
                                src="/assets/blackSearch.svg"
                                alt=" "
                                width={30}
                                height={24}
                            />
                        </S.SearchButton>
                    </S.SearchContainer>
                    <S.LoginContainer>
                        <S.LoginContainer>
                            <S.LoginImage src="/assets/Personyello.svg" />
                            <Button
                                onclick={handleLogin}
                                selected={false}
                                type2={false}
                                Text="ENTRAR"
                            />
                        </S.LoginContainer>
                        <Button
                            selected={false}
                            type2
                            Text="CRIAR CONTA"
                            onclick={handleSignin}
                        />
                    </S.LoginContainer>
                </S.WrapperLogout>
            )}
        </S.Container>
    );
};
export default Header;
