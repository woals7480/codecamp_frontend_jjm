import { gql, useQuery } from "@apollo/client";
import {
  IQuery,
  IQueryFetchBoardsArgs,
  IQueryFetchBoardsCountArgs,
} from "../../../src/commons/types/generated/types";
import styled from "@emotion/styled";
import { v4 as uuidv4 } from "uuid";
import { ChangeEvent, MouseEvent, useState } from "react";
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

const FETCH_BOARDS_COUNT = gql`
  query fetchBoardsCount($search: String) {
    fetchBoardsCount(search: $search)
  }
`;

const Row = styled.div`
  display: flex;
`;

const Column = styled.div`
  margin: 10px;
`;

const PageNum = styled.span`
  margin: 20px;
  cursor: pointer;
  color: ${(props: Iprops) => (props.isActive ? "red" : "black")};
`;

const PageMove = styled.span`
  margin: 20px;
  cursor: pointer;
`;

interface Iprops {
  isActive: boolean;
}

export default function SearchBarPage() {
  const [keyword, setKeyword] = useState("");
  const [startPage, setStartPage] = useState(1);
  const [activePage, setActivePage] = useState(1);
  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS);
  const { data: dataBoardsCount, refetch: refetchBoardsCount } = useQuery<
    Pick<IQuery, "fetchBoardsCount">,
    IQueryFetchBoardsCountArgs
  >(FETCH_BOARDS_COUNT, { variables: { search: keyword } });

  const lastPage =
    dataBoardsCount != null
      ? Math.ceil(dataBoardsCount?.fetchBoardsCount / 10)
      : 0;

  const onClickPage = (event: MouseEvent<HTMLSpanElement>) => {
    const activedPage = Number(event.currentTarget.id);
    setActivePage(activedPage);
    void refetch({ page: activedPage });
  };

  const getDebounce = _.debounce((value) => {
    setKeyword(value);
    void refetch({ search: value, page: 1 });
    void refetchBoardsCount({ search: value });
  }, 500);

  const onChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    getDebounce(event.target.value);
  };

  const onClickPrevPage = () => {
    if (startPage === 1) return;
    setStartPage(startPage - 10);
    setActivePage(startPage - 10);
    void refetch({ page: startPage - 10 });
  };

  const onClickNextPage = () => {
    if (startPage + 10 <= lastPage) {
      setStartPage(startPage + 10);
      setActivePage(startPage + 10);
      void refetch({ page: startPage + 10 });
    }
  };
  return (
    <>
      검색어 입력 : <input type="text" onChange={onChangeSearch} />
      {data?.fetchBoards.map((el) => (
        <Row key={el._id}>
          <Column>{el._id.slice(0, 5)}</Column>
          <Column>{el.writer}</Column>
          <Column>
            {el.title
              .replace(keyword, `!#%&${keyword}!#%&`)
              .split("!#%&")
              .map((el) => (
                <span
                  key={uuidv4()}
                  style={{ color: el === keyword ? "orange" : "black" }}
                >
                  {el}
                </span>
              ))}
          </Column>
          <Column>{el.contents}</Column>
        </Row>
      ))}
      <PageMove onClick={onClickPrevPage}>❗</PageMove>
      {new Array(10).fill(0).map((_, index) => {
        return (
          index + startPage <= lastPage && (
            <PageNum
              key={uuidv4()}
              onClick={onClickPage}
              id={String(index + startPage)}
              isActive={index + startPage === activePage}
            >
              {index + startPage}
            </PageNum>
          )
        );
      })}
      <PageMove onClick={onClickNextPage}>❓</PageMove>
    </>
  );
}
