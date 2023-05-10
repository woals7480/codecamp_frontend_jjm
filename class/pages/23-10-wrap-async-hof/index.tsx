import { gql, useMutation } from "@apollo/client";
import { wrapAsync } from "../../src/commons/libraries/asyncFunc";

const CREATE_BOARD = gql`
  mutation {
    createBoard(writer: "훈이", title: "제목입니다.", contents: "내용입니다.") {
      _id
      number
      message
    }
  }
`;

export default function GraphqlMutationPage(): JSX.Element {
  const [나의함수] = useMutation(CREATE_BOARD);

  const onClickSubmit = async (): Promise<void> => {
    const result = await 나의함수();
    console.log(result);
    alert(result.data.createBoard.message);
  };

  return (
    <>
      <button onClick={wrapAsync(onClickSubmit)}>
        GRAPHQL_API(동기) 요청하기
      </button>
    </>
  );
}
