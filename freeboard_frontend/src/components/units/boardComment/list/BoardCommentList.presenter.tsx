import { getDate } from "../../../../commons/utils/utils";
import * as S from "./BoardCommentList.styles";
import { IBoardCommentListUIProps } from "./BoardCommentList.types";

export default function BoardCommentListUI(props: IBoardCommentListUIProps) {
  return (
    <>
      {props.data?.fetchBoardComments.map((el) => (
        <S.CommentWrapper key={el._id}>
          <S.MainWrapper>
            <S.Avatar src="/images/avatar.png" />
            <S.CommentInfo>
              <S.WriterRating>
                <S.Writer>{el.writer}</S.Writer>
                <S.CommentRating disabled value={el.rating} />
              </S.WriterRating>
              <S.Contents>{el.contents}</S.Contents>
              <S.CreatedAt>{getDate(el?.createdAt)}</S.CreatedAt>
            </S.CommentInfo>
          </S.MainWrapper>
          <S.OptionWrapper>
            <S.UpdateIcon src="/images/boardComment/list/option_update_icon.png" />
            <S.DeleteIcon
              src="/images/boardComment/list/option_delete_icon.png"
              onClick={props.onClickDelete}
              id={el._id}
            />
          </S.OptionWrapper>
        </S.CommentWrapper>
      ))}
    </>
  );
}
