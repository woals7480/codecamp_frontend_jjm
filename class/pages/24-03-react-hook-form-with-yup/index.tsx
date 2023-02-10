import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

interface IFormData {
  writer: string;
  title: string;
  contents: string;
}

const myyup = yup.object({
  writer: yup.string().required("작성자를 입력해주세요."),
  title: yup.string().required("제목을 입력해주세요."),
  contents: yup.string().required("내용을 입력해주세요."),
});

export default function ReactHookFromPage() {
  const { register, handleSubmit } = useForm<IFormData>({
    resolver: yupResolver(myyup),
  });

  const onClickSubmit = (data: IFormData) => {
    console.log(data);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onClickSubmit)}>
        작성자 : <input type="text" {...register("writer")} />
        제목 : <input type="text" {...register("title")} />
        내용 : <input type="text" {...register("contents")} />
        <button>등록하기</button>
      </form>
    </>
  );
}

/*
    <button type="button">나만의 버튼</button>
    <button type="submit">보내기</button> // 기본값
    <button type="reset">지우기</button>
*/
