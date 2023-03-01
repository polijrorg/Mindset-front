import Button from 'components/Button';
import * as S from './styles';

export type headerComponentProps = {
    Logo: string;
    SearchSelected?: boolean;
    logado?: boolean;
};
const Header: React.FC<headerComponentProps> = ({
    Logo,
    SearchSelected,
    logado
}) => (
    <S.Container>
        <S.Logo src="\mindsetassets\LogoPng.png" />
        {!SearchSelected || !logado ? (
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
            <S.Container1>
                <S.LoginImage src="/assets/PersonYellow.png" />
                <Button type2={false} Text="Entrar" />
            </S.Container1>
            <Button type2 Text="Criar Conta" />
        </S.LoginContainer>
    </S.Container>
);
export default Header;
