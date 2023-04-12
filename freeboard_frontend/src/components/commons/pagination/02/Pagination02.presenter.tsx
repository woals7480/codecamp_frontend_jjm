import * as S from "./Pagination02.styles";
import { IPagination02UIProps } from "./Pagination02.types";

export default function Pagination02UI(props: IPagination02UIProps) {
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
