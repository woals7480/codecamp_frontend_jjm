import InfiniteScroll from "react-infinite-scroller";
import { getDate } from "../../../../commons/utils/utils";
import MarketCommentQnA from "../qna/MarketCommentQnA.container";
import * as S from "./MarketCommnetList.styles";
import { IMarketCommentListUIProps } from "./MarketCommnetList.types";

export default function MarketCommentListUI(props: IMarketCommentListUIProps) {
  return (
    <div style={{ height: "700px", overflow: "auto" }}>
      <InfiniteScroll
        pageStart={0}
        loadMore={props.onLoadMore}
        hasMore={true}
        useWindow={false}
      >
        <div>
          {props.data?.fetchUseditemQuestions.map((el) => (
            <div
              key={el._id}
              style={{ display: "flex", flexDirection: "column" }}
            >
              <S.CommentWrapper>
                <S.MainWrapper>
                  <S.Avatar src="/images/avatar.png" />
                  <S.CommentInfo>
                    <S.WriterWrapper>
                      <S.Writer>{el.user.name}</S.Writer>
                    </S.WriterWrapper>
                    <S.Contents>{el.contents}</S.Contents>
                    <S.CreatedAt>{getDate(el.createdAt)}</S.CreatedAt>
                  </S.CommentInfo>
                </S.MainWrapper>
                <S.OptionWrapper>
                  <S.CommentIcon src="/images/boardComment/list/option_comment_icon.png" />
                </S.OptionWrapper>
              </S.CommentWrapper>
              <MarketCommentQnA />
            </div>
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
}
