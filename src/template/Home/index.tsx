import Footer from 'components/Footer';
import PublicHeader from 'components/Header1';
import Card from 'components/Card';
import { useEffect, useState } from 'react';
import { Courses } from 'interfaces/Courses';
import CoursesService from 'services/CourseService';
import * as S from './styles';

const PublicHome = () => {
    const [coursesArray, setCoursesArray] = useState<Courses[]>([]);
    useEffect(() => {
        const asyncFunction = async () => {
            const response = await CoursesService.getRecommendedCourses();
            setCoursesArray(response);
        };
        asyncFunction();
    }, []);

    return (
        <S.Wrapper>
            <PublicHeader />
            <S.BackgroundImage src="/assets/background1.svg" alt="background" />
            <S.Container>
                <S.TextContainer>
                    <S.Title>Bem-Vindo à Mindset</S.Title>
                    <S.Text>aprenda o que quiser, quando quiser</S.Text>
                </S.TextContainer>
                <S.SubContainer>
                    <S.TitleContainer>
                        <S.Title2>Cursos em alta</S.Title2>
                    </S.TitleContainer>
                    <S.CardsContainer>
                        {coursesArray.map((course) => (
                            <Card
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
            <Footer />
        </S.Wrapper>
    );
};

export default PublicHome;
