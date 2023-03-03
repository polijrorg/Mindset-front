import styled from 'styled-components';

export const Title = styled.h1`
    font-size: 2rem;
    color: black;
`;

export const Wrapper = styled.div`
    display: flex;
    width: 100%;
    height: 98px;
    background: #272727;
    flex-direction: colum;
    justify-content: center;
    align-items: center;
`;
export const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
`;
export const Logo = styled.img`
    width: 200px;
    height: 108px;
`;
export const Container1 = styled.div`
    align-items: center;
    padding-top: 32px;
    justify-content: center;
    margin-right: 1px;
    margin-color: #ffffff;
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
    padding-top: 8px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    gap: 8px;
    width: 98px;
    height: 44px;
    margin-color: #fafafa;
`;
export const SubContainer2 = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: colum;
    gap: 8px;
    width: fit-content;
    height: 44px;
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
export const MediasButton = styled.a`
    width: fit-content;
    height: 16px;
    cursor: pointer;
`;
export const MediaImage = styled.img`
    width: 16px;
    height: 16px;
`;
