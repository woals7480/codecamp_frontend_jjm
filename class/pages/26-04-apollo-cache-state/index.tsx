import { gql, useMutation, useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../src/commons/types/generated/types";

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

const DELETE_BOARD = gql`
  mutation deletaBoard($boardId: ID!) {
    deleteBoard(boardId: $boardId)
  }
`;

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
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

const Column = styled.span`
  margin: 5px 10px;
`;

export default function StaticRoutedPage() {
  const { data } = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardsArgs>(
    FETCH_BOARDS
  );

  const [deleteBoard] = useMutation(DELETE_BOARD);
  const [createBoard] = useMutation(CREATE_BOARD);

  const onClickDelete = (boardId: string) => () => {
    void deleteBoard({
      variables: { boardId },
      update(cache, { data }) {
        cache.modify({
          fields: {
            fetchBoards: (prev, { readField }) => {
              const deletedId = data.deleteBoard; // 삭제된 ID
              const filteredPrev = prev.filter(
                (el) => readField("_id", el) !== deletedId // el._id가 안되므로, readFiled를 사용해서 꺼내오기
              );
              return [...filteredPrev]; // 삭제된 ID를 제외한 나머지 9기만 리턴
            },
          },
        });
      },
    });
  };

  const onClickCreate = () => {
    void createBoard({
      variables: {
        createBoardInput: {
          writer: "영희",
          password: "0000",
          title: "제목입니다.",
          contents: "내용입니다.",
        },
      },
      update(cache, { data }) {
        cache.modify({
          fields: {
            fetchBoards: (prev) => {
              return [data.createBoard, ...prev];
            },
          },
        });
      },
    });
  };

  return (
    <>
      {data?.fetchBoards.map((el) => (
        <Row key={el._id}>
          <Column> 제목 :{el.writer} </Column>
          <Column> 내용 :{el.title} </Column>
          <button onClick={onClickDelete(el._id)}>삭제하기</button>
        </Row>
      ))}
      <button onClick={onClickCreate}>등록하기</button>
    </>
  );
}
