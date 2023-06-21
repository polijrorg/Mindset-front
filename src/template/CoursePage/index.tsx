/* eslint-disable jsx-a11y/media-has-caption */
import Header from 'components/Header';
import Footer from 'components/Footer';
import CardVideo from 'components/CardVideo';
import { useState, useEffect } from 'react';
import CoursesService from 'services/CourseService';
import { useRouter } from 'next/dist/client/router';
import RatingComponent from 'components/Rating';

import VideoPlayer from 'components/Player';
import * as S from './styles';

const CoursePage = () => {
    const router = useRouter();
    const { id } = router.query;
    const [title, setTitle] = useState('');
    const [subTitle, setSubTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [teacher, setTeacher] = useState('');
    const [video, setVideo] = useState('');
    const [rating, setRating] = useState<number>(0);

    const asyncFunction = async (ide: string) => {
        const response = await CoursesService.getCourseById(ide);
        setTitle(response.name);
        setSubTitle('Sub descrição');
        setDescription(response.description);
        setPrice(response.price);
        setTeacher(response.createdBy);
        setVideo(response.introVideo);
        setRating(response.rating);
    };
    useEffect(() => {
        asyncFunction(String(id));
    });
    return (
        <>
            <Header />
            <S.Wrapper>
                <S.ContainerTop>
                    <S.VideoWrapper>
                        <VideoPlayer videoLink={video} />
                    </S.VideoWrapper>
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
                                <RatingComponent initialValue={rating} />
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
                            <RatingComponent />
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
