import { gql, useMutation } from "@apollo/client";

const CREATE_BOARD = gql`
  mutation createBoard($writer: String, $title: String, $contents: String) {
    #타입적는곳 <-graphql 주석#
    createBoard(writer: $writer, title: $title, contents: $contents) {
      #실제 우리가 전달할 변수 적는 곳 <-graphql 주석#
      _id
      number
      message
    }
  }
`;

export default function GraphqlMutationPage() {
  const [나의함수] = useMutation(CREATE_BOARD);

  const onClickSubmit = async () => {
    const result = await 나의함수({
      variables: {
        //variables 이게 $ 역할
        writer: "철수",
        title: "안녕하세요!!",
        contents: "반갑습니다!!",
      },
    });
    console.log(result);
    alert(result.data.createBoard.message);
  };

  return (
    <>
      <button onClick={onClickSubmit}>GRAPHQL_API(동기) 요청하기</button>
    </>
  );
}
