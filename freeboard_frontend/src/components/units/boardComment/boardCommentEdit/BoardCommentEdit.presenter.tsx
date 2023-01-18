import { getDate } from "../../../../commons/utils/utils";
import * as S from "./BoardCommentEdit.styes";
import { IBoardCommentEditUIProps } from "./BoardCommentEdit.types";

export default function BoardCommentEditUI(props: IBoardCommentEditUIProps) {
  return (
    <div>
      {!props.isEdit && (
        <S.CommentWrapper>
          <S.MainWrapper>
            <S.Avatar src="/images/avatar.png" />
            <S.CommentInfo>
              <S.WriterRating>
                <S.Writer>{props.el.writer}</S.Writer>
                <S.CommentRating disabled value={props.el.rating} />
              </S.WriterRating>
              <S.Contents>{props.el.contents}</S.Contents>
              <S.CreatedAt>{getDate(props.el?.createdAt)}</S.CreatedAt>
            </S.CommentInfo>
          </S.MainWrapper>
          <S.OptionWrapper>
            <S.UpdateIcon
              src="/images/boardComment/list/option_update_icon.png"
              onClick={props.onClickUpdateIcon}
            />
            <S.DeleteIcon
              src="/images/boardComment/list/option_delete_icon.png"
              onClick={props.onClickDelete}
              id={props.el._id}
            />
          </S.OptionWrapper>
        </S.CommentWrapper>
      )}
      {props.isEdit && (
        <S.CommentEditWrapper>
          <S.InputWrapper>
            <S.Input
              placeholder="작성자"
              type="text"
              defaultValue={props.el.writer ?? ""}
              readOnly
            />
            <S.Input
              placeholder="비밀번호"
              type="password"
              onChange={props.onChangePassword}
            />
            <S.CommentRating
              onChange={props.setRating}
              defaultValue={props.el.rating}
            />
          </S.InputWrapper>
          <S.ContentsWrapper>
            <S.EditContents
              placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
              maxLength={100}
              onChange={props.onChangeContents}
              defaultValue={props.el.contents}
            />
            <S.BottomWrapper>
              <S.ContentsLength>{props.contents.length}/100</S.ContentsLength>
              <S.Button onClick={props.onClickUpdate}>수정하기</S.Button>
            </S.BottomWrapper>
          </S.ContentsWrapper>
        </S.CommentEditWrapper>
      )}
    </div>
  );
}
