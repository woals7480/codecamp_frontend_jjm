import { gql, useMutation } from "@apollo/client";
import { ChangeEvent, useState } from "react";
import { useForm } from "react-hook-form";
import {
  IMutation,
  IMutationCreateBoardArgs,
} from "../../../src/commons/types/generated/types";

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
    }
  }
`;

interface IFormData {
  writer: string;
  password: string;
  title: string;
  contents: string;
}

export default function ImageUploadPage() {
  const { register, handleSubmit } = useForm<IFormData>({
    mode: "onChange",
  });
  const [createBoard] = useMutation<
    Pick<IMutation, "createBoard">,
    IMutationCreateBoardArgs
  >(CREATE_BOARD);
  const [iamgeUrl, setImageUrl] = useState("");

  const onChangeFile = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    const result = URL.createObjectURL(file);
    setImageUrl(result);
  };

  const onSubmit = async (data: IFormData) => {
    await createBoard({
      variables: {
        createBoardInput: {
          writer: data.writer,
          password: data.password,
          title: data.title,
          contents: data.contents,
        },
      },
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      작성자 : <input type="text" {...register("writer")} />
      <br />
      비밀번호 : <input type="password" {...register("password")} />
      <br />
      제목 : <input type="text" {...register("title")} />
      <br />
      내용 : <input type="text" {...register("contents")} />
      <br />
      사진 : <input type="file" onChange={onChangeFile} />
      <img src={iamgeUrl} />
      <br />
      사진 : <input type="file" onChange={onChangeFile} />
      <img src={iamgeUrl} />
      <br />
      사진 : <input type="file" onChange={onChangeFile} />
      <img src={iamgeUrl} />
      <button>등록</button>
    </form>
  );
}
