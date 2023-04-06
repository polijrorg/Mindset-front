import * as S from './styles';

const Footer = () => (
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
                <S.ButtonLink> Home </S.ButtonLink>
                <S.ButtonLink>FAQ</S.ButtonLink>
                <S.ButtonLink>Termo de uso</S.ButtonLink>
            </S.ContainerSub2>
        </S.SubContainer>
    </S.Container>
);
export default Footer;
