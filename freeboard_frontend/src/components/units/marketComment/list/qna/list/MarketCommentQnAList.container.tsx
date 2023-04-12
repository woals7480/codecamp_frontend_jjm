import { useQuery } from "@apollo/client";
import MarketCommentQnAListUI from "./MarketCommentQnAList.presenter";
import { FETCH_USEDITEM_QUESTION_ANSWERS } from "./MarketCommentQnAList.quries";
import { IMarketCommentQnAListProps } from "./MarketCommentQnAList.types";
import {
  IQuery,
  IQueryFetchUseditemQuestionAnswersArgs,
} from "../../../../../../commons/types/generated/types";
import { Wrapper } from "./MarketCommentQnAList.styles";

export default function MarketCommentQnAList(
  props: IMarketCommentQnAListProps
) {
  const { data } = useQuery<
    Pick<IQuery, "fetchUseditemQuestionAnswers">,
    IQueryFetchUseditemQuestionAnswersArgs
  >(FETCH_USEDITEM_QUESTION_ANSWERS, {
    variables: {
      useditemQuestionId: String(props.commentId),
    },
  });

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "end",
      }}
    >
      {data?.fetchUseditemQuestionAnswers.map((el) => (
        <Wrapper key={el._id} WrapperWidth={props.WrapperWidth}>
          <MarketCommentQnAListUI data={el} WrapperWidth={props.WrapperWidth} />
        </Wrapper>
      ))}
    </div>
  );
}
