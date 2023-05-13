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
            <S.Logo />
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
                            onclick={() => router.push('/mindset/login')}
                            selected={false}
                            type2={false}
                            Text="ENTRAR"
                        />
                    </S.LoginContainer>
                    <Button
                        selected={false}
                        type2
                        Text="CRIAR CONTA"
                        onclick={() => router.push('/mindset/register')}
                    />
                </S.LoginContainer>
            </S.WrapperLogout>
        </S.Container>
    );
};
export default PublicHeader;
