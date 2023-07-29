import { useRouter } from 'next/router';
import * as S from './styles';

const AddVideoCard: React.FC = () => {
    const router = useRouter();

    return (
        <S.Container onClick={() => router.push('/new-course')}>
            <S.SubContainer>
                <S.Title>Criar novo curso</S.Title>
                <S.AddImg src="/assets/AddButton.svg" />
            </S.SubContainer>
        </S.Container>
    );
};
export default AddVideoCard;
