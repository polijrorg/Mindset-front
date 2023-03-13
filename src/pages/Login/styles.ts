import styled from 'styled-components';

export const Wrapper = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    justify-contente: space-between;
    flax-direction: row;
    background: url('/assets/background12.svg')
    background-repeat: no-repeat;
    backgroun-position: right;
`;
export const Aux = styled.div`
    display: flex;
    gap: 4px;
    flex-direction: row;
`;
export const AuxII = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`;
export const ImageBack = styled.img`
    padding: 0px 0px 0px 32px;
    width: 64px;
    height: 32px;
    position: absolute;
    left: 32px;
    top: 32px;
    cursor: pointer;
`;
export const Login = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 64px;
    width: 40%;
    background: #272727;
`;
export const LoginName = styled.div`
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 48px;
    color: #ffffff;
`;
export const EmailInput = styled.input`
    width: 520px;
    height: 64px;
    background: #e1e7ff;
    border-radius: 16px;
    display: flex;
    color: #55596b;
    font-family: 'Nunito';
    font-style: italic;
    font-weight: 300;
    font-size: 16px;
    line-height: 24px;
    padding: 8px 16px;
`;
export const PasswordInput = styled.input`
    width: 520px;
    height: 64px;
    background: #e1e7ff;
    border-radius: 16px;
    display: flex;
    color: #55596b;
    font-family: 'Nunito';
    font-style: italic;
    font-weight: 300;
    font-size: 16px;
    line-height: 24px;
    padding: 8px 16px;
`;
export const RecuperarSenha = styled.span`
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 25px;
    display: flex;
    align-items: center;
    color: #e7a837;
    cursor: pointer;
`;
export const ErrorWrapper = styled.p`
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 25px;
    align-items: center;
    color: red;
`;
export const SignInButton = styled.button`
    width: 520px;
    height: 64px;
    background: #eeac0e;
    border-radius: 16px;
    flex: none;
    border: 0;
    flex-grow: 0;
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
    color: #ffffff;
    cursor: pointer;
`;
export const FootText = styled.span`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #ffffff;
`;
export const LoginBackground = styled.div`
    width: 60%;
    height: 100%;
    background: linear-gradient(270deg, #004c97 -0.02%, #33a8eb 99.98%);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;
export const PiuPiuwer = styled.span`
    position: absolute;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 64px;
    line-height: 96px;
    color: #e1e7ff;
    bottom: 16px;
    right: 16px;
`;
export const ImageLogin = styled.img`
    width: 480px;
    height: 480px;
    position: absolute;
    left: 56%;
    top: 16%;
`;
