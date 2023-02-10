import { ChangeEvent, useEffect, useState } from "react";

export default function RegularExpresstion() {
  const [test, setTest] = useState(false);
  const [email, setEmail] = useState("");

  const onChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  useEffect(() => {
    setTest(/\w+@\w+.\w+/.test(email));
  }, [email]);

  return (
    <>
      email : <input onChange={onChangeEmail} type="text" />
      <span>{test ? "true" : "false"}</span>
    </>
  );
}
