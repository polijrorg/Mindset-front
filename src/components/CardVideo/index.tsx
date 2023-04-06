import * as S from './styles';

export type CardComponentProps = {
    description: string;
    title: string;
    image?: string;
    isWhite: boolean;
};

const CardVideo: React.FC<CardComponentProps> = ({
    title,
    description,
    isWhite
}) => (
    <S.Container isWhite={isWhite}>
        <S.SubContainer>
            {isWhite ? (
                <S.Image src="/assets/imgOptionBlack.svg" />
            ) : (
                <S.Image src="/assets/imgOptionWhite.svg" />
            )}

            <S.SubContainer2>
                <S.Title isWhite={isWhite}>{title}</S.Title>
                <S.Text isWhite={isWhite}>{description}</S.Text>
            </S.SubContainer2>
            <S.ButtonImage>
                {isWhite ? (
                    <img src="/assets/playwhite.svg" alt="play" />
                ) : (
                    <img src="/assets/blackplay.svg" alt="play" />
                )}
            </S.ButtonImage>
        </S.SubContainer>
        <S.ProgressBar value={40} max={100} />
    </S.Container>
);
export default CardVideo;
/* utilizar o use Effect https://www.google.com/search?q=styled+progress+bar&source=lnms&tbm=vid&sa=X&ved=2ahUKEwiZvKW69sD9AhUhr5UCHYapCDgQ_AUoAnoECAEQBA&biw=1440&bih=671&dpr=2#fpstate=ive&vld=cid:eef93ea1,vid:3sH_Kq9e5hQ */
