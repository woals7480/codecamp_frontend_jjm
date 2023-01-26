import { gql, useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../src/commons/types/generated/types";
import { ChangeEvent, MouseEvent } from "react";
import _ from "lodash";

const FETCH_BOARDS = gql`
  query fetchBoards($page: Int, $search: String) {
    fetchBoards(page: $page, search: $search) {
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
    void refetch({ page: Number(event.currentTarget.id) }); // 검색에서 refetch할 때 , 사용한 search 검색어가 저장되어있는 상태이므로 추가로 search 포함하지 않아도 됨.
  };

  const getDebounce = _.debounce((value) => {
    void refetch({ search: value, page: 1 });
  }, 200);

  const onChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    getDebounce(event.target.value);
  };

  return (
    <>
      검색어 입력 : <input type="text" onChange={onChangeSearch} />
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
