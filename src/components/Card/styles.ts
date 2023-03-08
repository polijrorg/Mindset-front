import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    width: 194px;
    height: 230px;
    border-radius: 16px;
    background-image: url('/assets/imageTest.png');
`;
export const Image = styled.img`
    width: 194px;
    height: 230px;
    margin-bottom: 0px;
    border-radius: 16px;
`;
export const SubContainer = styled.div`
    width: fit-content;
    height: 60px;
    border-radius: 0px 0px 16px 16px;
    background: rgba(104, 104, 104, 0.2);
    backdrop-filter: blur(12.5px);
    bottom: 0px;
    padidng-top: 80px;
`;
export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
    width: fit-content;
`;
export const TextContainer2 = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
    pading: 4px;
    gap: 9px;
`;
export const Text = styled.span`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 18px;
    color: #ffffff;
`;
export const SubText = styled.span`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 9px;
    line-height: 14px;
    color: #ffffff;
`;
