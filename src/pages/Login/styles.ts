import styled from 'styled-components';

export const Wrapper = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    justify-contente: space-between;
    flex-direction: row;
    background: URL('/assets/background12.svg');
    background-repeat: no-repeat;
    background-position-x: right;
`;
export const InputContainer = styled.div`
    gap: 48px;
    justify-content: center;
    align-items: center;
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
    width: 40%;
    padding-left: 24px;
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
    font-family: 'Poppins', sans-serif;
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
    font-family: 'Poppins', sans-serif;
    font-style: italic;
    font-weight: 300;
    font-size: 16px;
    line-height: 24px;
    padding: 8px 16px;
`;
export const RecuperarSenha = styled.span`
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    align-items: center;
    color: #e7a837;
    cursor: pointer;
`;
export const ErrorWrapper = styled.p`
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 25px;
    align-items: center;
    color: red;
`;
export const SignInButton = styled.button`
    width: 500px;
    height: 50px;
    background: #eeac0e;
    border-radius: 16px;
    flex: none;
    border: 0;
    flex-grow: 0;
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    color: #ffffff;
    cursor: pointer;
`;
export const FootText = styled.span`
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    align-items: center;
    text-align: center;
    color: #ffffff;
`;
