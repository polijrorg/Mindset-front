import Footer from 'components/Footer';
import Header from 'components/Header';
import Card from 'components/Card';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import CoursesService from 'services/CourseService';
import { Search } from 'components/Header/styles';
import Transition from 'pages/Transition';
import UserService from 'services/UserService';

import * as S from './styles';

const HomePage = () => {
    function Loading() {
        const router = useRouter();
        const [loading, setLoading] = useState(false);
        useEffect(() => {
            const handleStart = (url: string) =>
                url !== router.asPath && setLoading(true);
            const handleComplete = (url: string) =>
                url === router.asPath &&
                setTimeout(() => {
                    setLoading(false);
                    5000;
                });

            router.events.on('routeChangeStart', handleStart);
            router.events.on('routeChangeComplete', handleComplete);
            router.events.on('routeChangeError', handleComplete);

            return () => {
                router.events.off('routeChangeStart', handleStart);
                router.events.off('routeChangeComplete', handleComplete);
                router.events.off('routeChangeError', handleComplete);
            };
        });
        return loading && <Transition />;
    }
    useEffect(() => {
        CoursesService.getCourses();
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
        UserService.signIn({ phone: '551345' });
    });
    return (
        <S.Wrapper>
            {Loading}
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
                            subTexto="France - Paris "
                            textoPrincipal="Eiffell Tower"
                        />
                        <Card
                            subTexto="France - Paris "
                            textoPrincipal="Eiffell Tower"
                        />
                        <Card
                            subTexto="France - Paris "
                            textoPrincipal="Eiffell Tower"
                        />
                        <Card
                            subTexto="France - Paris "
                            textoPrincipal="Eiffell Tower"
                        />
                        <Card
                            subTexto="France - Paris "
                            textoPrincipal="Eiffell Tower"
                        />
                    </S.CardsContainer>
                </S.SubContainer>
            </S.Container>
            <Footer />
        </S.Wrapper>
    );
};

export default HomePage;
