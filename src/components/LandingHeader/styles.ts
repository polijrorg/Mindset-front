import styled from 'styled-components';

export const Container = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-right: 16px;
    padding-left: 200px;
    width: 100%;
    height: 80px;
    top: 0px;
    position: fixed;
    background: #272727;
    z-index: 250;
`;
export const Logo = styled.div`
    width: 100px;
    display: flex;
    background: url('/assets/logoMindset.svg');
    height: 98px;
    background-size: 140px;
    background-position-x: 32%;
    background-repeat: no-repeat;
    position: fixed;
    left: 16px;
    top: 8px;
    cursor: pointer;
`;
export const WrapperLogout = styled.div`
    display: flex;
    width: 100%;
    padding: 16px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;
export const LoginContainer = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 32px;
    align-items: center;
`;
export const Container1 = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 80px;
    position: relative;
    width: fit-content;
    height: 38px;
`;
export const LoginImage = styled.img`
    width: 22px;
    height: 22px;
    border-radius: 50%;
`;
