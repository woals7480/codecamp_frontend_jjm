import { IQuery } from "../../../../commons/types/generated/types";

export interface IMarketListUIProps {
  data?: Pick<IQuery, "fetchUseditems">;
  onLoadMore: () => void;
  isEdit: boolean;
}

export interface IMarketListProps {
  isEdit: boolean;
}
