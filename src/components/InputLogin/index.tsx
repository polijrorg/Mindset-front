import * as S from './styles';

export type InputComponentsProps = {
    Text: string;
    image: string;
};
const Input: React.FC<InputComponentsProps> = ({ Text, image }) => (
    <S.Container>
        <S.Input placeholder="E-mail" />
        <S.Image src={image} />
    </S.Container>
);
export default Input;
