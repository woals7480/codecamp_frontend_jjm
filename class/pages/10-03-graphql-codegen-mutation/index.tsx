import { gql, useMutation } from "@apollo/client";
import { ChangeEvent, useState } from "react";
import {
  IMutation,
  IMutationCreateBoardArgs,
} from "../../src/commons/types/generated/types";

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
  const [writer, setWriter] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const [나의함수] = useMutation<
    Pick<IMutation, "createBoard">,
    IMutationCreateBoardArgs
  >(CREATE_BOARD);

  const onClickSubmit = async () => {
    const result = await 나의함수({
      variables: {
        //variables 이게 $ 역할
        writer: writer,
        title: title,
        contents: contents,
      },
    });
    console.log(result);
    alert(result.data?.createBoard?.message);
  };

  const onChangeWriter = (event: ChangeEvent<HTMLInputElement>) => {
    setWriter(event.target.value);
  };

  const onChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const onChangeContents = (event: ChangeEvent<HTMLInputElement>) => {
    setContents(event.target.value);
  };

  return (
    <>
      작성자 : <input type="text" onChange={onChangeWriter} />
      <br />
      제목 : <input type="text" onChange={onChangeTitle} />
      <br />
      내용 : <input type="text" onChange={onChangeContents} />
      <br />
      <button onClick={onClickSubmit}>GRAPHQL_API(동기) 요청하기</button>
    </>
  );
}
