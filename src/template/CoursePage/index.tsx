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
                            <S.ImageWrapper>
                                <S.Image src="/assets/iconExemple.svg" />
                                <S.Text>Prof. Ronaldo</S.Text>
                            </S.ImageWrapper>
                            <S.ImageWrapper>
                                <S.Text>4.0</S.Text>
                                <S.Image
                                    src="/assets/avaliar5.svg"
                                    style={{
                                        width: '100px',
                                        height: '28px',
                                        cursor: 'pointer'
                                    }}
                                />
                            </S.ImageWrapper>
                        </S.PriceWrapper>
                    </S.DescriptionWrapper>
                </S.ContainerTop>
                <S.ContainerMiddle>
                    <S.About>
                        <S.AboutTitle>Sobre:</S.AboutTitle>
                        <S.AboutText>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum is simply dummy
                            text of the printing and typesetting industry. Lorem
                            Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum is simply dummy
                            text of the printing and typesetting industry. Lorem
                            Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum is simply dummy
                            text of the printing and typesetting industry. Lorem
                            Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum is simply dummy
                            text of the printing and typesetting industry. Lorem
                            Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum is simply dummy
                            text of the printing and typesetting industry. Lorem
                            Ipsum is simply dummy text of the printing and
                            typesetting industry.
                        </S.AboutText>
                    </S.About>
                    <S.VideoDescription>
                        <S.ImageWrapper>
                            <S.Image src="/assets/onlineradio.svg" />
                            <S.AboutText>100% online</S.AboutText>
                        </S.ImageWrapper>
                        <S.ImageWrapper>
                            <S.Image src="/assets/calendar.svg" />
                            <S.AboutText>Assista quando quiser</S.AboutText>
                        </S.ImageWrapper>
                        <S.ImageWrapper>
                            <S.Text>Avaliar: </S.Text>
                            <S.Image
                                src="/assets/avaliar5.svg"
                                style={{
                                    width: '100px',
                                    height: '28px',
                                    cursor: 'pointer'
                                }}
                            />
                        </S.ImageWrapper>
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
