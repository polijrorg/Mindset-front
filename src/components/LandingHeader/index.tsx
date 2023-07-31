import Button from 'components/Button';
import { useRouter } from 'next/router';
import React, { useContext } from 'react';
import SearchBar from 'components/SearchBar';
import { FetchCourses } from 'hooks/useFetchCourses';
import * as S from './styles';

export type headerComponentProps = {
    onclick?(): void;
};
const LandingHeader: React.FC<headerComponentProps> = () => {
    const { backToPage } = useContext(FetchCourses);
    const router = useRouter();

    return (
        <S.Container>
            <S.Logo
                onClick={() => {
                    router.push('/');
                    backToPage();
                }}
            />
            <SearchBar />
            <S.LoginContainer>
                <S.LoginImage src="/assets/Personyello.svg" />
                <Button
                    onclick={() => router.push('/login')}
                    selected={false}
                    type2
                    Text="ENTRAR"
                />
                <Button
                    selected={false}
                    type2
                    Text="CRIAR CONTA"
                    onclick={() => router.push('/register')}
                />
            </S.LoginContainer>
        </S.Container>
    );
};
export default LandingHeader;
