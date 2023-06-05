import styled from 'styled-components';

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
export const DivImg = styled.div`
    width: fit-content;
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
