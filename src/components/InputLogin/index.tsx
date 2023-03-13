import * as S from './styles';

export type InputComponentsProps = {
    Text: string;
    image?: string;
    type: string;
};
const Input: React.FC<InputComponentsProps> = ({ Text, image, type }) => (
    <>
        <S.Input placeholder={Text} type={type} />
        <S.Image src={image} />
    </>
);
export default Input;
