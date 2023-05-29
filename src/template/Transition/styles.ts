import styled, { keyframes } from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    width: 100vw;
    height: 100vh;
    background: #272727;
    justify-content: center;
    align-items: center;
`;
const resize = keyframes`
  from {
  }
  to {
    transform: translateX(-10px) scale(700);
    transform: translateY(-10px) scale(700);
  }
`;
export const Image = styled.img`
    width: 1px;
    height: 1px;
    animation: ${resize} 5s linear;
`;
