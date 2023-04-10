import styled from 'styled-components';

interface BackgroundImg {
    image: string;
}
export const Container = styled.div<BackgroundImg>`
    display: flex;
    width: 200px;
    height: 236px;
    background: url(${(props) =>
        props.image ? `${props.image}` : '/assets/imageTest.png'});
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
export const Text = styled.span`
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    color: #ffffff;
`;
export const Star = styled.img`
    width: 58px;
    height: 10px;
`;
export const Price = styled.span`
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 14px;
    color: #ffffff;
`;
export const Left = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 4px;
    width: 88px;
    height: 36px;
    left: 12px;
    top: 182px;
`;
export const Word = styled.span`
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 10px;
    color: #ffffff;
`;
export const Right = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 72px;
    height: 39px;
`;
