import { useState } from "react";

export default function AuthenticationPage() {
  const [number, setNumber] = useState("000000");

  const onClickNum = () => {
    setNumber(Math.floor(Math.random() * 1000000));
  };

  return (
    <>
      <span>{number}</span>
      <button onClick={onClickNum}>인증번호전송</button>
    </>
  );
}
