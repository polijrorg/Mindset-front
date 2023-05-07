import Button from 'components/Button';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { Dropdown } from 'react-bootstrap';
import * as S from './styles';

export type headerComponentProps = {
    onclick?(): void;
};
const Header: React.FC<headerComponentProps> = () => {
    const [isHomeSelected, setIsHomeSelected] = useState(true);
    const [isFAQSelected, setIsFAQSelected] = useState(false);
    const [isWorkSelected, setIsWorkSelected] = useState(false);
    const [isSearchSelected, setSearchSelected] = useState(false);
    const [isLogado, setIsLogado] = useState(true);
    const router = useRouter();

    const onClickSearch = () => {
        setSearchSelected(!isSearchSelected);
    };
    const onClickLogado = () => {
        router.push('/mindset/login');
        setIsLogado(false);
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
        router.push('/mindset/signin');
    };

    return (
        <S.Container selected={isSearchSelected}>
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
                    {isSearchSelected ? (
                        <S.LogedWithSearch>
                            <S.SearchLogged placeholder="Buscar..." />
                            <img
                                src="/assets/LupaMini.svg"
                                alt=" "
                                width={40}
                                height={40}
                            />

                            <S.Perfil
                                src="/assets/perfil.svg"
                                onClick={onClickLogado}
                            />
                        </S.LogedWithSearch>
                    ) : (
                        <S.LogedWithSearch>
                            <S.LoginContainer onClick={onClickSearch}>
                                <S.SearchImg2
                                    src="/assets/search.svg"
                                    onClick={onClickSearch}
                                />
                                <Dropdown>
                                    <S.Perfil src="/assets/perfil.svg" />
                                </Dropdown>
                            </S.LoginContainer>
                        </S.LogedWithSearch>
                    )}
                </>
            ) : (
                <S.WrapperLogout>
                    <S.SearchContainer>
                        <S.Search placeholder="Buscar..." />
                        <img
                            src="/assets/LupaMini.svg"
                            alt=" "
                            width={40}
                            height={40}
                        />
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
