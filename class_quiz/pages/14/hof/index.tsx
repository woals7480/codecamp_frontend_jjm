import { ChangeEvent, MouseEvent, useState } from "react";

export default function HOFPage() {
  const [value, setValue] = useState(" ");

  const onChangeValue = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const onClickButton =
    (value: string) => (event: MouseEvent<HTMLButtonElement>) => {
      console.log(value);
    };

  return (
    <>
      <input type="text" onChange={onChangeValue} />
      <button onClick={onClickButton(value)}>hof버튼</button>
    </>
  );
}
