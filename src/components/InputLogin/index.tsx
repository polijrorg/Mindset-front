import * as S from './styles';

export type InputComponentsProps = {
    Text: string;
    image?: string;
    type: string;
    isPassword: boolean;
};

const Input: React.FC<InputComponentsProps> = ({
    Text,
    image,
    type,
    isPassword
}) => (
    <S.Container>
        <S.Input placeholder={Text} type={type} />
        <S.Image src={image} isPassword={isPassword} />
    </S.Container>
);
export default Input;
