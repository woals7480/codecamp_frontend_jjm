import * as S from "./MarketCommentWrite.styles";
import { IMarketCommentWriteUIProps } from "./MarketCommentWrite.types";

export default function MarketCommentWriteUI(
  props: IMarketCommentWriteUIProps
) {
  return (
    <S.Wrapper>
      <form onSubmit={props.handleSubmit(props.onClickSubmit)}>
        <S.CommentTitle>
          <S.PencilIcon src="/images/boardComment/write/pencil.png" />
          <S.Title>문의하기</S.Title>
        </S.CommentTitle>
        <S.ContentsWrapper>
          <S.Contents
            placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
            {...props.register("contents")}
            maxLength={100}
            onChange={props.onChangeLength}
          />
          <S.BottomWrapper>
            <S.ContentsLength>{props.contentsLength}/100</S.ContentsLength>
            <S.Button>등록하기</S.Button>
          </S.BottomWrapper>
        </S.ContentsWrapper>
        <S.ContentsError>
          {props.formState.errors.contents?.message}
        </S.ContentsError>
      </form>
    </S.Wrapper>
  );
}
