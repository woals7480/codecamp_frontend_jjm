import { memo } from "react";

function MemoizationChildPage() {
  console.log("자식 컴포넌트!!");
  return <></>;
}

export default memo(MemoizationChildPage);
