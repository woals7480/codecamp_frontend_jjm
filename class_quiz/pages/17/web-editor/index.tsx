import { gql, useMutation } from "@apollo/client";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import "react-quill/dist/quill.snow.css";
import {
  IMutation,
  IMutationCreateBoardArgs,
} from "../../../src/commons/types/generated/types";

const ReactQuill = dynamic(async () => await import("react-quill"), {
  ssr: false,
});

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
    }
  }
`;

interface IFormValues {
  writer: string;
  password: string;
  title: string;
  contents: string;
}

export default function WebEditorPage() {
  const router = useRouter();
  const [createBoard] = useMutation<
    Pick<IMutation, "createBoard">,
    IMutationCreateBoardArgs
  >(CREATE_BOARD);
  const { register, handleSubmit, setValue, trigger } = useForm<IFormValues>({
    mode: "onChange",
  });

  const onChangeContents = (value: string) => {
    setValue("contents", value === "<p><br></p>" ? "" : value);
    void trigger("contents");
  };

  const onSubmit = async (data: IFormValues) => {
    const result = await createBoard({
      variables: {
        createBoardInput: {
          writer: data.writer,
          password: data.password,
          title: data.title,
          contents: data.contents,
        },
      },
    });
    if (typeof result.data?.createBoard._id !== "string") return;
    void router.push(`/17/web-editor/${result.data?.createBoard._id}`);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      작성자 : <input type="text" {...register("writer")} />
      비밀번호 : <input type="password" {...register("password")} />
      제목 : <input type="text" {...register("title")} />
      내용 : <ReactQuill theme="snow" onChange={onChangeContents} />
      <button>등록하기</button>
    </form>
  );
}
