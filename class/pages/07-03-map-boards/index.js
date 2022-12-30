import { gql, useQuery } from "@apollo/client";
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

const Row = styled.div`
  display: flex;
`;

const Column = styled.div`
  width: 25%;
`;

export default function StaticRoutedPage() {
  const { data } = useQuery(FETCH_BOARDS);

  return (
    <>
      {data?.fetchBoards.map((item) => (
        <Row>
          <Column>
            <input type="checkbox" />
          </Column>
          <Column> 번호 :{item.number} </Column>
          <Column> 제목 :{item.title} </Column>
          <Column> 내용 :{item.contents} </Column>
        </Row>
      ))}
    </>
  );
}
