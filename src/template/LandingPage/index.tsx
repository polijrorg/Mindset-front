import Footer from 'components/Footer';
import LandingHeader from 'components/LandingHeader';
import Card from 'components/Card';
import useFetch from 'hooks/useFetchCourses';
import * as S from './styles';

const LandingPage: React.FC = () => {
    const { recommendedCoursesArray, allCoursesArray, isSearching } =
        useFetch();

    return (
        <S.Wrapper>
            <LandingHeader />
            {isSearching ? (
                <S.SubContainer>
                    <S.TitleContainer>
                        <S.Title2>Resultados para sua busca</S.Title2>
                    </S.TitleContainer>
                    <S.CardsContainer>
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
            ) : (
                <>
                    <S.BackgroundImage
                        src="/assets/background1.svg"
                        alt="background"
                    />
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

export default LandingPage;
