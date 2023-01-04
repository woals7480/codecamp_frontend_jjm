import { IQuery } from "../../../../commons/types/generated/types";

export interface IBoardDetailUIProps {
  onClickDeleteBoard: () => void;
  onClickMoveToBoardList: () => void;
  onClickMoveToBoardEdit: () => void;
  data?: Pick<IQuery, "fetchBoard">;
}
