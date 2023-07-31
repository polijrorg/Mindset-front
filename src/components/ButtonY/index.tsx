import * as S from './styles';

export type ButtonComponentsProps = {
    Text: string;
    onclick?(): void;
};

const ButtonO: React.FC<ButtonComponentsProps> = ({ Text, onclick }) => (
    <S.Container>
        <S.Button onClick={onclick}>{Text}</S.Button>
    </S.Container>
);
export default ButtonO;
