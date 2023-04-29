import styled from 'styled-components';

interface SelectedProps {
    isWhite: boolean;
}
export const Container = styled.div<SelectedProps>`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 12px 21px 28px 24px;
    gap: 20px;
    margin: 64px;
    width: 432px;
    height: 200px;
    background: ${(props) => (props.isWhite ? '#ffffff' : '#272727')};
    box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.14), 0px 3px 3px rgba(0, 0, 0, 0.12),
        0px 1px 8px rgba(0, 0, 0, 0.2);
    border-radius: 16px;
`;
export const SubContainer = styled.div`
    display: flex;
    flex-direction: colum;
    align-items: center;
    gap: 14px;
    padding: 0px;
    width: fit-content;
`;
export const SubContainer2 = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 0px;
    width: fit-content;
    height: 176px;
`;
export const Image = styled.img`
    width: 100px;
    height: 100px;
`;
export const Title = styled.span<SelectedProps>`
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 28px;
    line-height: 42px;
    color: ${(props) => (props.isWhite ? '#272727' : '#ffffff')};
`;
export const Text = styled.span<SelectedProps>`
    font-family: 'Poppins', sans-serif;
    font-style: italic;
    font-weight: 300;
    font-size: 20px;
    line-height: 24px;
    color: ${(props) => (props.isWhite ? '#272727' : '#ffffff')};
`;
export const ButtonImage = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`;
export const ProgressBar = styled.progress`
    accent-color: #eeac0e;
    width: 432px;
    height: 4px;
    cursor: pointer;
`;
