import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import {
  IQuery,
  IQueryFetchUseditemQuestionsArgs,
} from "../../../../commons/types/generated/types";
import MarketCommentListUI from "./MarketCommentList.presenter";
import { FETCH_USEDITEM_QUESTIONS } from "./MarketCommnetList.queries";
import InfiniteScroll from "react-infinite-scroller";

export default function MarketCommentList() {
  const router = useRouter();
  const { fetchMore, data } = useQuery<
    Pick<IQuery, "fetchUseditemQuestions">,
    IQueryFetchUseditemQuestionsArgs
  >(FETCH_USEDITEM_QUESTIONS, {
    variables: {
      useditemId: String(router.query.marketId),
    },
  });

  const onLoadMore = () => {
    if (data === undefined) return;

    void fetchMore({
      variables: {
        page: Math.ceil(data?.fetchUseditemQuestions.length / 10) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (fetchMoreResult.fetchUseditemQuestions === undefined) {
          return {
            fetchUseditemQuestions: [...prev.fetchUseditemQuestions],
          };
        }
        return {
          fetchUseditemQuestions: [
            ...prev.fetchUseditemQuestions,
            ...fetchMoreResult.fetchUseditemQuestions,
          ],
        };
      },
    });
  };

  return (
    <div style={{ height: "700px", overflow: "auto" }}>
      <InfiniteScroll
        pageStart={0}
        loadMore={onLoadMore}
        hasMore={true}
        useWindow={false}
      >
        <div>
          {data?.fetchUseditemQuestions.map((el) => (
            <MarketCommentListUI key={el._id} data={el} />
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
}
