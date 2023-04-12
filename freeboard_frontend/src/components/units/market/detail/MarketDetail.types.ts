import { IQuery } from "../../../../commons/types/generated/types";

export interface IMarketDetailUIProps {
  data?: Pick<IQuery, "fetchUseditem">;
  isPicked?: boolean;
  onClickPick: () => void;
}
