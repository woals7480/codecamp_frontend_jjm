import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import ProductRegistrationUI from "./BoardWrite.presenter";
import { CREATE_PRODUCT } from "./BoardWrite.queries";

export default function ProductRegistration() {
  const router = useRouter();
  const [createProduct] = useMutation(CREATE_PRODUCT);

  const [isTrue, setIsTrue] = useState(false);

  const [seller, setSeller] = useState("");
  const [name, setName] = useState("");
  const [detail, setDetail] = useState("");
  const [price, setPrice] = useState("");

  const onChangeSeller = (e) => {
    setSeller(e.target.value);
    if (e.target.value && name && detail && price) {
      setIsTrue(true);
    }
  };

  const onChangeName = (e) => {
    setName(e.target.value);
    if (seller && e.target.value && detail && price) {
      setIsTrue(true);
    }
  };

  const onChangeDetail = (e) => {
    setDetail(e.target.value);
    if (seller && name && e.target.value && price) {
      setIsTrue(true);
    }
  };

  const onChangePrice = (e) => {
    setPrice(e.target.value);
    if (seller && name && detail && e.target.value) {
      setIsTrue(true);
    }
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
      isTrue={isTrue}
    />
  );
}
