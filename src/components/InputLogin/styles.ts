import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    padding: 64px;
    width: fit-content;
    justify-content: flax-start;
    align-items: center;
    border: none;
`;
export const Input = styled.input`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 14px 16px;
    gap: 10px;
    position: absolute;
    width: 640px;
    height: 64px;
    background: #fafafa;
    /* 03 dp */
    border: none;
    box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.14), 0px 3px 3px rgba(0, 0, 0, 0.12), 0px 1px 8px rgba(0, 0, 0, 0.2);
    border-radius: 16px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 27px;
    font-color: #949494;
`;
export const Image = styled.img`
    width: 26px;
    height: 26px;
    position: fixed;
    left: 640px;
`;
