import * as S from './styles';

export type ButtonComponentsProps = {
    Text: string;
    selected: boolean;
    onclick?(): void;
};

const NoBorderButton: React.FC<ButtonComponentsProps> = ({
    Text,
    selected,
    onclick
}) => (
    <S.Container>
        <S.Button onClick={onclick} selected={selected}>
            {Text}
        </S.Button>
    </S.Container>
);
export default NoBorderButton;
