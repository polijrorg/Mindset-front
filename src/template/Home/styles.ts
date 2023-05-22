import styled from 'styled-components';

export const Wrapper = styled.div`
    padding-top: 88px;
    padding-bottom: 100px;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background: #303030;
`;
export const Container = styled.div`
    width: 100%;
    height: 100%;
`;
export const BackgroundImage = styled.img`
    width: 100%;
    height: 400px;
`;
export const Title = styled.span`
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    line-height: 72px;
    color: #ffffff;
`;
export const Title2 = styled.div`
    font-family: 'Poppins', sans-serif;
    width: 251px;
    height: 48px;
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 48px;
    color: #fafafa;
    border-bottom: solid;
    border-width: 5px;
    width: 100%;
    height: 56px;
`;
export const Text = styled.span`
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 28px;
    line-height: 42px;
    color: #ffffff;
`;
export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 15px;
    position: absolute;
    width: 532px;
    height: 129px;
    left: 150px;
    top: 136px;
`;
export const SubContainer = styled.div`
    display: flex;
    padding: 0px 88px 0px 88px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 32px;
    width: 100%;
    height: 358px;
`;
export const TitleContainer = styled.div`
    display: flex;
    width: 1160px;
    height: 56px;
`;

export const CardsContainer = styled.div`
    display: flex;
    width: 1158px;
    overflow-x: scroll;
    flex-direction: row;
    gap: 32px;
    ::-webkit-scrollbar-track {
        background-color: ##303030;
    }
    ::-webkit-scrollbar {
        width: 6px;
        background: ##303030;
    }
    ::-webkit-scrollbar-thumb {
        background: #272727;
    }
`;
export const VideosContainer = styled.div`
    display: flex;
    gap: 32px;
    background: #ff0000;
    justify-content: center;
    align-items: center;
`;
