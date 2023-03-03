import styled from 'styled-components';

interface SelectedType {
    type2: boolean;
}
export const Container = styled.div<SelectedType>`
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #272727;
    width: fit-content;
    padding: 4px;
    height: 48px;
    border: ${(props) => (props.type2 ? '2px solid #faff00' : 'none')};
    border-radius: ${(props) => (props.type2 ? '8px' : 'none')};
`;
export const Button = styled.span`
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-size: 16px;
    line-height: 16px;
    letter-spacing: 1.25px;
    cursor: pointer;
    color: #fafafa;
`;
