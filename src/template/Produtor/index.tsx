import React, { useState } from 'react';
import InputFile from 'components/Input';
import ReactModal from 'react-modal';
import Header from 'components/Header';
import Footer from 'components/Footer';
import Button from 'components/Button';
import ButtonO from 'components/ButtonY';
import * as S from './styles';

const Produtor = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isModalOpen2, setIsModalOpen2] = useState(false);
    const [isDataSent, setIsDataSent] = useState(false);

    const openModal = () => {
        setIsModalOpen2(false);
        setIsModalOpen(true);
    };
    const sendCurriculum = () => {
        setIsModalOpen2(false);
        setIsDataSent(true);
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
                                <S.AboutTitle>Sobre</S.AboutTitle>
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
                            </S.VideoDescription>
                        </S.ContainerMiddle>
                        <ButtonO
                            Text="envie seu currículo"
                            onclick={openModal}
                        />
                    </S.SubContainer>
                </S.Container>
                <Footer />
            </S.Wrapper>

            <ReactModal
                isOpen={isModalOpen}
                onRequestClose={() => setIsModalOpen(false)}
                contentLabel="Modal"
                style={{
                    overlay: {
                        position: 'fixed',
                        zIndex: 1020,
                        top: 0,
                        left: 0,
                        width: '100vw',
                        height: '100vh',
                        background: 'rgba(48, 48, 48, 0.75)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    },
                    content: {
                        background: '#303030',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexDirection: 'column',
                        width: '64rem',
                        gap: '12px',
                        maxWidth: 'calc(100vw - 2rem)',
                        maxHeight: 'calc(100vh - 2rem)',
                        overflowY: 'auto',
                        position: 'relative',
                        border: '1p solid #282828',
                        boxShadow:
                            '0px 3px 5px 0px rgba(0, 0, 0, 0.20), 0px 1px 18px 0px rgba(0, 0, 0, 0.12), 0px 6px 10px 0px rgba(0, 0, 0, 0.14)',
                        borderRadius: '8px'
                    }
                }}
            >
                <S.InputTextContainer>
                    <S.TextInput>Nome completo</S.TextInput>
                    <S.Input placeholder="Nome completo" />
                </S.InputTextContainer>
                <S.InputTextContainer>
                    <S.TextInput>CPF</S.TextInput>
                    <S.Input placeholder="_ _ _._ _ _._ _ _-_ _" />
                </S.InputTextContainer>
                <S.InputTextContainer>
                    <S.TextInput>RG</S.TextInput>
                    <S.Input placeholder="_ _. _ _ _._ _ _-_ " />
                </S.InputTextContainer>
                <S.InputTextContainer>
                    <S.TextInput>Data de nascimento</S.TextInput>
                    <S.Input placeholder="__/__/____" />
                </S.InputTextContainer>
                <S.InputTextContainer>
                    <S.TextInput>Curso</S.TextInput>
                    <S.Input placeholder="Curso" />
                </S.InputTextContainer>

                <ButtonO Text="Próximo" onclick={openModal2} />
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
                style={{
                    overlay: {
                        position: 'fixed',
                        zIndex: 1020,
                        top: 0,
                        left: 0,
                        width: '100vw',
                        height: '100vh',
                        background: 'rgba(48, 48, 48, 0.75)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    },
                    content: {
                        background: '#303030',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexDirection: 'column',
                        width: '64rem',
                        gap: '32px',
                        maxWidth: 'calc(100vw - 2rem)',
                        maxHeight: 'calc(100vh - 2rem)',
                        overflowY: 'auto',
                        position: 'relative',
                        border: '1p solid #282828',
                        boxShadow:
                            '0px 3px 5px 0px rgba(0, 0, 0, 0.20), 0px 1px 18px 0px rgba(0, 0, 0, 0.12), 0px 6px 10px 0px rgba(0, 0, 0, 0.14)',
                        borderRadius: '8px'
                    }
                }}
            >
                <S.TextInputFile>
                    Certifique-se que todas as imagens estejam nítidas!
                </S.TextInputFile>
                <br />
                <S.InputTextContainer>
                    <S.TextInputFile>Foto do RG (frente):</S.TextInputFile>
                </S.InputTextContainer>
                <InputFile Text="RG Frente" Type="image/*, application/pdf" />
                <S.InputTextContainer>
                    <S.TextInputFile>Foto do RG (verso):</S.TextInputFile>
                </S.InputTextContainer>
                <InputFile Text="RG Verso" Type="image/*, application/pdf" />
                <ButtonO Text="Enviar Dados" onclick={sendCurriculum} />
                <Button
                    Text="voltar"
                    type2={false}
                    selected
                    onclick={openModal}
                />
            </ReactModal>
            <ReactModal
                isOpen={isDataSent}
                onRequestClose={() => setIsDataSent(false)}
                contentLabel="Modal"
                style={{
                    overlay: {
                        position: 'fixed',
                        zIndex: 1020,
                        top: 0,
                        left: 0,
                        width: '100vw',
                        height: '100vh',
                        background: 'rgba(48, 48, 48, 0.75)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    },
                    content: {
                        background: '#303030',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexDirection: 'column',
                        width: '64rem',
                        gap: '32px',
                        maxWidth: 'calc(100vw - 2rem)',
                        maxHeight: 'calc(100vh - 2rem)',
                        overflowY: 'auto',
                        position: 'relative',
                        border: '1p solid #282828',
                        boxShadow:
                            '0px 3px 5px 0px rgba(0, 0, 0, 0.20), 0px 1px 18px 0px rgba(0, 0, 0, 0.12), 0px 6px 10px 0px rgba(0, 0, 0, 0.14)',
                        borderRadius: '8px'
                    }
                }}
            >
                {isDataSent && (
                    <S.SuccessMessage className="success-message">
                        Dados enviados!
                    </S.SuccessMessage>
                )}
            </ReactModal>
        </>
    );
};

export default Produtor;
