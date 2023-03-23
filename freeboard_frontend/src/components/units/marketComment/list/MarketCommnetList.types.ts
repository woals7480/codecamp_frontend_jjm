import { IQuery } from "../../../../commons/types/generated/types";

export interface IMarketCommentListUIProps {
  data?: Pick<IQuery, "fetchUseditemQuestions">;
  onLoadMore: () => void;
}
