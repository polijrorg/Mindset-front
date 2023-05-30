import Button from 'components/Button';
import { useRouter } from 'next/router';
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
                <S.SearchContainer>
                    <S.SearchButton>
                        <S.SearchLogged placeholder="Buscar..." />
                        <img
                            src="/assets/blackSearch.svg"
                            alt=" "
                            width={30}
                            height={24}
                        />
                    </S.SearchButton>
                </S.SearchContainer>
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
