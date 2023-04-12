import { getDate } from "../../../../commons/utils/utils";
import * as S from "./MarketCommnetList.styles";
import { IMarketCommentListUIProps } from "./MarketCommnetList.types";
import MarketCommentQnAWrite from "./qna/write/MarketCommentQnAWrite.container";
import { useState } from "react";
import MarketCommentQnA from "./qna/MarketCommentQnA.container";

export default function MarketCommentListUI(props: IMarketCommentListUIProps) {
  const [isWriter, setIsWriter] = useState(false);

  const onClickWriter = () => {
    setIsWriter((prev) => !prev);
  };
  return (
    <S.Wrapper>
      <S.CommentWrapper>
        <S.MainWrapper>
          <S.Avatar src="/images/avatar.png" />
          <S.CommentInfo>
            <S.WriterWrapper>
              <S.Writer>{props.data.user.name}</S.Writer>
            </S.WriterWrapper>
            <S.Contents>{props.data.contents}</S.Contents>
            <S.CreatedAt>{getDate(props.data.createdAt)}</S.CreatedAt>
          </S.CommentInfo>
        </S.MainWrapper>
        <S.OptionWrapper>
          <S.CommentIcon
            src="/images/boardComment/list/option_comment_icon.png"
            onClick={onClickWriter}
          />
        </S.OptionWrapper>
      </S.CommentWrapper>
      {isWriter && (
        <MarketCommentQnAWrite commentId={props.data._id} isQnA={false} />
      )}
      <MarketCommentQnA commentId={props.data._id} />
    </S.Wrapper>
  );
}
