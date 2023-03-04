import * as S from './styles';

export type InputComponentsProps = {
    Text: string;
    image: string;
};
const Input: React.FC<InputComponentsProps> = ({ Text, image }) => (
    <S.Container>
        <S.Input placeholder={Text} />
        <S.Image src={image} />
    </S.Container>
);
export default Input;
