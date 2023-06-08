import Card from 'components/Card';
import { useEffect, useState } from 'react';
import { Courses } from 'interfaces/Courses';
import * as S from './styles';

// precisa receber um vetor de cursos, e então a barra de pesquisa será redicercionada para ele
const SearchResults: React.FC<{ courses: Courses[] }> = ({ courses }) => {
    const [coursesArray, setCoursesArray] = useState<Courses[]>([]);

    useEffect(() => {
        setCoursesArray(courses);
    }, [courses]);

    return (
        <S.Container style={{ gap: '8' }}>
            <S.SubContainer>
                <S.TitleContainer>
                    <S.Title2>Cursos em alta</S.Title2>
                </S.TitleContainer>
                <S.CardsContainer>
                    {coursesArray.map((course) => (
                        <Card
                            key={course.id}
                            image={course.avatar}
                            subTexto={course.description}
                            textoPrincipal={course.name}
                            price={course.price}
                            id={course.id}
                            rating={course.rating}
                        />
                    ))}
                </S.CardsContainer>
            </S.SubContainer>
        </S.Container>
    );
};

export default SearchResults;
