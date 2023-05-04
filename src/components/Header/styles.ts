import styled from 'styled-components';

export const Container = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: '380px';
    padding-right: 16px;
    padding-left: 200px;
    width: 100%;
    height: 80px;
    top: 0px;
    position: fixed;
    background: #272727;
    z-index: 250;
`;
export const Logo = styled.div`
    width: 100px;
    display: flex;
    background: url('/assets/logoMindset.svg');
    height: 98px;
    background-size: 140px;
    background-position-x: 32%;
    background-repeat: no-repeat;
    position: fixed;
    left: 16px;
    top: 8px;
`;
export const WrapperLogout = styled.div`
    display: flex;
    width: 100%;
    padding: 16px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;
export const SearchContainer = styled.div`
    align-items: center;
    justify-content: center;
    display: flex;
    gap: 8px;
    padding-left: 200px;
    color: #ffffff;
`;

export const Search = styled.input`
    box-sizing: border-box;
    background: none;
    position: relative;
    flex-direction: column;
    align-items: flex-start;
    padding-left: 16px;
    width: 400px;
    height: 36px;
    color: #ffffff;
    border: 2px solid #ffffff;
    border-radius: 8px;
    ::placeholder,
    ::-webkit-input-placeholder {
        color: white;
    }
    :-ms-input-placeholder {
        color: white;
    }
`;
export const SearchLogged = styled.input`
    box-sizing: border-box;
    background: #272727;
    position: relative;
    flex-direction: column;
    align-items: flex-start;
    padding-left: 16px;
    width: 400px;
    height: 36px;
    color: #ffffff;
    border: 2px solid #ffffff;
    border-radius: 8px 0px 0px 8px;
    ::placeholder,
    ::-webkit-input-placeholder {
        color: white;
    }
    :-ms-input-placeholder {
        color: white;
    }
`;
export const LoginContainer = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 32px;
    align-items: center;
`;
export const SearchButton = styled.div`
    display: flex;
    width: fit-content;
    height: 36px;
    background: #fbfbf8;
    cursor: pointer;
    border-radius: 8px;
    justify-content: center;
    align-items: center;
    padding-right: 4px;
`;
export const LogedWithSearch = styled.div`
    justify-content: center;
    padding-right: 16px;
    gap: 0px;
    align-items: center;
    display: flex;
`;
export const Container1 = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 80px;
    position: relative;
    width: fit-content;
    height: 38px;
`;
export const LoginImage = styled.img`
    width: 22px;
    height: 22px;
    border-radius: 50%;
`;
export const Perfil = styled.img`
    border-radius: 70%;
    width: 64px;
    height: 64px;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`;
