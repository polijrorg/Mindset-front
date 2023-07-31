import NoBorderButton from 'components/Button-2';
import ButtonO from 'components/ButtonY';
import InputFile from 'components/Input';
import { useState } from 'react';
import * as S from './styles';

const AddVideos = () => {
    const [isSelected, setSelected] = useState(false);
    return (
        <S.Wrapper>
            <S.TopContainer>
                <InputFile Text="Adicionar Trailer" Type="video/*" />
            </S.TopContainer>
            <S.BottomContainer>
                <InputFile Text="Adicionar vídeo" Type="video/*" />
                <ButtonO Text="Publicar" />
                <NoBorderButton
                    Text="voltar"
                    selected={isSelected}
                    onclick={() => setSelected(true)}
                />
            </S.BottomContainer>
        </S.Wrapper>
    );
};
export default AddVideos;
