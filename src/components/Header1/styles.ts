import styled from 'styled-components';

export const Container = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 80px;
    top: 0px;
    position: fixed;
    background: #272727;
    z-index: 250;
    padding-right: 16px;
`;
export const Logo = styled.div`
    width: 100px;
    display: flex;
    cursor: pointer;
    background: url('/assets/logoMindset.svg');
    height: 98px;
    background-size: 140px;
    background-position-x: 32%;
    background-repeat: no-repeat;
    position: relative;
    left: 8px;
    top: 16px;
`;
export const Wrapper = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
`;
export const LoginContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;
`;
export const LoginImage = styled.img`
    width: 22px;
    height: 22px;
    border-radius: 50%;
`;
