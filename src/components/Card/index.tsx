import { useRouter } from 'next/router';
import * as S from './styles';

export type CardCompentsProps = {
    image: string;
    textoPrincipal: string;
    subTexto: string;
    // image: string;
};
const Card: React.FC<CardCompentsProps> = ({
    textoPrincipal,
    subTexto,
    image
}) => {
    const router = useRouter();
    const goToCourse = async () => {
        router.push('/mindset/course');
    };
    return (
        <S.Container image={image} onClick={goToCourse}>
            <S.SubContainer>
                <S.Left>
                    <S.Title>{textoPrincipal}</S.Title>
                    <S.Text>{subTexto}</S.Text>
                </S.Left>
                <S.Right>
                    <S.Star src="/assets/star.svg" />
                    <S.Price>
                        <S.Word>Preço:</S.Word> $240
                    </S.Price>
                </S.Right>
            </S.SubContainer>
        </S.Container>
    );
};
export default Card;
