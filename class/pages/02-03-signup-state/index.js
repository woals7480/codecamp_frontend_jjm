import { useState } from "react";

export default function SignupStatePage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  function onChangeEmail(event) {
    setEmail(event.target.value);
  }

  function onChangePassword(event) {
    setPassword(event.target.value);
  }

  function onClickSignUp() {
    if (email.includes("@") === false) {
      setEmailError("이메일이 올바르지 않습니다! @가 없습니다!");
    } else if (password.length < 6) {
      setPasswordError("비밀번호를 6자리이상 입력해주세요.");
    } else {
      alert("회원가입을 축하합니다!!");
      //메세지 알림 이후, Backend 컴퓨터에 있는 API(함수) 요청하기
    }
  }

  return (
    <>
      이메일: <input type="text" onChange={onChangeEmail} />
      <div>{emailError}</div>
      비밀번호: <input type="password" onChange={onChangePassword} />
      <div>{passwordError}</div>
      <button onClick={onClickSignUp}>회원가입</button>
    </>
  );
}
