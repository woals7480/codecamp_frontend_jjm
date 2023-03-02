import { memo } from "react";

function MemoizationChildPage() {
  console.log("자식이 렌더링됩니다.");

  return (
    <>
      <div>============================</div>
      <h1>저는 자식 컴포넌트입니다.</h1>
      <div>============================</div>
    </>
  );
}

export default memo(MemoizationChildPage);
