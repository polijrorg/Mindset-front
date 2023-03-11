import * as S from './styles';

export type ButtonComponentsProps = {
    Text: string;
    type2: boolean;
    selected: boolean;
    onclick?(): void;
};

const Button: React.FC<ButtonComponentsProps> = ({
    Text,
    type2,
    selected,
    onclick
}) => (
    <S.Container type2={type2}>
        <S.Button onClick={onclick} selected={selected}>
            {Text}
        </S.Button>
    </S.Container>
);
export default Button;
