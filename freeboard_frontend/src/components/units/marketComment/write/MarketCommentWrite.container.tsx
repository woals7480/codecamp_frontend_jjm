import { useApolloClient } from "@apollo/client";
import { yupResolver } from "@hookform/resolvers/yup";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import {
  IMutation,
  IMutationCreateUseditemQuestionArgs,
  IQuery,
  IQueryFetchUseditemQuestionsArgs,
} from "../../../../commons/types/generated/types";
import MarketCommentWriteUI from "./MarketCommentWrite.presenter";
import {
  CREATE_USEDITEM_QUESTION,
  FETCH_USEDITEM_QUESTIONS,
} from "./MarketCommentWrite.quries";
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
  const router = useRouter();

  const { register, handleSubmit, formState, setValue } = useForm<IFormData>({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  const onClickSubmit = async (data: IFormData) => {
    try {
      await clinet.query<
        Pick<IQuery, "fetchUseditemQuestions">,
        IQueryFetchUseditemQuestionsArgs
      >({
        query: FETCH_USEDITEM_QUESTIONS,
        variables: {
          page: 1,
          useditemId: String(router.query.marketId),
        },
      });
      await clinet.mutate<
        Pick<IMutation, "createUseditemQuestion">,
        IMutationCreateUseditemQuestionArgs
      >({
        mutation: CREATE_USEDITEM_QUESTION,
        variables: {
          createUseditemQuestionInput: { contents: data.contents },
          useditemId: String(router.query.marketId),
        },
        update(cache, { data }) {
          cache.modify({
            fields: {
              fetchUseditemQuestions: (prev) => {
                return [data?.createUseditemQuestion, ...prev];
              },
            },
          });
        },
      });
      Modal.success({ content: "댓글이 등록되었습니다." });
      setValue("contents", "");
      setContentsLength(0);
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  const onChangeLength = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setContentsLength(event.target.value.length);
  };

  return (
    <MarketCommentWriteUI
      isQnA={false}
      onClickSubmit={onClickSubmit}
      register={register}
      handleSubmit={handleSubmit}
      formState={formState}
      onChangeLength={onChangeLength}
      contentsLength={contentsLength}
    />
  );
}
