import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    width: 200px;
    height: 236px;
    justify-content: center;
    align-items: center;
    background-color: #292929;
    border-radius: 16px;
    cursor: pointer;
`;
export const SubContainer = styled.div`
    display: flex;
    position: relative;
    width: 200px;
    height: 66px;
    left: 0px;
    gap: 24px;
    top: 170px;
    padding: 12px;
    border-radius: 0px 0px 16px 16px;
    background: rgba(104, 104, 104, 0.2);
    backdrop-filter: blur(12.5px);
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
    width: 58px;
    height: 10px;
`;
