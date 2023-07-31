import useAuth from 'hooks/useAuth';
import { useRouter } from 'next/router';
import { parseCookies } from 'nookies';
import React from 'react';
import * as S from './styles';

const Footer: React.FC = () => {
    const { infosuser } = useAuth();
    const router = useRouter();
    const { '@Mindset:token': token } = parseCookies();
    return (
        <S.Container>
            <S.SubContainer>
                <S.Text>Redes Sociais:</S.Text>
                <S.ContainerSub>
                    <S.MediasButton
                        href="https://www.instagram.com/mindsetedu/"
                        target="_blank"
                    >
                        <S.MediaImage src="/assets/intagramMedia.svg" />
                    </S.MediasButton>
                    <S.MediasButton
                        href="https://www.linkedin.com/"
                        target="_blank"
                    >
                        <S.MediaImage src="/assets/linkedinmedias.svg" />
                    </S.MediasButton>
                    <S.MediasButton
                        href="https://www.facebook.com/"
                        target="_blank"
                    >
                        <S.MediaImage src="/assets/facebookmedias.svg" />
                    </S.MediasButton>
                </S.ContainerSub>
            </S.SubContainer>
            <img src="/assets/verticalBar.svg" alt="bar" />
            <S.Logo src="/assets/LogoWithWhitLetters.svg" />
            <img src="/assets/verticalBar.svg" alt="bar" />
            <S.SubContainer>
                <S.Text>Pesquisa rápida: </S.Text>
                <S.ContainerSub2>
                    <S.ButtonLink
                        onClick={() => {
                            if (token && infosuser.producer) {
                                router.push('/producer/home');
                            } else if (token && !infosuser.producer) {
                                router.push('/student/home');
                            } else {
                                router.push('/');
                            }
                        }}
                    >
                        {' '}
                        Home{' '}
                    </S.ButtonLink>
                    <S.ButtonLink
                        onClick={() => {
                            router.push('/producer');
                        }}
                    >
                        Seja um produtor
                    </S.ButtonLink>
                </S.ContainerSub2>
            </S.SubContainer>
        </S.Container>
    );
};
export default Footer;
