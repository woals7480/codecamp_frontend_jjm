import { useState } from "react";
import MarketCommentQnAWrite from "../write/MarketCommentQnAWrite.container";
import * as S from "./MarketCommentQnAList.styles";
import { IMarketCommentQnAListUIProps } from "./MarketCommentQnAList.types";
import MarketCommentQnAList from "./MarketCommentQnAList.container";

export default function MarketCommentQnAListUI(
  props: IMarketCommentQnAListUIProps
) {
  const [isWriter, setIsWriter] = useState(false);
  const onClickWriter = () => {
    setIsWriter((prev) => !prev);
  };
  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <S.ArrowIconWrapper>
          <S.ArrowIcon src="/images/boardComment/write/comment_arrow.png" />
        </S.ArrowIconWrapper>
        <S.CommentWrapper>
          <S.MainWrapper>
            <S.Avatar src="/images/avatar.png" />
            <S.CommentInfo>
              <S.WriterWrapper>
                <S.Writer>{props.data.user.name}</S.Writer>
              </S.WriterWrapper>
              <S.Contents>{props.data.contents}</S.Contents>
            </S.CommentInfo>
          </S.MainWrapper>
          <S.OptionWrapper>
            <S.CommentIcon
              src="/images/boardComment/list/option_comment_icon.png"
              onClick={onClickWriter}
            />
          </S.OptionWrapper>
        </S.CommentWrapper>
      </div>
      {isWriter && (
        <MarketCommentQnAWrite commentId={props.data._id} isQnA={true} />
      )}
      <MarketCommentQnAList
        commentId={props.data._id}
        WrapperWidth={props.WrapperWidth * 0.95}
      />
    </>
  );
}
