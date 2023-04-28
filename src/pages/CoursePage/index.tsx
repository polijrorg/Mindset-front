import Header from 'components/Header';
import Footer from 'components/Footer';
import CardVideo from 'components/CardVideo';
import * as S from './styles';

const CoursePage = () => {
    return (
        <>
            <Header />
            <S.Wrapper>
                <S.ContainerTop>
                    <S.VideoWrapper>video</S.VideoWrapper>
                    <S.DescriptionWrapper>
                        <S.Title>Python para iniciantes</S.Title>
                        <S.SubTitle>
                            Aprenda python do começo e descubra como desenvolver
                            aplicativos
                        </S.SubTitle>
                        <S.PriceButtonWrapper>
                            <S.Button>comprar</S.Button>
                            <S.Text>
                                Assinatura por:
                                <br />
                                <S.Price>R$ 243,00</S.Price>
                            </S.Text>{' '}
                        </S.PriceButtonWrapper>
                        <S.PriceWrapper>
                            <S.Text>Prof. Ronaldo</S.Text>
                            <br />
                            <S.Avaliation>
                                <S.Text>4.0</S.Text>
                                {/* Colocar as estrelinhas de avaliação */}
                            </S.Avaliation>
                        </S.PriceWrapper>
                    </S.DescriptionWrapper>
                </S.ContainerTop>
                <S.ContainerMiddle>
                    <S.Text>
                        <S.Title>Sobre:</S.Title>
                        <br />
                        <br />
                        <br />
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum is simply dummy text
                        of the printing and typesetting industry. Lorem Ipsum is
                        simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum is simply dummy text of the
                        printing and typesetting industry. Lorem Ipsum is simply
                        dummy text of the printing and typesetting industry.
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum is simply dummy text
                        of the printing and typesetting industry. Lorem Ipsum is
                        simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum is simply dummy text of the
                        printing and typesetting industry. Lorem Ipsum is simply
                        dummy text of the printing and typesetting industry.
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.
                    </S.Text>
                    <S.VideoDescription>
                        <S.Text>100% online</S.Text>
                        <S.Text>Assista quando quiser</S.Text>
                        <S.Text>Avaliar</S.Text>
                    </S.VideoDescription>
                </S.ContainerMiddle>
                <S.ContainerBottom>
                    <S.CoursesContainer>
                        <CardVideo
                            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                            isWhite={false}
                            title="Nome do vídeo"
                        />
                        <CardVideo
                            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                            isWhite={false}
                            title="Nome do vídeo"
                        />
                    </S.CoursesContainer>
                    <S.CoursesContainer>
                        <CardVideo
                            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                            isWhite={false}
                            title="Nome do vídeo"
                        />
                        <CardVideo
                            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                            isWhite={false}
                            title="Nome do vídeo"
                        />
                    </S.CoursesContainer>
                    <S.CoursesContainer>
                        <CardVideo
                            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                            isWhite={false}
                            title="Nome do vídeo"
                        />
                        <CardVideo
                            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                            isWhite={false}
                            title="Nome do vídeo"
                        />
                    </S.CoursesContainer>
                </S.ContainerBottom>
            </S.Wrapper>
            <Footer />
        </>
    );
};
export default CoursePage;
