import Footer from 'components/Footer';
import Header from 'components/Header';
import Card from 'components/Card';
import { Search } from 'components/Header/styles';

import * as S from './styles';

const HomePage = () => {
    return (
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
