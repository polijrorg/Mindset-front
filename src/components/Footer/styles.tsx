import styled from 'styled-components';

export const Title = styled.h1`
    font-size: 2rem;
    color: black;
`;
export const Container = styled.footer`
    display: flex;
    width: 100%;
    height: 88px;
    background: #272727;
    flex-direction: colum;
    justify-content: center;
    bottom: 0%;
    align-items: center;
    position: fixed;
`;
export const Logo = styled.img`
    width: 200px;
    height: 108px;
`;
export const Text = styled.span`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 18px;
    color: #ffffff;
`;
export const SubContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
    width: fit-content;
    height: 74px;
    padding: 0px 28px 0px 28px;
`;
export const ButtonLink = styled.a`
    width: fit-content;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 10px;
    line-height: 15px;
    cursor: pointer;
    text-decoration-line: underline;
    background: none;
    color: #ffffff;
`;
export const ContainerSub = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    gap: 8px;
    width: fit-content;
    height: 44px;
`;
export const MediasButton = styled.a`
    width: fit-content;
    height: 16px;
    cursor: pointer;
`;
export const MediaImage = styled.img`
    width: 16px;
    height: 16px;
`;
