import Button from 'components/Button';
import { useRouter } from 'next/router';
import SearchBar from 'components/SearchBar';
import * as S from './styles';

export type headerComponentProps = {
    onclick?(): void;
};
const PublicHeader: React.FC<headerComponentProps> = () => {
    const router = useRouter();
    return (
        <S.Container>
            <S.Logo onClick={() => router.push('/')} />
            <S.WrapperLogout>
                <SearchBar />
                <S.LoginContainer>
                    <S.LoginContainer>
                        <S.LoginImage src="/assets/Personyello.svg" />
                        <Button
                            onclick={() => router.push('/login')}
                            selected={false}
                            type2
                            Text="ENTRAR"
                        />
                    </S.LoginContainer>
                    <Button
                        selected={false}
                        type2
                        Text="CRIAR CONTA"
                        onclick={() => router.push('/register')}
                    />
                </S.LoginContainer>
            </S.WrapperLogout>
        </S.Container>
    );
};
export default PublicHeader;
