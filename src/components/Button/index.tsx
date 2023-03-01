import * as S from './styles';

export type ButtonComponentsProps = {
    Text: string;
    type2: boolean;
};
const Button: React.FC<ButtonComponentsProps> = ({ Text, type2 }) => (
    <S.Container type2={type2}>
        <S.Button>{Text}</S.Button>
    </S.Container>
);
export default Button;
