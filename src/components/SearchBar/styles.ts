import styled from 'styled-components';

interface IsBlocked {
    isOpen: boolean;
}

export const SearchContainer = styled.div`
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
    gap: 8px;
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
export const SearchItem = styled.div`
    background: #262626;
    gap: 2px;
    padding: 8px;
    border-radius: 2px;
    display: flex;
    width: 400px;
    height: 36px;
`;
export const ItemFont = styled.span`
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-size: 12px;
    letter-spacing: 1px;
    cursor: pointer;
    text-underline-offset: 4px;
    text-decoration: underline;
    color: #fafafa;
`;
export const Dropdown = styled.div`
    display: flex;
    background: none;
    justify-content: start;
    align-items: start;
    width: fit-content;
    height: fit-content;
    flex-direction: column;
`;
export const DropdownMenu = styled.div<IsBlocked>`
    display: ${(props) => (props.isOpen ? 'flex' : 'none')};
    position: absolute;
    top: 80px;
    width: 100px;
    justify-content: start;
    align-items: flex-start;
    height: 160;
    flex-direction: column;
`;
