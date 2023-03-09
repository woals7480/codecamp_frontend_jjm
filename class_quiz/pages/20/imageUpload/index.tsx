import { gql, useMutation } from "@apollo/client";
import { ChangeEvent, useState } from "react";
import { useForm } from "react-hook-form";
import {
  IMutation,
  IMutationCreateBoardArgs,
  IMutationUploadFileArgs,
} from "../../../../src/commons/types/generated/types";

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
    }
  }
`;

const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      _id
      url
    }
  }
`;

interface IFormData {
  writer: string;
  password: string;
  title: string;
  contents: string;
}

export default function ImageUploadPreloadPage() {
  const { register, handleSubmit } = useForm<IFormData>({
    mode: "onChange",
  });
  const [uploadFile] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOAD_FILE);
  const [createBoard] = useMutation<
    Pick<IMutation, "createBoard">,
    IMutationCreateBoardArgs
  >(CREATE_BOARD);
  const [imageUrls, setImageUrls] = useState(["", "", ""]);
  const [files, setFiles] = useState<File[]>([]);

  const onChangeFile =
    (index: number) => (event: ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0];
      if (!file) return;
      const result = URL.createObjectURL(file);
      const tempUrls = [...imageUrls];
      tempUrls[index] = result;
      setImageUrls(tempUrls);

      const tempFiles = [...files];
      tempFiles[index] = file;
      setFiles(tempFiles);
      console.log(tempFiles);
      console.log(tempUrls);
    };

  const onSubmit = async (data: IFormData) => {
    // const results = await Promise.all([
    //   uploadFile({ variables: { file: files[0] } }),
    //   uploadFile({ variables: { file: files[1] } }),
    //   uploadFile({ variables: { file: files[2] } }),
    // ]);

    const results = await Promise.all(
      files.map((el) => el && uploadFile({ variables: { file: el } }))
    );
    console.log(results);
    const resultUrls = results.map((el) =>
      el.data ? el.data?.uploadFile.url : ""
    );

    await createBoard({
      variables: {
        createBoardInput: {
          writer: data.writer,
          password: data.password,
          title: data.title,
          contents: data.contents,
          images: resultUrls,
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
      사진 : <input type="file" onChange={onChangeFile(0)} />
      <img src={imageUrls[0]} />
      <br />
      사진 : <input type="file" onChange={onChangeFile(1)} />
      <img src={imageUrls[1]} />
      <br />
      사진 : <input type="file" onChange={onChangeFile(2)} />
      <img src={imageUrls[2]} />
      <button>등록</button>
    </form>
  );
}
