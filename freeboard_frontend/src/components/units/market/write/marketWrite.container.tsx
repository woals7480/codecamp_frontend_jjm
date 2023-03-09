import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import MarketWriteUI from "./marketWrite.presenter";
import * as yup from "yup";
import { IFormData } from "./marketWrite.types";
import { useMutation } from "@apollo/client";
import { CREATE_USEDITEM } from "./marketWrite.queries";
import {
  IMutation,
  IMutationCreateUseditemArgs,
} from "../../../../commons/types/generated/types";
import { useRouter } from "next/router";
import { Modal } from "antd";
import { useState } from "react";
import { Address } from "react-daum-postcode";

const schema = yup.object({
  name: yup.string().required("상품명을 입력해주세요."),
  remarks: yup.string().required("상품 한줄요약을 입력해주세요."),
  contents: yup
    .string()
    .max(1000, "내용은 1000자 이내로 입력해주세요.")
    .required("상품내용을 입력해주세요."),
  price: yup
    .string()
    .matches(/^[0-9]+$/, "숫자만 입력해주세요.")
    .required("상품가격을 입력해주세요."),
});

export default function MarketWrite() {
  const { register, handleSubmit, formState, trigger, setValue } =
    useForm<IFormData>({
      resolver: yupResolver(schema),
      mode: "onChange",
    });
  const [createUseditem] = useMutation<
    Pick<IMutation, "createUseditem">,
    IMutationCreateUseditemArgs
  >(CREATE_USEDITEM);
  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);

  const onChangeContents = (value: string) => {
    setValue("contents", value === "<p><br></p>" ? "" : value);

    void trigger("contents");
  };

  const onClickSubmit = async (data: IFormData) => {
    console.log(data);
    // try {
    //   await createUseditem({
    //     variables: {
    //       createUseditemInput: {
    //         name: data.name,
    //         remarks: data.remarks,
    //         contents: data.contents,
    //         price: Number(data.price),
    //         useditemAddress: {
    //           zipcode: data.zipcode,
    //           address: data.address,
    //           addressDetail: data.addressDetail,
    //         },
    //       },
    //     },
    //   });
    //   Modal.success({ content: "상품등록에 성공하셨습니다." });
    //   console.log(data);
    //   void router.push("/markets");
    // } catch (error) {
    //   if (error instanceof Error) Modal.error({ content: error.message });
    // }
  };

  const onToggleModal = () => {
    setIsOpen((prev) => !prev);
  };

  const onCompleteAddressSearch = (data: Address) => {
    console.log(data);
    setValue("zipcode", data.zonecode);
    setValue("address", data.address);
    onToggleModal();
  };

  return (
    <MarketWriteUI
      onChangeContents={onChangeContents}
      onClickSubmit={onClickSubmit}
      register={register}
      handleSubmit={handleSubmit}
      formState={formState}
      onToggleModal={onToggleModal}
      isOpen={isOpen}
      onCompleteAddressSearch={onCompleteAddressSearch}
    />
  );
}
