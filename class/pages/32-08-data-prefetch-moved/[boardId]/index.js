import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      writer
      title
      contents
    }
  }
`;

export default function StaticRoutedPage() {
  const router = useRouter();
  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query.boardId },
  });

  return (
    <div>
      <div>제목 : {data ? data.fetchBoard.title : "로딩중입니다..."}</div>
      <div>내용 : {data && data.fetchBoard.contents}</div>
      <div>번호 : {data?.fetchBoard.number}</div>
    </div>
  );
}
