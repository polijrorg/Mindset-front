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
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 380px;
    padding: 42px 72px 42px 72px;
    gap: 150px;
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
    gap: 7px;
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

export const CoursesContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 42px;
    height: 277px;
`;
export const About = styled.div``;
export const ClassesContainer = styled.div``;
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
