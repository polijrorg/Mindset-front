import styled from 'styled-components';

export const Wrapper = styled.div`
    padding-top: 80px;
    padding-bottom: 300px;
    width: 100%;
    height: 100%;
    gap: 88px;
    background: #303030;
`;
export const ContainerTop = styled.div`
    display: flex;
    flex-direction: row;
    gap: 16px;
    height: 580px;
    background: #282828;
    justify-content: center;
    align-items: center;
`;
export const ContainerMiddle = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;
    width: 100%;
    height: 380px;
    gap: 72px;
    padding: 42px 0px 0px 64px;
    background: #303030;
`;
export const ContainerBottom = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 42px;
`;
export const VideoWrapper = styled.div`
    width: 56%;
    align-items: center;
    justify-content: center;
    height: 100%;
    background: linear-gradient(
        270deg,
        #272727 17.4%,
        rgba(40, 40, 40, 0) 54.82%
    );
`;
export const DescriptionWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 48px;
`;
export const VideoDescription = styled.div`
    width: fit-content
    height: 107px;
    display: flex;
    flex-direction: column;
    gap: 7px;
`;
export const Image = styled.img`
    width: 40px;
    height: 40px;
`;
export const ImageWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
    gap: 8px;
`;
export const Title = styled.text`
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    font-size: 48px;
    color: #ffffff;
`;
export const SubTitle = styled.text`
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 28px;
    line-height: 42px;
    text-align: center;
    color: #ffffff;
`;
export const PriceButtonWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 34px;
`;
export const PriceWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    justify-content: space-between;
    align-items: center;
`;
export const Price = styled.text`
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 28px;
    color: #fffff;
`;
export const Text = styled.text`
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 300;
    font-size: 20px;
    color: #ffffff;
`;
export const About = styled.div`
    display: flex;
    flex-direction: column;
    width: 72%;
    gap: 24px;
`;
export const AboutTitle = styled.text`
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 28px;
    color: #fafafa;
`;
export const AboutText = styled.text`
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 24px;
    text-align: justify;
    color: #fafafa;
`;

export const CoursesContainer = styled.div`
    display: flex;
    flex-direction: row;
    height: 277px;
`;

export const Avaliation = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
`;
export const Button = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 10px;
    width: 231px;
    height: 56px;
    background: #eeac0e;
    border: none;
    border-radius: 16px;
    box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.14), 0px 3px 3px rgba(0, 0, 0, 0.12),
        0px 1px 8px rgba(0, 0, 0, 0.2);
    justify-content: center;
    align-items: center;
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    color: #ffffff;
    letter-spacing: 1px;
    cursor: pointer;
    text-transform: uppercase;
    text-underline-offset: 4px;
`;
