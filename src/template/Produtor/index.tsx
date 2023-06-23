import React, { useState } from 'react';
import ReactModal from 'react-modal';
import Header from 'components/Header';
import Footer from 'components/Footer';
import Button from 'components/Button';
import * as S from './styles';

const Produtor = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isModalOpen2, setIsModalOpen2] = useState(false);

    const openModal = () => {
        setIsModalOpen2(false);
        setIsModalOpen(true);
    };
    const openModal2 = () => {
        setIsModalOpen(false);
        setIsModalOpen2(true);
    };
    return (
        <>
            <S.Wrapper>
                <Header />
                <S.BackgroundImage
                    src="/assets/background1.svg"
                    alt="background"
                />
                <S.Container>
                    <S.TextContainer>
                        <S.Title>Trabalhe conosco!</S.Title>
                        <S.Text>ajude pessoas a aprender cada vez mais</S.Text>
                    </S.TextContainer>
                    <S.SubContainer>
                        <S.ContainerMiddle>
                            <S.About>
                                <S.AboutTitle>Sobre:</S.AboutTitle>
                                <S.AboutText>Texto</S.AboutText>
                            </S.About>
                            <S.VideoDescription>
                                <S.ImageWrapper>
                                    <S.Image src="/assets/onlineradio.svg" />
                                    <S.AboutText>
                                        Publique seus vídeos online!
                                    </S.AboutText>
                                </S.ImageWrapper>
                                <S.ImageWrapper>
                                    <S.Image src="/assets/clock.svg" />
                                    <S.AboutText>
                                        Publique a qualquer hora!
                                    </S.AboutText>
                                </S.ImageWrapper>
                                <S.ImageWrapper>
                                    <S.Image src="/assets/money.svg" />
                                    <S.AboutText>
                                        Ganhe uma renda extra!
                                    </S.AboutText>
                                </S.ImageWrapper>
                                <S.CurriculumButton onClick={openModal}>
                                    envie seu currículo
                                </S.CurriculumButton>
                            </S.VideoDescription>
                        </S.ContainerMiddle>
                    </S.SubContainer>
                </S.Container>
                <Footer />
            </S.Wrapper>

            <ReactModal
                isOpen={isModalOpen}
                onRequestClose={() => setIsModalOpen(false)}
                contentLabel="Modal"
            >
                <S.Input placeholder="Nome completo" />
                <S.Input placeholder="Cpf" />
                <S.Input placeholder="RG" />
                <S.Input placeholder="Data de nascimento" />
                <S.Input placeholder="curso" />
                <S.CurriculumButton onClick={openModal2}>
                    Próximo
                </S.CurriculumButton>
                <Button
                    Text="voltar"
                    selected
                    type2={false}
                    onclick={() => setIsModalOpen(false)}
                />
            </ReactModal>

            <ReactModal
                isOpen={isModalOpen2}
                onRequestClose={() => setIsModalOpen2(false)}
                contentLabel="Modal"
            >
                {/* Conteúdo do modal */}
                <S.Input placeholder="RG Frente" type="file" />
                <S.Input placeholder="RG Verso" type="file" />
                <S.CurriculumButton>Enviar dados</S.CurriculumButton>
                <Button
                    Text="voltar"
                    type2={false}
                    selected
                    onclick={openModal}
                />
            </ReactModal>
        </>
    );
};

export default Produtor;
