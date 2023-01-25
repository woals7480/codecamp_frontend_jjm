import { getDate } from "../../../../commons/utils/utils";
import * as S from "./BoardDetail.styles";
import { IBoardDetailUIProps } from "./BoardDetail.types";
import { Tooltip } from "antd";

export default function BoardDetailUI(props: IBoardDetailUIProps) {
  return (
    <S.Wrapper>
      <S.CardWrapper>
        <S.Header>
          <S.AvatarWrapper>
            <S.Avatar src="/images/avatar.png" />
            <S.Info>
              <S.Writer>{props.data?.fetchBoard?.writer}</S.Writer>
              <S.CreatedAt>
                {getDate(props.data?.fetchBoard?.createdAt)}
              </S.CreatedAt>
            </S.Info>
          </S.AvatarWrapper>
          <S.IconWrapper>
            <S.LinkIcon src="/images/board/detail/link.png" />
            <Tooltip
              title={`${props.data?.fetchBoard.boardAddress?.address ?? ""} ${
                props.data?.fetchBoard.boardAddress?.addressDetail ?? ""
              }`}
            >
              <S.LocationIcon src="/images/board/detail/location.png" />
            </Tooltip>
          </S.IconWrapper>
        </S.Header>
        <S.Body>
          <S.TitleContentWrapper>
            <S.Title>{props.data?.fetchBoard?.title}</S.Title>
            <S.Contents>{props.data?.fetchBoard?.contents}</S.Contents>
            <S.Youtube
              url={props.data?.fetchBoard.youtubeUrl ?? ""}
              width="486px"
              height="240px"
            />
            <S.ImageWrapper>
              {props.data?.fetchBoard.images
                ?.filter((el: string) => el)
                .map((el: string) => (
                  <S.Image
                    src={`https://storage.googleapis.com/${el}`}
                    key={el}
                  />
                ))}
            </S.ImageWrapper>
          </S.TitleContentWrapper>
          <S.LikeWrapper>
            <S.LikeIconWrapper>
              <S.LikeIcon onClick={props.onClickLike} />
              <S.LikeCount>{props.data?.fetchBoard.likeCount}</S.LikeCount>
            </S.LikeIconWrapper>
            <S.LikeIconWrapper>
              <S.DisLikeIcon onClick={props.onClickDisLike} />
              <S.DisLikeCount>
                {props.data?.fetchBoard.dislikeCount}
              </S.DisLikeCount>
            </S.LikeIconWrapper>
          </S.LikeWrapper>
        </S.Body>
      </S.CardWrapper>
      <S.ButtonWrapper>
        <S.Button onClick={props.onClickMoveToBoardList}>목록으로</S.Button>
        <S.Button onClick={props.onClickMoveToBoardEdit}>수정하기</S.Button>
        <S.Button onClick={props.onClickDeleteBoard}>삭제하기</S.Button>
      </S.ButtonWrapper>
    </S.Wrapper>
  );
}
