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
    transform: translateX(-10px) scale(500);
    transform: translateY(-10px) scale(500);
  }
`;
export const Image = styled.img`
    width: 1px;
    height: 1px;
    animation: ${resize} 1s linear;
`;
