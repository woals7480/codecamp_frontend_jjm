import { gql, useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../src/commons/types/generated/types";
import { MouseEvent, useState } from "react";

const FETCH_BOARDS = gql`
  query fetchBoards($page: Int) {
    fetchBoards(page: $page) {
      _id
      writer
      title
      contents
    }
  }
`;

const Row = styled.div`
  display: flex;
`;

const Column = styled.div`
  margin: 5px 10px;
`;

export default function StaticRoutedPage() {
  const [startPage, setStartPage] = useState(1);

  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS);

  const onClickPage = (event: MouseEvent<HTMLSpanElement>) => {
    void refetch({ page: Number(event.currentTarget.id) });
  };

  const onClickPrevPage = () => {
    setStartPage((perv) => perv - 10);
    void refetch({ page: startPage - 10 });
  };

  const onClickNextPage = () => {
    setStartPage((perv) => perv + 10);
    void refetch({ page: startPage + 10 });
  };

  return (
    <>
      {data?.fetchBoards.map((el) => (
        <Row key={el._id}>
          <Column> 제목 :{el.title} </Column>
          <Column> 내용 :{el.contents} </Column>
        </Row>
      ))}
      <span onClick={onClickPrevPage}>이전페이지</span>
      {new Array(10).fill(0).map((_, index) => (
        <span
          key={index + startPage}
          id={String(index + startPage)}
          onClick={onClickPage}
          style={{ marginRight: "5px" }}
        >
          {index + startPage}
        </span>
      ))}
      <span onClick={onClickNextPage}>다음페이지</span>
    </>
  );
}
