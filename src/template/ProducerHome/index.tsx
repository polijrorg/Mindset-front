import Footer from 'components/Footer';
import Header from 'components/Header';
import Card from 'components/Card';
import Transition from 'template/Transition';
import AddVideoCard from 'components/AddVideoCard';
import Button from 'components/Button';
import { useState, useEffect } from 'react';
import useFetch from 'hooks/useFetchCourses';
import useAuth from 'hooks/useAuth';
import * as S from './styles';

const ProducerHome = () => {
    const { infosuser } = useAuth();
    const {
        privateCoursesArray,
        inProgressCoursesArray,
        recordedCoursesArray
    } = useFetch();
    const [isCourseSelected, setCourseSelected] = useState(true);
    const [isInProgressSelected, setProgressSelected] = useState(false);
    const [isRecordedSelected, setRecordedSelected] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 3000);
    }, []);
    if (isLoading) {
        return <Transition />;
    }
    return (
        <S.Wrapper>
            <Header />
            <S.BackgrounImg src="/assets/background1.svg" />
            <S.MainContainer>
                <S.Perfil src="/assets/test-img.svg" />
                <S.Text>{infosuser.name}</S.Text>
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
                        {privateCoursesArray.map((course) => (
                            <Card
                                image={course.avatar}
                                subTexto={course.description}
                                textoPrincipal={course.name}
                                price={course.price}
                                id={course.id}
                                rating={course.rating}
                            />
                        ))}
                        <AddVideoCard />
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
