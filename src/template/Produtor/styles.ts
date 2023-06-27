import styled from 'styled-components';

export const Wrapper = styled.div`
    padding-top: 88px;
    width: fit-content;
    overflow: hidden;
    background: #303030;
`;
export const SuccessMessage = styled.span`
    color: green;
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 64px;
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
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    line-height: 72px;
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
export const Text = styled.span`
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 28px;
    line-height: 42px;
    color: #ffffff;
`;
export const SubContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 80px;
    padding-right: 80px;
    height: 100vh;
    justify-content: top;
    align-items: center;
    gap: 32px;
    width: 100%;
    background: #303030;
`;
export const ContainerMiddle = styled.div`
    display: flex;
    justify-content: center;
    align-items: start;
    width: 100%;
    height: 380px;
    gap: 64px;
    background: #303030;
`;
export const VideoDescription = styled.div`
    justify-content: center;
    align-items: start;
    width: 32%;
    height: 160px;
    padding-top: 108px;
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
export const About = styled.div`
    display: flex;
    flex-direction: column;
    width: 72%;
    padding-top: 32px;
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
export const CurriculumButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    width: 400px;
    height: 50px;
    background: #eeac0e;
    border-radius: 16px;
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    border: none;
    color: #ffffff;
`;
export const Input = styled.input`
    width: 100%;
    height: 48px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 14px 16px;
    background: #fafafa;
    border: none;
    box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.14), 0px 3px 3px rgba(0, 0, 0, 0.12),
        0px 1px 8px rgba(0, 0, 0, 0.2);
    border-radius: 16px;
`;
export const InputFile = styled.input`
    width: 100%;
    height: 48px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 14px 16px;
    background: #eeac0e;
    border: none;
    box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.14), 0px 3px 3px rgba(0, 0, 0, 0.12),
        0px 1px 8px rgba(0, 0, 0, 0.2);
    border-radius: 16px;
`;
export const TextInput = styled.span`
    color: #949494;
    font-size: 12px;
    font-family: poppins, sans-serif;
    font-weight: 700;
`;
export const TextInputFile = styled.span`
    color: #ffffff;
    font-size: 12px;
    font-family: poppins, sans-serif;
    font-weight: 700;
`;
export const InputTextContainer = styled.div`
    width: 400px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
`;
