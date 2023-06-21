import { useRouter } from 'next/router';
import RatingComponent from 'components/Rating';
import * as S from './styles';

export type CardCompentsProps = {
    image: string;
    textoPrincipal: string;
    subTexto: string;
    price: string;
    rating: number;
    id: string;
};
const Card: React.FC<CardCompentsProps> = ({
    textoPrincipal,
    subTexto,
    image,
    price,
    id,
    rating
}) => {
    const router = useRouter();
    function goToCourse(CourseId: string) {
        router.push(`/course/${CourseId}`);
    }
    return (
        <S.Container image={image} onClick={() => goToCourse(id)}>
            <S.SubContainer>
                <S.Left>
                    <S.Title>{textoPrincipal}</S.Title>
                    <S.Text>{subTexto}</S.Text>
                </S.Left>
                <S.Right>
                    <RatingComponent initialValue={rating} onCard />
                    <S.Price>
                        <S.Word>Preço:</S.Word> {price}
                    </S.Price>
                </S.Right>
            </S.SubContainer>
        </S.Container>
    );
};
export default Card;
