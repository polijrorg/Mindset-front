import Button from 'components/Button';
import { useState } from 'react';
import { useRouter } from 'next/router';
import UserService from 'services/UserService';
import SearchBar from 'components/SearchBar';
import * as S from './styles';

export type headerComponentProps = {
    onclick?(): void;
};
const Header: React.FC<headerComponentProps> = () => {
    const [isHomeSelected, setIsHomeSelected] = useState(true);
    const [isFAQSelected, setIsFAQSelected] = useState(false);
    const [isWorkSelected, setIsWorkSelected] = useState(false);
    const [isDropdownSelected, setDropdownSelected] = useState(false);
    const router = useRouter();

    const handleLogout = () => {
        UserService.logout();
        router.push('/');
    };
    const onCLickDropdown = () => {
        setDropdownSelected(!isDropdownSelected);
    };
    const onClickHome = () => {
        setIsFAQSelected(false);
        setIsWorkSelected(false);
        setIsHomeSelected(true);
        router.push('/');
    };
    const onClickFAQ = () => {
        setIsWorkSelected(false);
        setIsHomeSelected(false);
        setIsFAQSelected(true);
        router.push('/faq');
    };
    const onClickWork = () => {
        setIsFAQSelected(false);
        setIsHomeSelected(false);
        setIsWorkSelected(true);
        router.push('/trabalhe-conosco');
    };
    return (
        <S.Container>
            <S.Logo onClick={() => router.push('/')} />
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
                    <SearchBar />

                    <S.Dropdown onClick={onCLickDropdown}>
                        <S.Perfil src="/assets/test-img.svg" />
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
        </S.Container>
    );
};
export default Header;
