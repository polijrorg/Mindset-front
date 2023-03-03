import Button from 'components/Button';
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
}) => (
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
                    <Button type2={false} Text="Home" />
                    <Button type2={false} Text="FAQ" />
                    <Button type2={false} Text="Trabalhe Conosco" />
                </S.Container1>
            </>
        )}
        <S.LoginContainer>
            <S.LoginContainer2>
                <S.LoginImage src="assets/PersonYellow.png" />
                <Button type2={false} Text="Entrar" />
            </S.LoginContainer2>
            <Button type2 Text="Criar Conta" />
        </S.LoginContainer>
    </S.Container>
);
export default Header;
