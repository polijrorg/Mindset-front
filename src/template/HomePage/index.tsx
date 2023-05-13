import Footer from 'components/Footer';
import Header from 'components/Header';
import Card from 'components/Card';
import { useEffect, useState } from 'react';
import { Courses } from 'interfaces/Courses';
import CoursesService from 'services/CourseService';
import * as S from './styles';

const HomePage = () => {
    const [coursesArray, setCoursesArray] = useState<Courses[]>([]);

    useEffect(() => {
        const asyncFunction = async () => {
            const response = await CoursesService.getCourses();
            setCoursesArray(response);
        };
        asyncFunction();
    }, []);

    return (
        <S.Wrapper>
            <Header />
            <S.Container>
                <S.SubContainer>
                    <S.TitleContainer>
                        <S.Title2>Cursos em progresso</S.Title2>
                    </S.TitleContainer>
                    <S.CardsContainer>
                        {/* COLOCAR OS CURSOS EM PROGRESSO */}
                    </S.CardsContainer>
                </S.SubContainer>
            </S.Container>
            <S.Container>
                <S.SubContainer style={{ gap: '8' }}>
                    <S.TitleContainer>
                        <S.Title2>Seus cursos</S.Title2>
                    </S.TitleContainer>
                    <S.CardsContainer style={{ gap: '8' }}>
                        {/* COLOCAR OS CURSOS COMPRADOS */}
                    </S.CardsContainer>
                </S.SubContainer>
            </S.Container>
            <S.Container style={{ gap: '8' }}>
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
                                price="240"
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

export default HomePage;
