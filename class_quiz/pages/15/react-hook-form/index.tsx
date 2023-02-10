import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Input01 from "../../../src/components/commons/inputs/01";
import Button01 from "../../../src/components/commons/bottons/01";

interface IFormData {
  writer: string;
  title: string;
  contents: string;
  password: string;
}

const schema = yup.object({
  writer: yup
    .string()
    .max(5, "작성자를 5자 이내로 입력해주세요.")
    .required("작성자를 입력해주세요."),
  title: yup
    .string()
    .max(100, "제목은 100자 이내로 입력해주세요.")
    .required("제목을 입력해주세요."),
  contents: yup
    .string()
    .max(1000, "내용은 1000자 이내로 입력해주세요.")
    .required("내용을 입력해주세요."),
  password: yup
    .string()
    .matches(
      /^[0-9a-zA-z!@#$%^&*()]{2,8}$/,
      "비밀번호는 영문, 숫자, 특수문자를 포함한 8자리이내로 입력해주세요."
    )
    .required("비밀번호를 입력해주새요."),
});

export default function ReactHookForm() {
  const { register, handleSubmit, formState } = useForm<IFormData>({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onClickSubmit = (data: IFormData) => {
    console.log(data);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onClickSubmit)}>
        <div>
          작성자 : <Input01 type="text" register={register("writer")} />
          <div>{formState.errors.writer?.message}</div>
        </div>
        <div>
          비밀번호 : <Input01 type="password" register={register("password")} />
          <div>{formState.errors.password?.message}</div>
        </div>
        <div>
          제목 : <Input01 type="text" register={register("title")} />
          <div>{formState.errors.title?.message}</div>
        </div>
        <div>
          내용 : <Input01 type="text" register={register("contents")} />
          <div>{formState.errors.contents?.message}</div>
        </div>
        <Button01 isActive={formState.isValid} title="등록하기" />
      </form>
    </>
  );
}
