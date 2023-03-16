import styled from 'styled-components';

interface IsPassword {
    isPassword: boolean;
}
export const Container = styled.div`
    display: flex;
`;
export const Input = styled.input`
    width: 480px;
    height: 48px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 14px 16px;
    background: #fafafa;
    box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.14), 0px 3px 3px rgba(0, 0, 0, 0.12),
        0px 1px 8px rgba(0, 0, 0, 0.2);
    border-radius: 16px;
`;
export const Image = styled.img<IsPassword>`
    position: relative;
    width: 24px;
    height: 24px;
    right: 36px;
    top: 12px;
    cursor: ${(props) => (props.isPassword ? 'pointer' : ' arrow')};
`;
