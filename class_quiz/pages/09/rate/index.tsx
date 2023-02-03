import { useState } from "react";
import { Modal, Rate } from "antd";

export default function AntDesign() {
  const [value, setValue] = useState(0);

  const onChangeRate = (value: number) => {
    setValue(value);
    if (value === 3) {
      Modal.error({ content: "3점입니다." });
    }
  };

  return (
    <>
      <Rate onChange={onChangeRate} value={value} />
      <div>{value}점</div>
    </>
  );
}
