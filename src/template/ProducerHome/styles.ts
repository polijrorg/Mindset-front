import styled from 'styled-components';

interface OnClickButton {
    selected: boolean;
}

export const Wrapper = styled.div`
    width: 100%;
    height: 100vw;
    background: #303030;
    justify-content: center;
    align-items: center;
    gap: 8px;
`;
export const BackgrounImg = styled.img`
    width: 100%;
    height: 300px;
`;
export const MainContainer = styled.div`
    top: 240px;
    position: absolute;
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    background: none;
    flex-direction: column;
    gap: 16px;
`;
export const Perfil = styled.img`
    width: 120px;
    height: 120px;
`;
export const Text = styled.span`
    color: #ffffff;
    font-family: 'Raleway', sans-serif;
    font-size: 36px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`;
export const ButtonsWrapper = styled.div`
    justify-content: center;
    align-items: center;
    display: flex;
    gap: 18px;
    flex-direction: row;
`;
export const CardsContainer = styled.div`
    display: flex;
    width: 80%;
    height: 300px;
    overflow-x: scroll;
    flex-direction: row;
    justify-content: center;
    border-radius: 16px;
    align-items: center;
    gap: 24px;
    ::-webkit-scrollbar-track {
        background-color: #181818;
    }
    ::-webkit-scrollbar {
        width: 6px;
        background: #181818;
    }
    ::-webkit-scrollbar-thumb {
        background: #303030;
    }
`;
export const Button = styled.button<OnClickButton>`
    font-family: Raleway, sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    cursor: pointer;
    text-underline-offset: 4px;
    background: none;
    border: none;
    color: ${(props) => (props.selected ? '#faff00' : '#fafafa')};
    text-decoration: ${(props) => (props.selected ? 'underline' : 'none')};
`;
