import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import ProductRegistrationUI from "./BoardWrite.presenter";
import { CREATE_PRODUCT, UPDATE_PRODUCT } from "./BoardWrite.queries";

export default function ProductRegistration(props) {
  const router = useRouter();
  const [createProduct] = useMutation(CREATE_PRODUCT);
  const [updateProduct] = useMutation(UPDATE_PRODUCT);

  const [isTrue, setIsTrue] = useState(false);

  const [seller, setSeller] = useState("");
  const [name, setName] = useState("");
  const [detail, setDetail] = useState("");
  const [price, setPrice] = useState("");

  const onChangeSeller = (e) => {
    setSeller(e.target.value);
    if (e.target.value && name && detail && price) {
      setIsTrue(true);
    } else {
      setIsTrue(false);
    }
  };

  const onChangeName = (e) => {
    setName(e.target.value);
    if (seller && e.target.value && detail && price) {
      setIsTrue(true);
    } else {
      setIsTrue(false);
    }
  };

  const onChangeDetail = (e) => {
    setDetail(e.target.value);
    if (seller && name && e.target.value && price) {
      setIsTrue(true);
    } else {
      setIsTrue(false);
    }
  };

  const onChangePrice = (e) => {
    setPrice(e.target.value);
    if (seller && name && detail && e.target.value) {
      setIsTrue(true);
    } else {
      setIsTrue(false);
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

  const onClickUpdate = async () => {
    const updateInput = {};
    if (name) updateInput.name = name;
    if (detail) updateInput.detail = detail;
    if (price) updateInput.price = Number(price);

    try {
      const result = await updateProduct({
        variables: {
          productId: router.query.id,
          updateProductInput: updateInput,
        },
      });
      alert(result.data.updateProduct.message);
      console.log(result);
      router.push(`/08/detail-board/${result.data.updateProduct._id}`);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <ProductRegistrationUI
      onClickSubmit={onClickSubmit}
      onClickUpdate={onClickUpdate}
      onChangeSeller={onChangeSeller}
      onChangeName={onChangeName}
      onChangeDetail={onChangeDetail}
      onChangePrice={onChangePrice}
      isTrue={isTrue}
      isEdit={props.isEdit}
      data={props.data}
    />
  );
}
