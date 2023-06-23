import styled from 'styled-components';

export interface Disabled {
    disable: boolean;
}
export const Wrapper = styled.div`
    display: flex;
    min-width: 712px;
    width: 100%;
    height: 100vh;
    justify-contente: space-between;
    flex-direction: row;
    background: URL('/assets/background12.svg');
    background-repeat: no-repeat;
    background-position-x: right;
`;
export const Login = styled.div`
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 40%;
    gap: 32px;
    padding-top: 100px;
    padding-left: 24px;
    background: #272727;
`;
export const AuxII = styled.div`
    display: flex;
    padding-right: 18px;
    justify-content: center;
    flex-direction: column;
    gap: 38px;
`;
export const AuxI = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;
    flex-direction: row;
    gap: 8px;
`;
export const ImageBack = styled.img`
    width: 24px;
    height: 24px;
    position: absolute;
    left: 16px;
    top: 32px;
    cursor: pointer;
`;
export const InputContainer = styled.div`
    flex-direction: column;
    gap: 128px;
    align-items: space-around;
    justify-content: space-between;
    width: 100%;
    gap: 48px;
`;

export const LoginName = styled.div`
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 200;
    font-size: 48px;
    color: #ffffff;
`;
export const RecuperarSenha = styled.span`
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 200;
    font-size: 14px;
    align-items: center;
    color: #e7a837;
    cursor: pointer;
`;
export const LoginButton = styled.button<Disabled>`
    display: flex;
    justify-content: center;
    align-items: center;
    width: border-box;
    height: 50px;
    background: #eeac0e;
    border-radius: 16px;
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    border: none;
    color: #ffffff;
    cursor: ${(props) => (props.disable ? 'not-allowed' : 'pointer')};
`;
export const GeneralText = styled.span`
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 200;
    font-size: 14px;
    color: #ffffff;
`;
export const FooterLogo = styled.img`
    width: 180px;
    height: 180px;
    position: absolute;
    bottom: 0;
    right: 0;
`;
export const InputCheckbox = styled.input`
    width: 14px;
    height: 14px;
    cursor: pointer;
`;
export const Checkbox = styled.div`
    display: flex;
    flex-direction: row;
    width: fit-content;
    gap: 4px;
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 200;
    font-size: 14px;
    letter-spacing: 0.5px;
    color: #fafafa;
`;
export const ForgotPassword = styled.div`
    gap: 12px;
    justify-content: center;
    align-items: center;
    padding-left: 4px;
`;
export const Container = styled.div`
    display: flex;
    width: 100%;
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
export const Image = styled.img`
    position: relative;
    width: 24px;
    height: 24px;
    right: 36px;
    top: 12px;
    cursor: pointer;
`;
