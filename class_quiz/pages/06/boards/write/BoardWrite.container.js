import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import ProductRegistrationUI from "./BoardWrite.presenter";
import { CREATE_PRODUCT } from "./BoardWrite.queries";

export default function ProductRegistration() {
  const router = useRouter();
  const [createProduct] = useMutation(CREATE_PRODUCT);
  const [seller, setSeller] = useState("");
  const [name, setName] = useState("");
  const [detail, setDetail] = useState("");
  const [price, setPrice] = useState("");

  const onChangeSeller = (e) => {
    setSeller(e.target.value);
  };

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangeDetail = (e) => {
    setDetail(e.target.value);
  };

  const onChangePrice = (e) => {
    setPrice(e.target.value);
  };

  const onClickSubmit = async () => {
    if (seller && name && detail && price) {
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
        alert("등록이 완료되었습니다");
        console.log(result);
        router.push(`detail-board/${result.data.createProduct._id}`);
      } catch (error) {
        alert(error.message);
      }
    }
  };

  return (
    <ProductRegistrationUI
      onClickSubmit={onClickSubmit}
      onChangeSeller={onChangeSeller}
      onChangeName={onChangeName}
      onChangeDetail={onChangeDetail}
      onChangePrice={onChangePrice}
    />
  );
}
