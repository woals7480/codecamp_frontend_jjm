import { useState } from "react";
import { Error } from "../../styles/JoinPage";

export default function JoinPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmError, setConfirmError] = useState("");

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const onChangeConfirm = (e) => {
    setConfirm(e.target.value);
  };

  const onClickJoin = () => {
    if (email.includes("@") === false) {
      setEmailError("이메일에 @가 포합되어 있지 않습니다.");
    } else if (password.length < 6) {
      setPasswordError("비밀번호를 6자리이상 입력해주세요.");
    } else if (password !== confirm) {
      setConfirmError("비밀번호가 서로 다릅니다.");
    } else {
      setEmailError("");
      setPasswordError("");
      setConfirmError("");
      alert("가입되셨습니다.");
    }
  };

  return (
    <>
      이메일 : <input type="text" onChange={onChangeEmail} />
      <Error>{emailError}</Error>
      비밀번호 : <input type="password" onChange={onChangePassword} />
      <Error>{passwordError}</Error>
      비밀번호확인 : <input type="password" onChange={onChangeConfirm} />
      <Error>{confirmError}</Error>
      <button onClick={onClickJoin}>가입하기</button>
    </>
  );
}
