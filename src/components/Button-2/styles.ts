import styled from 'styled-components';

interface OnClickButton {
    selected: boolean;
}

export const Container = styled.div`
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    background: none;
    cursor: pointer;
    padding: 8px;
    width: fit-content;
    height: 100%;
    border: none;
`;
export const Button = styled.span<OnClickButton>`
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-size: 12px;
    letter-spacing: 1px;
    cursor: pointer;
    text-underline-offset: 4px;
    text-decoration: ${(props) => (props.selected ? 'underline' : 'none')};
    color: ${(props) => (props.selected ? '#faff00' : '#fafafa')};
`;
