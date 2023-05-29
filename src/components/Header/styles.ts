import styled from 'styled-components';

export const Container = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
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
    cursor: pointer;
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
    padding-left: 32px;
    width: 380px;
    height: 36px;
    color: #ffffff;
    border: 1px solid #fbfbfb;
    border-radius: 12px 0px 0px 12px;
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
    width: 440;
    height: 36px;
    background: #fbfbf8;
    cursor: pointer;
    border-radius: 16px;
    justify-content: space-between;
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
export const Dropdown = styled.div`
    display: flex;
    padding-right: 24px;
    background: none;
    justify-content: start;
    align-items: start;
    width: fit-content;
    height: fit-content;
    flex-direction: column;
`;
export const DropdownMenu = styled.div`
    display: flex;
    position: absolute;
    top: 80px;
    right: 16px;
    width: 100px;
    justify-content: center;
    align-items: flex-start;
    height: 160;
    position: flex;
    flex-direction: column;
`;
export const DropdownItem = styled.button`
    justify-content: center;
    align-items: center;
    display: flex;
    width: 88px;
    height: 44px;
    cursor: pointer;
    border: none;
    background: #272727;
    color: #ffffff;
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-size: 12px;
`;
