import { gql, useMutation, useQuery } from "@apollo/client";
import styled from "@emotion/styled";

const FETCH_BOARDS = gql`
  query fetchBoards {
    fetchBoards {
      number
      writer
      title
      contents
    }
  }
`;

const DELETE_BOARD = gql`
  mutation deleteBoard($number: Int) {
    deleteBoard(number: $number) {
      message
    }
  }
`;

const Row = styled.div`
  display: flex;
`;

const Column = styled.div`
  width: 20%;
`;

export default function StaticRoutedPage() {
  const { data } = useQuery(FETCH_BOARDS);
  const [deleteBoard] = useMutation(DELETE_BOARD);

  const onClickDelete = async (event) => {
    await deleteBoard({
      variables: {
        number: Number(event.target.id),
      },
      refetchQueries: [{ query: FETCH_BOARDS }],
    });
  };

  return (
    <>
      {data?.fetchBoards.map((item) => (
        <Row key={item.number}>
          <Column>
            <input type="checkbox" />
          </Column>
          <Column> 번호 :{item.number} </Column>
          <Column> 제목 :{item.title} </Column>
          <Column> 내용 :{item.contents} </Column>
          <Column>
            <button id={item.number} onClick={onClickDelete}>
              삭제
            </button>
          </Column>
        </Row>
      ))}
    </>
  );
}
