import BoardWrite from "../../../src/components/units/global-state/BoardWrite.container";
import { useRecoilState } from "recoil";
import { isEditState } from "../../../src/commons/store";
import { useEffect } from "react";

export default function GlobalStatePage() {
  const [isEdit, setIsEdit] = useRecoilState(isEditState);

  useEffect(() => {
    setIsEdit(true);
  }, []);

  return <BoardWrite />;
}
