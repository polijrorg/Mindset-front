import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    width: 200px;
    height: 272px;
    background-color: #292929;
    border-radius: 16px;
    cursor: pointer;
    align-items: flex-end;
`;
export const SubContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 200px;
    height: 88px;
    padding: 12px;
    border-radius: 0px 0px 16px 16px;
    background: rgba(104, 104, 104, 0.2);
    backdrop-filter: blur(12.5px);
    justify-content: center;
    align-items: center;
`;
export const Title = styled.span`
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 18px;
    color: #ffffff;
    cursor: pointer;
`;
export const AddImg = styled.img`
    width: 64px;
    height: 64px;
`;
