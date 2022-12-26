import { useState } from "react";

export default function CountPage() {
  const [count, setCount] = useState(0);

  const onClickUp = () => setCount(count + 1);

  return (
    <>
      <p>{count}</p>
      <button onClick={onClickUp}>카운트증가</button>
    </>
  );
}
