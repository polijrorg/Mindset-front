import * as S from './styles';

export type TestProps = {
    title: string;
};

const Test: React.FC<TestProps> = ({ title }) => (
    <S.Wrapper>
        <p>{title}</p>
    </S.Wrapper>
);

export default Test;
