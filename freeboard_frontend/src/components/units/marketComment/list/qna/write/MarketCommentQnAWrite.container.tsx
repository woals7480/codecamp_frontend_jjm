import { useApolloClient } from "@apollo/client";
import { yupResolver } from "@hookform/resolvers/yup";
import { Modal } from "antd";
import { ChangeEvent, useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import {
  IMutation,
  IMutationCreateUseditemQuestionAnswerArgs,
  IQuery,
  IQueryFetchUseditemQuestionAnswersArgs,
} from "../../../../../../commons/types/generated/types";
import MarketCommentQnAWriteUI from "./MarketCommentQnAWrite.presenter";
import {
  CREATE_USEDITEM_QUESTION_ANSWER,
  FETCH_USEDITEM_QUESTION_ANSWERS,
} from "./MarketCommentQnAWrite.quries";
import {
  IFormData,
  IMarketCommentQnAProps,
} from "./MarketCommentQnAWrite.types";

const schema = yup
  .object({
    contents: yup
      .string()
      .max(100, "최대 100글자까지만 입력가능합니다.")
      .required("문의사항을 입력해주세요."),
  })
  .required();

export default function MarketCommentQnAWrite(props: IMarketCommentQnAProps) {
  const client = useApolloClient();
  const [contentsLength, setContentsLength] = useState(0);
  const { register, handleSubmit, formState, setValue } = useForm<IFormData>({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  const onClickSubmit = async (data: IFormData) => {
    try {
      await client.query<
        Pick<IQuery, "fetchUseditemQuestionAnswers">,
        IQueryFetchUseditemQuestionAnswersArgs
      >({
        query: FETCH_USEDITEM_QUESTION_ANSWERS,
        variables: {
          useditemQuestionId: props.commentId,
        },
      });
      await client.mutate<
        Pick<IMutation, "createUseditemQuestionAnswer">,
        IMutationCreateUseditemQuestionAnswerArgs
      >({
        mutation: CREATE_USEDITEM_QUESTION_ANSWER,
        variables: {
          createUseditemQuestionAnswerInput: { contents: data.contents },
          useditemQuestionId: props.commentId,
        },
        update(cache, { data }) {
          cache.modify({
            fields: {
              fetchUseditemQuestionAnswers: (prev) => {
                return [data?.createUseditemQuestionAnswer, ...prev];
              },
            },
          });
        },
      });
      Modal.success({ content: "답글이 등록되었습니다." });
      setValue("contents", "");
      setContentsLength(0);
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  const onChangeContents = async (event: ChangeEvent<HTMLTextAreaElement>) => {
    setContentsLength(event.target.value.length);
  };

  return (
    <MarketCommentQnAWriteUI
      onClickSubmit={onClickSubmit}
      register={register}
      handleSubmit={handleSubmit}
      formState={formState}
      onChangeContents={onChangeContents}
      contentsLength={contentsLength}
      isQnA={props.isQnA}
    />
  );
}
