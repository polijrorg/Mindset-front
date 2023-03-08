import * as S from './styles';

export type CardCompentsProps = {
    image?: string;
    textoPrincipal: string;
    subTexto: string;
};
const Card: React.FC<CardCompentsProps> = ({
    image,
    textoPrincipal,
    subTexto
}) => (
    <S.Container>
        <S.SubContainer>
            <S.TextContainer>
                <S.Text>{textoPrincipal}</S.Text>
                <S.Text>{subTexto}</S.Text>
            </S.TextContainer>
            <S.TextContainer2>
                <S.Text>{}</S.Text>
                <S.Text>{}</S.Text>
            </S.TextContainer2>
        </S.SubContainer>
    </S.Container>
);
export default Card;
