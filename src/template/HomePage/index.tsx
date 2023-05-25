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
            const response = await CoursesService.getRecommendedCourses();
            setCoursesArray(response);
            /* const creatVideoResponse = await CoursesService.createCourse({
                id: '131415',
                name: 'teste45',
                numberOfVideos: 200,
                avatar: 'https://hubbseguros.com.br/wp-content/uploads/2020/04/blog-2-financas.png',
                createdBy: 'Luiz',
                rating: 10,
                description: 'esse é um teste ',
                userId: '45af3d6a-c7da-4229-bf12-196c1c3e2c98',
                introVideo: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
                price: 89
            });
            */
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
