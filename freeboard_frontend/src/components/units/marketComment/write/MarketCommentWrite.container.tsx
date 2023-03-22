import { useApolloClient } from "@apollo/client";
import { yupResolver } from "@hookform/resolvers/yup";
import { ChangeEvent, useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import {
  IMutation,
  IMutationCreateUseditemQuestionArgs,
} from "../../../../commons/types/generated/types";
import MarketCommentWriteUI from "./MarketCommentWrite.presenter";
import { CREATE_USEDITEM_QUESTION } from "./MarketCommentWrite.quries";
import { IFormData } from "./MarketCommentWrite.types";

const schema = yup
  .object({
    contents: yup
      .string()
      .max(100, "최대 100글자까지만 입력가능합니다.")
      .required("문의사항을 입력해주세요."),
  })
  .required();

export default function MarketCommentWrite() {
  const clinet = useApolloClient();
  const [contentsLength, setContentsLength] = useState(0);

  const { register, handleSubmit, formState } = useForm<IFormData>({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  const onClickSubmit = (data: IFormData) => {
    const result = clinet.mutate<
      Pick<IMutation, "createUseditemQuestion">,
      IMutationCreateUseditemQuestionArgs
    >({
      mutation: CREATE_USEDITEM_QUESTION,
      variables: {
        createUseditemQuestionInput: { contents: data.contents },
        useditemId: "asdfsd",
      },
    });

    console.log(result);
  };

  const onChangeLength = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setContentsLength(event.target.value.length);
  };

  return (
    <MarketCommentWriteUI
      onClickSubmit={onClickSubmit}
      register={register}
      handleSubmit={handleSubmit}
      formState={formState}
      onChangeLength={onChangeLength}
      contentsLength={contentsLength}
    />
  );
}
