import styled from 'styled-components';

export const Wrapper = styled.div`
    padding-top: 88px;
    width: fit-content;
    overflow: hidden;
    background: #303030;
`;
export const Container = styled.div`
    background: #303030;
`;
export const BackgroundImage = styled.img`
    width: 100%;
    height: 400px;
`;
export const Title = styled.span`
    font-family: 'Poppins', sans-serif;
    src: url('/fonts.googleapis.com/css2?family=Poppins:wght@100&display=swap')
        format('truetype');
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    line-height: 72px;
    color: #ffffff;
`;
export const Title2 = styled.div`
    font-family: 'Poppins', sans-serif;
    src: url('/fonts.googleapis.com/css2?family=Poppins:wght@100&display=swap')
        format('truetype');
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
    background: #303030;
`;
export const Text = styled.span`
    font-family: 'Poppins', sans-serif;
    src: url('/fonts.googleapis.com/css2?family=Poppins:wght@100&display=swap')
        format('truetype');
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
    flex-direction: column;
    padding-left: 80px;
    padding-right: 80px;
    padding-top: 80px;
    height: 100vh;
    justify-content: top;
    align-items: center;
    gap: 32px;
    width: 100%;
    background: #303030;
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
        background-color: #303030;
    }
    ::-webkit-scrollbar {
        width: 6px;
        background: #303030;
    }
    ::-webkit-scrollbar-thumb {
        background: #272727;
    }
`;
export const VideosContainer = styled.div`
    display: flex;
    gap: 32px;
    justify-content: center;
    align-items: center;
`;
