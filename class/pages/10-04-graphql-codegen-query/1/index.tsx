import { gql, useQuery } from "@apollo/client";
import {
  IQuery,
  IQueryFetchBoardArgs,
} from "../../../src/commons/types/generated/types";

const FETCH_BOARD = gql`
  query fetchBoard($number: Int) {
    fetchBoard(number: $number) {
      number
      writer
      title
      contents
    }
  }
`;

export default function StaticRoutedPage() {
  const { data } = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(
    FETCH_BOARD,
    {
      variables: { number: 301 },
    }
  );

  console.log(data);

  return (
    <div>
      <div>작성자 : {data && data.fetchBoard?.writer}</div>
      <div>제목 : {data ? data.fetchBoard?.title : "로딩중입니다..."}</div>
      <div>내용 : {data && data.fetchBoard?.contents}</div>
      <div>번호 : {data?.fetchBoard?.number}</div>
    </div>
  );
}
