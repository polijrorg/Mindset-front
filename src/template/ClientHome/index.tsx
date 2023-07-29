/* eslint-disable no-nested-ternary */
import Footer from 'components/Footer';
import Header from 'components/Header';
import Card from 'components/Card';
import useFetch from 'hooks/useFetchCourses';
import * as S from './styles';

const Homepage: React.FC = () => {
    const {
        recommendedCoursesArray,
        privateCoursesArray,
        inProgressCoursesArray,
        allCoursesArray,
        isSearching
    } = useFetch();

    return (
        <S.Wrapper>
            <Header />
            {isSearching ? (
                <S.Container>
                    <S.SubContainer>
                        <S.TitleContainer>
                            <S.Title2>Resultados para sua busca</S.Title2>
                        </S.TitleContainer>
                        <S.CardsContainer style={{ gap: '8' }}>
                            {allCoursesArray.map((course) => (
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
            ) : (
                <>
                    <S.Container>
                        <S.SubContainer>
                            <S.TitleContainer>
                                <S.Title2>Cursos em progresso</S.Title2>
                            </S.TitleContainer>
                            <S.CardsContainer style={{ gap: '8' }}>
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
                        </S.SubContainer>
                    </S.Container>
                    <S.Container>
                        <S.SubContainer style={{ gap: '8' }}>
                            <S.TitleContainer>
                                <S.Title2>Seus cursos</S.Title2>
                            </S.TitleContainer>
                            <S.CardsContainer style={{ gap: '8' }}>
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
                            </S.CardsContainer>
                        </S.SubContainer>
                    </S.Container>
                    <S.Container style={{ gap: '8' }}>
                        <S.SubContainer>
                            <S.TitleContainer>
                                <S.Title2>Cursos em alta</S.Title2>
                            </S.TitleContainer>
                            <S.CardsContainer>
                                {recommendedCoursesArray.map((course) => (
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
                </>
            )}
            <Footer />
        </S.Wrapper>
    );
};

export default Homepage;
