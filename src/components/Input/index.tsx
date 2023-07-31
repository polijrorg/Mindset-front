import * as S from './styles';

export type InputComponentsProps = {
    Text: string;
    Type: string;
};

const InputFile: React.FC<InputComponentsProps> = ({ Text, Type }) => (
    <S.Container>
        <S.Input accept={Type} type="file" name="arquivo" id="arquivo" />
        {Text}
    </S.Container>
);
export default InputFile;
