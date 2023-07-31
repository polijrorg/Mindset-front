import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    width: 100%;
    height: 100vh;
    gap: 24px;
    padding: 16px;
    flex-direction: column;
    background: #282828;
    justify-content: center;
    align-items: center;
`;
export const TopContainer = styled.div`
    width: 100%;
    display: flex;
    height: 100vh;
    justify-content: center;
    align-items: center;
`;
export const BottomContainer = styled.div`
    display: flex;
    width: 100%;
    height: 100vh;
    justify-content: center;
    gap: 24px;
    align-items: center;
    flex-direction: column;
`;
export const AddVideo = styled.input`
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    background: none;
    cursor: pointer;
    padding: 8px;
    width: fit-content;
    height: 100%;
    border: 2px solid #faff00;
    border-radius: 8px;
`;
