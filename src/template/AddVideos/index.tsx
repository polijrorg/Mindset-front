import NoBorderButton from 'components/Button-2';
import { useState } from 'react';
import Button from 'components/Button';
import * as S from './styles';

const AddVideos = () => {
    const [isSelected, setSelected] = useState(false);
    return (
        <S.Wrapper>
            <S.TopContainer>
                <Button
                    Text="Adicionar Trailer"
                    type2={false}
                    selected={false}
                />
            </S.TopContainer>
            <S.BottomContainer>
                <S.AddVideo type="file" />
                <Button Text="Enviar" type2={false} selected={false} />
            </S.BottomContainer>
            <NoBorderButton
                Text="voltar"
                selected={isSelected}
                onclick={() => setSelected(true)}
            />
        </S.Wrapper>
    );
};
export default AddVideos;
