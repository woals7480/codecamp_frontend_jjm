import { IQuery } from "../../../../commons/types/generated/types";

export interface IBoardDetailUIProps {
  onClickDeleteBoard: () => void;
  onClickLike: () => void;
  onClickDisLike: () => void;
  data?: Pick<IQuery, "fetchBoard">;
}
