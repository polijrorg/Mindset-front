import Button from 'components/Button';
import { useEffect, useState } from 'react';
import * as S from './styles';

export type headerComponentProps = {
    logo: string;
    searchSelected?: boolean;
    logado?: boolean;
};
const Header: React.FC<headerComponentProps> = ({
    logo,
    searchSelected,
    logado
}) => {
    return (
        <S.Container>
            <S.Logo src={logo} />
            {searchSelected ? (
                <S.SearchContainer>
                    <S.SearchImg src="/assets/search.svg" />
                    <S.Search placeholder="Buscar..." />
                </S.SearchContainer>
            ) : (
                <>
                    <S.Container1>
                        <Button selected type2={false} Text="Home" />
                        <Button selected={false} type2={false} Text="FAQ" />
                        <Button
                            selected={false}
                            type2={false}
                            Text="Trabalhe Conosco"
                        />
                    </S.Container1>
                </>
            )}
            <S.LoginContainer>
                <S.LoginContainer2>
                    <S.LoginImage src="assets/PersonYellow.png" />
                    <Button selected={false} type2={false} Text="ENTRAR" />
                </S.LoginContainer2>
                <Button selected={false} type2 Text="CRIAR CONTA" />
            </S.LoginContainer>
        </S.Container>
    );
};
export default Header;
