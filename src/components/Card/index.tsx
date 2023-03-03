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
    <S.Wrapper>
        <S.Container>
            <S.Image src={image} alt="imagem" />
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
    </S.Wrapper>
);
export default Card;
