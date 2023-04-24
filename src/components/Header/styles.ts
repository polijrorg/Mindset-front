import styled from 'styled-components';

export const Container = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 88px;
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
    background-position: center;
    background-size: 140px;
    background-position-x: 32%;
    background-repeat: no-repeat;
`;
export const SearchContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    letter-spacing: 0.5px;
    color: #ffffff;
`;
export const SearchImg = styled.img`
    width: 24px;
    height: 24px;
    left: 498px;
`;
export const SearchImg2 = styled.img`
    width: 32px;
    height: 32px;
    margin-right: 32px;
    cursor: pointer;
`;
export const Search = styled.input`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 10px 360px 10px 17px;
    gap: 10px;
    width: 400px;
    height: 46px;
    border: 2px solid #ffffff;
    color: #ffffff;
    border-radius: 8px;
    background: none;
`;
export const SearchLogged = styled.input`
    box-sizing: border-box;
    background: none;
    position: relative;
    flex-direction: column;
    align-items: flex-start;
    left: 72px;
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
export const LoginContainer = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 32px;
    align-items: center;
`;
export const LoginContainer2 = styled.div`
    width: 100px;
    display: flex;
    align-items: center;
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
