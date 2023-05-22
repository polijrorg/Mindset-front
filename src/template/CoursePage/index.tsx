import Header from 'components/Header';
import Footer from 'components/Footer';
import CardVideo from 'components/CardVideo';
import { useState, useEffect } from 'react';
import CoursesService from 'services/CourseService';
import { useRouter } from 'next/dist/client/router';

import * as S from './styles';

const CoursePage = () => {
    const router = useRouter();
    const { id } = router.query;
    const [title, setTitle] = useState('');
    const [subTitle, setSubTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [teacher, setTeacher] = useState('');

    const asyncFunction = async (ide: string) => {
        const response = await CoursesService.getCourseById(ide);
        setTitle(response.name);
        setSubTitle('undefined');
        setDescription(response.description);
        setPrice('$$$');
        setTeacher(response.createdBy);
        /* console.log(
            'titulo: ',
            title,
            'subtitulo: ',
            subTitle,
            'descricao: ',
            description,
            'preco: ',
            price,
            'prof: ',
            teacher,
            'id: ',
            id
        ); */
    };
    useEffect(() => {
        asyncFunction(String(id));
    });
    return (
        <>
            <Header />
            <S.Wrapper>
                <S.ContainerTop>
                    <S.VideoWrapper />
                    <S.DescriptionWrapper>
                        <S.Title>{title}</S.Title>
                        <S.SubTitle>{subTitle}</S.SubTitle>
                        <S.PriceButtonWrapper>
                            <S.Button>comprar</S.Button>
                            <S.Text>
                                Assinatura por:
                                <br />
                                <S.Price>{price}</S.Price>
                            </S.Text>{' '}
                        </S.PriceButtonWrapper>
                        <S.PriceWrapper>
                            <S.ImageWrapper>
                                <S.Image src="/assets/iconExemple.svg" />
                                <S.Text>{teacher}</S.Text>
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
                        <S.AboutText>{description}</S.AboutText>
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
