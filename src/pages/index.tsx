import { NextPage } from 'next';
import Footer from 'components/Footer';
import Header from 'components/Header';
import Input from 'components/InputLogin';
import Card from 'components/Card';
import CardVideo from 'components/CardVideo';
import * as S from './styles';

const Home: NextPage = () => {
    return (
        /* */
        // <Input Text="E-mail" image="/assets/Mailemail.png" />
        /* <CardVideo
            isWhite= {false}
            title="Nome do vídeo"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            // image=""
        /> */
        //
        <S.Wrapper>
            <Header logo="/assets/LogoWithWhitLetters.svg" />
            <S.Container>
                <S.BackgroundImage
                    src="/assets/background1.svg"
                    alt="background"
                />
                <S.TextContainer>
                    <S.Title>Bem-Vindo à Mindset</S.Title>
                    <S.Text>aprenda o que quiser, quando quiser</S.Text>
                </S.TextContainer>
                <S.SubContainer>
                    <S.TitleContainer>
                        <S.Title2>Cursos em alta</S.Title2>
                    </S.TitleContainer>
                    <S.CardsContainer>
                        <Card
                            subTexto="France - Paris "
                            textoPrincipal="Eiffell Tower"
                            image="/assets/imageTest.png"
                        />
                        <Card
                            subTexto="France - Paris "
                            textoPrincipal="Eiffell Tower"
                            image="/assets/imageTest.png"
                        />
                        <Card
                            subTexto="France - Paris "
                            textoPrincipal="Eiffell Tower"
                            image="/assets/imageTest.png"
                        />
                        <Card
                            subTexto="France - Paris "
                            textoPrincipal="Eiffell Tower"
                            image="/assets/imageTest.png"
                        />
                    </S.CardsContainer>
                </S.SubContainer>
            </S.Container>
            <Footer />
        </S.Wrapper>
    );
};

export default Home;
