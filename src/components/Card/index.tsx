import { useRouter } from 'next/router';
import CoursesService from 'services/CourseService';
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
    id
}) => {
    const router = useRouter();
    function goToCourse(CourseId: string) {
        CoursesService.getCourseById(CourseId);
        router.push('/course/');
    }
    return (
        <S.Container image={image} onClick={() => goToCourse(id)}>
            <S.SubContainer>
                <S.Left>
                    <S.Title>{textoPrincipal}</S.Title>
                    <S.Text>{subTexto}</S.Text>
                </S.Left>
                <S.Right>
                    <S.Star src="/assets/star.svg" />
                    <S.Price>
                        <S.Word>Preço:</S.Word> {price}
                    </S.Price>
                </S.Right>
            </S.SubContainer>
        </S.Container>
    );
};
export default Card;
