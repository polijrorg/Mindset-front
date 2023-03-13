import styled from 'styled-components';

export const Input = styled.input`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 14px 16px;
    gap: 10px;
    width: 500px;
    height: 64px;
    background: #fafafa;
    background: url('/assets/Mailemail.png')
    border: none;
    box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.14), 0px 3px 3px rgba(0, 0, 0, 0.12), 0px 1px 8px rgba(0, 0, 0, 0.2);
    border-radius: 16px;
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 27px;
    color: #949494;
    position: relative;
`;
export const Image = styled.img`
    width: 16px;
    position: absolute;
    height: 16px;
    z-index: 250;
`;
