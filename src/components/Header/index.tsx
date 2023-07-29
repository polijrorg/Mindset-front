import Button from 'components/Button';
import { useRouter } from 'next/router';
import React, { useState, useContext } from 'react';
import SearchBar from 'components/SearchBar';
import useAuth from 'hooks/useAuth';
import { FetchCourses } from 'hooks/useFetchCourses';
import * as S from './styles';

export type headerComponentProps = {
    onclick?(): void;
};
const Header: React.FC<headerComponentProps> = () => {
    const [isHomeSelected, setIsHomeSelected] = useState(true);
    const [isWorkSelected, setIsWorkSelected] = useState(false);
    const [isDropdownSelected, setDropdownSelected] = useState(false);
    const { logout, infosuser } = useAuth();
    const { backToPage } = useContext(FetchCourses);
    const router = useRouter();

    const onCLickDropdown = () => {
        setDropdownSelected(!isDropdownSelected);
    };
    const onClickHome = () => {
        setIsWorkSelected(false);
        setIsHomeSelected(true);
        backToPage();
        router.push('/');
    };
    const onClickWork = () => {
        setIsHomeSelected(false);
        setIsWorkSelected(true);
        backToPage();
        router.push('/produtor');
    };
    return infosuser.id ? (
        <S.Container>
            <S.Logo
                onClick={() => {
                    router.push('/');
                    backToPage();
                }}
            />
            <>
                <S.Container1>
                    <Button
                        onclick={onClickHome}
                        selected={isHomeSelected}
                        type2={false}
                        Text="Home"
                    />
                    <Button
                        onclick={onClickWork}
                        selected={isWorkSelected}
                        type2={false}
                        Text="Seja um produtor"
                    />
                </S.Container1>
                <S.LoginContainer>
                    <SearchBar />
                    <S.Dropdown onClick={onCLickDropdown}>
                        <S.Perfil src="/assets/test-img.svg" />
                        {isDropdownSelected ? (
                            <S.DropdownMenu>
                                <S.DropdownItem onClick={() => logout()}>
                                    Logout
                                </S.DropdownItem>
                            </S.DropdownMenu>
                        ) : null}
                    </S.Dropdown>
                </S.LoginContainer>
            </>
        </S.Container>
    ) : (
        <S.Container>
            <S.Logo
                onClick={() => {
                    router.push('/');
                    backToPage();
                }}
            />
            <SearchBar />
            <S.LoginContainer>
                <S.LoginImage src="/assets/Personyello.svg" />
                <Button
                    onclick={() => router.push('/login')}
                    selected={false}
                    type2
                    Text="ENTRAR"
                />
                <Button
                    selected={false}
                    type2
                    Text="CRIAR CONTA"
                    onclick={() => router.push('/register')}
                />
            </S.LoginContainer>
        </S.Container>
    );
};
export default Header;
