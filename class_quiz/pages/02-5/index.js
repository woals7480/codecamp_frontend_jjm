import { useState } from "react";
import {
  DeleteButton,
  EmailError,
  EmailInput,
  EmailInputWrapper,
  InputWrapper,
  LogoImg,
  LogoTitle,
  LogoWrapper,
  PasswordInputWrapper,
  PasswordInput,
  PasswordError,
  Wrapper,
  LoginButton,
  LoginTitle,
  EtcButton,
  EtcItem,
  SocialLoginButton,
  SocialLoginButtonImg,
  SocialLoginButtonTitle,
} from "../../styles/ItsLoadLoginPage";

export default function ItsLoadLoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
    if (!email.includes("@")) {
      setEmailError("이메일 주소를 다시 확인해주세요.");
    } else {
      setEmailError("");
    }
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
    if (password.length < 8 || password.length > 16) {
      setPasswordError("8~16자의 영문, 숫자, 특수문자만 사용가능합니다.");
    } else {
      setPasswordError("");
    }
  };

  const onClickLogin = () => {
    if (emailError === "" && passwordError === "" && email && password) {
      alert("환영합니다");
    }
  };

  return (
    <Wrapper>
      <LogoWrapper>
        <LogoImg src="/02-5/logo.png" />
        <LogoTitle>잇츠로드</LogoTitle>
      </LogoWrapper>
      <InputWrapper>
        <EmailInputWrapper>
          <EmailInput
            placeholder="이메일을 입력해주세요."
            type="text"
            onChange={onChangeEmail}
          />
          <EmailError>{emailError}</EmailError>
        </EmailInputWrapper>
        <PasswordInputWrapper>
          <PasswordInput
            placeholder="비밀번호를 입력해주세요."
            type="password"
            onChange={onChangePassword}
          />
          <PasswordError>{passwordError}</PasswordError>
        </PasswordInputWrapper>
      </InputWrapper>
      <LoginButton>
        <LoginTitle onClick={onClickLogin}>로그인</LoginTitle>
      </LoginButton>
      <EtcButton>
        <EtcItem>이메일 찾기</EtcItem>
        <EtcItem>|</EtcItem>
        <EtcItem>비밀번호 찾기</EtcItem>
        <EtcItem>|</EtcItem>
        <EtcItem>회원가입</EtcItem>
      </EtcButton>
      <SocialLoginButton>
        <SocialLoginButtonImg src="/02-5/kakao.png" />
        <SocialLoginButtonTitle>카카오톡으로 로그인하기</SocialLoginButtonTitle>
      </SocialLoginButton>
    </Wrapper>
  );
}
