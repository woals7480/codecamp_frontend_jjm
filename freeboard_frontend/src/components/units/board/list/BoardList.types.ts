import { MouseEvent } from "react";
import { IQuery } from "../../../../commons/types/generated/types";

export interface IBoardListUIProps {
  onClickMoveToBoardNew: () => void;
  onClickonBoardDetail: (event: MouseEvent<HTMLDivElement>) => void;
  data?: Pick<IQuery, "fetchBoards">;
}
