import { gql, useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../src/commons/types/generated/types";
import { MouseEvent } from "react";

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
  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS);

  const onClickPage = (event: MouseEvent<HTMLSpanElement>) => {
    void refetch({ page: Number(event.currentTarget.id) });
  };

  return (
    <>
      {data?.fetchBoards.map((el) => (
        <Row key={el._id}>
          <Column> 제목 :{el.title} </Column>
          <Column> 내용 :{el.contents} </Column>
        </Row>
      ))}
      {new Array(10).fill(0).map((_, index) => (
        <span
          key={index + 1}
          id={String(index + 1)}
          onClick={onClickPage}
          style={{ marginRight: "5px" }}
        >
          {index + 1}
        </span>
      ))}
    </>
  );
}
