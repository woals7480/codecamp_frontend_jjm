//34-05-jest-unit-test-mocking/index.tsx
import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";

export const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
      writer
      title
      contents
    }
  }
`;

export default function GraphqlMutationPage() {
  const router = useRouter();

  const [writer, setWriter] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const [createBoard] = useMutation(CREATE_BOARD);

  const onClickSubmit = async () => {
    console.log("await 윗부분");

    const result = await createBoard({
      variables: {
        createBoardInput: {
          writer,
          title,
          contents,
          password: "1234",
        },
      },
    });
    console.log("await 아랫부분");
    console.log(result);
    // alert(result.data.createBoard.message);
    router.push(`/boards/${result.data.createBoard._id}`);
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
      작성자:
      <input role="input-writer" type="text" onChange={onChangeWriter} />
      <br />
      제목: <input role="input-title" type="text" onChange={onChangeTitle} />
      <br />
      내용:
      <input role="input-contents" type="text" onChange={onChangeContents} />
      <br />
      <button role="submit-button" onClick={onClickSubmit}>
        GRAPHQL-API(동기) 요청하기
      </button>
    </>
  );
}
