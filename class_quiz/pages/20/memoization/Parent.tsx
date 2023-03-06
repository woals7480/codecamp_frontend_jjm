import { useCallback, useMemo, useState } from "react";
import MemoizationChildPage from "./Child";

export default function MemoizationParentPage() {
  const [countState, setCountState] = useState(0);

  let countLet = 0;

  const memo = useMemo(() => Math.random(), []);
  console.log(memo);

  const onClickStateUp = useCallback(() => {
    setCountState((prev) => prev + 1);
  }, []);

  const onClickLetUp = useCallback(() => {
    countLet += 1;
    console.log(countLet + 1);
  }, []);

  console.log("부모 컴포넌트!!");

  return (
    <>
      <button onClick={onClickStateUp}>State 올리기 {countState}</button>
      <button onClick={onClickLetUp}>Let 올리기 {countLet}</button>
      <MemoizationChildPage countState={countState} />
    </>
  );
}
