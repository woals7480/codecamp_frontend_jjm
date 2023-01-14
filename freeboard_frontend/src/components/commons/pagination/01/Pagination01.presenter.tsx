import * as S from "./Pagination01.styles";
import { IPagination01UIProps } from "./Pagination01.types";

export default function Pagination01UI(props: IPagination01UIProps) {
  return (
    <S.PaginationWrapper>
      <S.Page onClick={props.onClickPrevPage}>{`<`}</S.Page>
      {new Array(10).fill(0).map(
        (_, index) =>
          props.startPage + index <= props.lastPage && (
            <S.Page
              key={index + props.startPage}
              onClick={props.onClickPage}
              id={String(index + props.startPage)}
              isActive={props.startPage + index === props.activedPage}
            >
              {props.startPage + index}
            </S.Page>
          )
      )}
      <S.Page onClick={props.onClickNextPage}>{`>`}</S.Page>
    </S.PaginationWrapper>
  );
}
