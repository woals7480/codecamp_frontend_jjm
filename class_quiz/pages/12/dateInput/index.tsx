import { ChangeEvent, useState } from "react";

export default function DateInput() {
  const [value, setValue] = useState("");

  const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    const dottedValue: string[] = [];
    const nextValue = event.target.value;
    if (nextValue.length > dottedValue.length) {
      const nextPureValue = nextValue.replaceAll(".", "").split("");
      nextPureValue.forEach((data: string, index: number) => {
        dottedValue.push(data);
        if (index === 3 || index === 5) dottedValue.push(".");
      });
      setValue(dottedValue.join(""));
    } else {
      const nextPureValue = nextValue.replaceAll(".", "").split("");
      nextPureValue.forEach((data: string, index: number) => {
        dottedValue.push(data);
        if (nextPureValue.length > 6 && (index + 1 === 4 || index + 1 === 6)) {
          dottedValue.push(".");
        } else if (nextPureValue.length > 4 && index + 1 === 4) {
          dottedValue.push(".");
        }
      });
      setValue(dottedValue.join(""));
    }
    console.log(`dot : ${dottedValue.join("").length}`);
    console.log(`next : ${nextValue.length}`);
  };

  return (
    <>
      <input
        placeholder="YYYY.MM.DD"
        onChange={onChangeInput}
        type="text"
        value={value}
      />
    </>
  );
}
