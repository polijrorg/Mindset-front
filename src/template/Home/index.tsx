import Test from 'components/TestComponent';
import * as S from './styles';

const HomeTemplate = () => (
    <S.Container>
        <S.Title>
            Esse template foi criado pela equipe de Research 21.1 para projetos
            internos da Polijunior.
        </S.Title>
        <Test title="Esse componente é um teste" />
    </S.Container>
);
export default HomeTemplate;
