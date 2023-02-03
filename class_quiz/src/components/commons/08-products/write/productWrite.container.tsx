import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import {
  IMutation,
  IMutationCreateProductArgs,
  IMutationUpdateProductArgs,
} from "../../../../commons/types/generated/types";
import ProductWriteUI from "./productWrite.presenter";
import { CREATE_PRODUCT, UPDATE_PRODUCT } from "./productWrite.queries";
import {
  IProductWriteProps,
  IUpdateProductInputProps,
} from "./productWrite.types";

export default function ProductWrite(props: IProductWriteProps) {
  const [createProduct] = useMutation<
    Pick<IMutation, "createProduct">,
    IMutationCreateProductArgs
  >(CREATE_PRODUCT);
  const [updateProduct] = useMutation<
    Pick<IMutation, "updateProduct">,
    IMutationUpdateProductArgs
  >(UPDATE_PRODUCT);
  const router = useRouter();
  const [seller, setSeller] = useState("");
  const [name, setName] = useState("");
  const [detail, setDetail] = useState("");
  const [price, setPrice] = useState("");
  const onChangeSeller = (event: ChangeEvent<HTMLInputElement>) => {
    setSeller(event.target.value);
  };

  const onChangeName = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const onChangeDetail = (event: ChangeEvent<HTMLInputElement>) => {
    setDetail(event.target.value);
  };

  const onChangePrice = (event: ChangeEvent<HTMLInputElement>) => {
    setPrice(event.target.value);
  };

  const onClickSubmit = async () => {
    try {
      const result = await createProduct({
        variables: {
          seller,
          createProductInput: {
            name,
            detail,
            price: Number(price),
          },
        },
      });
      alert(result.data?.createProduct?.message);
      void router.push(
        `/08/products/${String(result.data?.createProduct?._id)}`
      );
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  const onClickUpdate = async () => {
    const updateProductInput: IUpdateProductInputProps = {};
    if (name) updateProductInput.name = name;
    if (detail) updateProductInput.detail = detail;
    if (price) updateProductInput.price = Number(price);

    try {
      const result = await updateProduct({
        variables: {
          productId: String(router.query.products),
          updateProductInput,
        },
      });
      alert(result.data?.updateProduct?.message);
      void router.push(`/08/products/${String(router.query.products)}`);
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  return (
    <ProductWriteUI
      onChangeSeller={onChangeSeller}
      onChangeName={onChangeName}
      onChangeDetail={onChangeDetail}
      onChangePrice={onChangePrice}
      onClickSubmit={onClickSubmit}
      onClickUpdate={onClickUpdate}
      isEdit={props.isEdit}
      data={props.data}
    />
  );
}
