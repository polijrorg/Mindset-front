import Footer from 'components/Footer';
import Header from 'components/Header';
import Card from 'components/Card';
import { useEffect, useState } from 'react';
import CoursesService from 'services/CourseService';
import UserService from 'services/UserService';

import * as S from './styles';

const HomePage = () => {
    const [logado, setLogado] = useState(false);
    const [courseName, setCourseName] = useState('');
    const [courseTeacher, setCourseTeacher] = useState('');
    const [courseImage, setCourseimage] = useState('');
    const [coursePrice, setCoursePrice] = useState('');
    const [courseStar, setCourseStar] = useState('');

    useEffect(() => {
        CoursesService.createCourse({
            id: '123456',
            name: 'Anna Teste',
            numberOfVideos: 3,
            avatar: 'none',
            createdBy: 'Anna',
            rating: 4,
            description: 'Curso para testar integração',
            userId: 'anna.cardoso'
        });
    });
    useEffect(() => {
        // preciso pegar os cursos pelo id
        CoursesService.getCourses().then((foundCourse) => {
            setCourseName(foundCourse.name);
            // console.log(`nomde dos cursos ${foundCourse}`);
            setCoursePrice('no price');
            setCourseStar(String(foundCourse.rating));
            setCourseTeacher(foundCourse.createdBy);
            setCourseimage(foundCourse.avatar);
        });
    });

    return logado ? (
        <>
            <S.Wrapper>
                <Header />
                <S.Container>
                    <S.BackgroundImage
                        src="/assets/background1.svg"
                        alt="background"
                    />
                    <S.TextContainer>
                        <S.Title>Bem-Vindo à Mindset</S.Title>
                        <S.Text>aprenda o que quiser, quando quiser</S.Text>
                    </S.TextContainer>
                    <br />
                    <S.SubContainer>
                        <S.TitleContainer>
                            <S.Title2>Cursos em alta</S.Title2>
                        </S.TitleContainer>
                        <S.CardsContainer>
                            <Card
                                image={courseImage}
                                subTexto={courseName}
                                textoPrincipal={courseTeacher}
                            />
                            <Card
                                image={courseImage}
                                subTexto={courseName}
                                textoPrincipal={courseTeacher}
                            />
                            <Card
                                image={courseImage}
                                subTexto={courseName}
                                textoPrincipal={courseTeacher}
                            />
                            <Card
                                image={courseImage}
                                subTexto={courseName}
                                textoPrincipal={courseTeacher}
                            />
                            <Card
                                image={courseImage}
                                subTexto={courseName}
                                textoPrincipal={courseTeacher}
                            />
                        </S.CardsContainer>
                    </S.SubContainer>
                </S.Container>
                <Footer />
            </S.Wrapper>
        </>
    ) : (
        <>
            <S.Wrapper>
                <Header logado />
                <S.Container>
                    <S.SubContainer>
                        <S.TitleContainer>
                            <S.Title2>Cursos em progresso</S.Title2>
                        </S.TitleContainer>
                        <S.CardsContainer>
                            <Card
                                image={courseImage}
                                subTexto="France - Paris "
                                textoPrincipal="Eiffell Tower"
                            />
                            <Card
                                image={courseImage}
                                subTexto="France - Paris "
                                textoPrincipal="Eiffell Tower"
                            />
                            <Card
                                image={courseImage}
                                subTexto="France - Paris "
                                textoPrincipal="Eiffell Tower"
                            />
                            <Card
                                image={courseImage}
                                subTexto="France - Paris "
                                textoPrincipal="Eiffell Tower"
                            />
                            <Card
                                image={courseImage}
                                subTexto="France - Paris "
                                textoPrincipal="Eiffell Tower"
                            />
                        </S.CardsContainer>
                    </S.SubContainer>
                </S.Container>
                <S.Container>
                    <S.SubContainer>
                        <S.TitleContainer>
                            <S.Title2>Seus cursos</S.Title2>
                        </S.TitleContainer>
                        <S.CardsContainer>
                            <Card
                                image={courseImage}
                                subTexto="France - Paris "
                                textoPrincipal="Eiffell Tower"
                            />
                            <Card
                                image={courseImage}
                                subTexto="France - Paris "
                                textoPrincipal="Eiffell Tower"
                            />
                            <Card
                                image={courseImage}
                                subTexto="France - Paris "
                                textoPrincipal="Eiffell Tower"
                            />
                            <Card
                                image={courseImage}
                                subTexto="France - Paris "
                                textoPrincipal="Eiffell Tower"
                            />
                            <Card
                                image={courseImage}
                                subTexto="France - Paris "
                                textoPrincipal="Eiffell Tower"
                            />
                        </S.CardsContainer>
                    </S.SubContainer>
                </S.Container>
                <S.Container>
                    <S.SubContainer>
                        <S.TitleContainer>
                            <S.Title2>Cursos em alta</S.Title2>
                        </S.TitleContainer>
                        <S.CardsContainer>
                            <Card
                                image={courseImage}
                                subTexto="France - Paris "
                                textoPrincipal="Eiffell Tower"
                            />
                            <Card
                                image={courseImage}
                                subTexto="France - Paris "
                                textoPrincipal="Eiffell Tower"
                            />
                            <Card
                                image={courseImage}
                                subTexto="France - Paris "
                                textoPrincipal="Eiffell Tower"
                            />
                            <Card
                                image={courseImage}
                                subTexto="France - Paris "
                                textoPrincipal="Eiffell Tower"
                            />
                            <Card
                                image={courseImage}
                                subTexto="France - Paris "
                                textoPrincipal="Eiffell Tower"
                            />
                        </S.CardsContainer>
                    </S.SubContainer>
                </S.Container>
                <Footer />
            </S.Wrapper>
        </>
    );
};

export default HomePage;
