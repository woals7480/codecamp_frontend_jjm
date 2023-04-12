import * as S from "./MarketCommentQnAWrite.styles";
import { IMarketCommentQnAUIProps } from "./MarketCommentQnAWrite.types";

export default function MarketCommentQnAWriteUI(
  props: IMarketCommentQnAUIProps
) {
  return (
    <>
      {props.isQnA ? (
        <S.WrapperQnA>
          <S.ArrowIconWrapper>
            <S.ArrowIcon src="/images/boardComment/write/comment_arrow.png" />
          </S.ArrowIconWrapper>
          <form
            onSubmit={props.handleSubmit(props.onClickSubmit)}
            style={{ width: "1094px" }}
          >
            <S.ContentsWrapper>
              <S.Contents
                placeholder="답글을 등록해주세요."
                {...props.register("contents")}
                maxLength={100}
                onChange={props.onChangeContents}
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
        </S.WrapperQnA>
      ) : (
        <S.Wrapper>
          <S.ArrowIconWrapper>
            <S.ArrowIcon src="/images/boardComment/write/comment_arrow.png" />
          </S.ArrowIconWrapper>
          <form
            onSubmit={props.handleSubmit(props.onClickSubmit)}
            style={{ width: "1094px" }}
          >
            <S.ContentsWrapper>
              <S.Contents
                placeholder="답글을 등록해주세요."
                {...props.register("contents")}
                maxLength={100}
                onChange={props.onChangeContents}
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
      )}
    </>
  );
}
