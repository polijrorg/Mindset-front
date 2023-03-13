import styled from 'styled-components';

export const Input = styled.input`
    width: 500px;
    height: 56px;
    isplay: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 14px 16px;
    gap: 10px;
    background: #fafafa;
    box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.14), 0px 3px 3px rgba(0, 0, 0, 0.12),
        0px 1px 8px rgba(0, 0, 0, 0.2);
    border-radius: 16px;
`;
export const Image = styled.img`
    width: 32px;
    position: relative;
    height: 32px;
    right: 56px;
    top: 12px;
    cursor: pointer;
`;
