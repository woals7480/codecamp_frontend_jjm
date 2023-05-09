import { IQuery } from "../../../../commons/types/generated/types";

export interface IMarketDetailUIProps {
  dataUseditem?: Pick<IQuery, "fetchUseditem">;
  isPicked?: boolean;
  onClickPick: () => void;
  onClickBuying: () => void;
}
