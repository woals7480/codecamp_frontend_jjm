import * as S from "./MyfirebaseList.styles";
import { IMyfirebaseListUIProps } from "./MyfirebaseList.types";
import { v4 as uuidv4 } from "uuid";

export default function MyfirebaseListUI(props: IMyfirebaseListUIProps) {
  return (
    <S.Wrapper>
      <S.Row>
        <S.ColumnBasic>번호</S.ColumnBasic>
        <S.ColumnBasic>제목</S.ColumnBasic>
        <S.ColumnContents>내용</S.ColumnContents>
        <S.ColumnBasic>작성자</S.ColumnBasic>
      </S.Row>
      {props.dataBoards?.map((el, index) => (
        <S.Row key={uuidv4()}>
          <S.ColumnBasic>{index + 1}</S.ColumnBasic>
          <S.ColumnBasic>{el.title}</S.ColumnBasic>
          <S.ColumnContents>{el.contents}</S.ColumnContents>
          <S.ColumnBasic>{el.writer}</S.ColumnBasic>
        </S.Row>
      ))}
      <S.Button onClick={props.onClickMoveToBoardNew}>등록하기</S.Button>
    </S.Wrapper>
  );
}
