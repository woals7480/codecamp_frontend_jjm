import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 640px;
  background-image: url("/02-5/bg.png");
  backround-repeat: no-repeat;
  backround-size: cover;
  background-color: rgba(0, 0, 0, 0.55);
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 100px;
  padding-top: 230px;
  padding-botton: 80px;
  padding-left: 50px;
  padding-right: 50px;
`;

export const LogoWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 100px;
`;

export const LogoImg = styled.img`
  padding-bottom: 40px;
`;

export const LogoTitle = styled.div`
  font-size: 60px;
  color: #fff;
  font-weight: 600;
`;

export const InputWrapper = styled.div`
  width: 100%;
`;

export const EmailInputWrapper = styled.div`
  width: 100%;
  padding-top: 40px;
`;

export const EmailInput = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 20px;
  color: #fff;
  border: none;
  background: none;
  outline: none;
  border-bottom: 1px solid #7d7d7d;
  ::placeholder {
    color: #7d7d7d;
  }
`;

export const EmailError = styled.div`
  color: #ff1b6d;
  font-size: 16px;
  padding-left: 10px;
  padding-top: 5px;
`;

export const PasswordInputWrapper = styled.div`
width: 100%;
padding-top: 30px;
  }
`;

export const PasswordInput = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 20px;
  color: #fff;
  border: none;
  background: none;
  outline: none;
  border-bottom: 1px solid #7d7d7d;
  ::placeholder {
    color: #7d7d7d;
  }
`;

export const PasswordError = styled.div`
  color: #ff1b6d;
  font-size: 16px;
  padding-left: 10px;
  padding-top: 5px;
`;

export const LoginButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 76px;
  background-color: rgba(255, 27, 109, 0.6);
  border-radius: 38px;
  border: none;
  margin: 30px 0 45px 0;
  cursor: pointer;
`;

export const LoginTitle = styled.div`
  font-size: 26px;
  color: #fff;
  font-weight: 600;
`;

export const EtcButton = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
`;

export const EtcItem = styled.div`
  font-size: 16px;
  color: #fff;
  cursor: pointer;
  font-weight: 600;
`;

export const SocialLoginButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 76px;
  border-radius: 38px;
  color: #fae100;
  border: 2px solid #fae100;
  margin: 60px 0 80px 0;
  cursor: pointer;
  background-color: transparent;
`;

export const SocialLoginButtonImg = styled.img`
  width: 32px;
  height: 30px;
  margin-right: 20px;
`;

export const SocialLoginButtonTitle = styled.div`
  font-size: 24px;
  font-weight: 600;
`;
