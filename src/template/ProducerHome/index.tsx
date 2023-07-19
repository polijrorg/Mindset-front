import Footer from 'components/Footer';
import Header from 'components/Header';
import { Courses } from 'interfaces/Courses';
import Card from 'components/Card';
import CoursesService from 'services/CourseService';
import Button from 'components/Button';
import { useEffect, useState } from 'react';
import * as S from './styles';

const ProducerHome = () => {
    const [isCourseSelected, setCourseSelected] = useState(true);
    const [isInProgressSelected, setProgressSelected] = useState(false);
    const [isRecordedSelected, setRecordedSelected] = useState(false);
    const [coursesArray, setCoursesArray] = useState<Courses[]>([]);
    const [recordedCoursesArray, setRecordedCoursesArray] = useState<Courses[]>(
        []
    );
    const [inProgressCoursesArray, setInProgressCoursesArray] = useState<
        Courses[]
    >([]);
    const [token, setToken] = useState<string | null>();
    useEffect(() => {
        setToken(localStorage.getItem('mindset:token'));
        const asyncFunction = async () => {
            const courseResponse = await CoursesService.getRecommendedCourses();
            setCoursesArray(courseResponse);

            const producerResponse = await CoursesService.getProducerCourse(
                String(token)
            );
            setRecordedCoursesArray(producerResponse);

            const inProgressResponse = await CoursesService.getStartedCourses(
                String(token)
            );
            setInProgressCoursesArray(inProgressResponse);
        };
        asyncFunction();
    }, [token]);
    return (
        <S.Wrapper>
            <Header />
            <S.BackgrounImg src="/assets/background1.svg" />
            <S.MainContainer>
                <S.Perfil src="/assets/test-img.svg" />
                <S.Text>{localStorage.getItem('mindset:name')}</S.Text>
                <Button Text="Ver minhas informações" type2 selected={false} />
                <S.ButtonsWrapper>
                    <S.Button
                        selected={isCourseSelected}
                        onClick={() => {
                            setProgressSelected(false);
                            setCourseSelected(true);
                            setRecordedSelected(false);
                        }}
                    >
                        Seus cursos
                    </S.Button>
                    <S.Button
                        selected={isInProgressSelected}
                        onClick={() => {
                            setProgressSelected(true);
                            setCourseSelected(false);
                            setRecordedSelected(false);
                        }}
                    >
                        Cursos em progresso
                    </S.Button>
                    <S.Button
                        selected={isRecordedSelected}
                        onClick={() => {
                            setProgressSelected(false);
                            setCourseSelected(false);
                            setRecordedSelected(true);
                        }}
                    >
                        Cursos gravados
                    </S.Button>
                </S.ButtonsWrapper>
                {isCourseSelected ? (
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
                ) : null}
                {isInProgressSelected ? (
                    <S.CardsContainer>
                        {inProgressCoursesArray.map((course) => (
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
                ) : null}
                {isRecordedSelected ? (
                    <S.CardsContainer>
                        {recordedCoursesArray.map((course) => (
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
                ) : null}
            </S.MainContainer>
            <Footer />
        </S.Wrapper>
    );
};

export default ProducerHome;
