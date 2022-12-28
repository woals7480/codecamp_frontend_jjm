import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";

const CREATE_PRODUCT = gql`
  mutation createProduct(
    $seller: String
    $createProductInput: CreateProductInput!
  ) {
    createProduct(seller: $seller, createProductInput: $createProductInput) {
      _id
      number
      message
    }
  }
`;

export default function DynamicRoutedPage() {
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
    try {
      if (seller && name && detail && price) {
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
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <>
      <div>
        판매자 :{" "}
        <input
          placeholder="판매자를 입력해주세요."
          onChange={onChangeSeller}
          type="text"
        />
      </div>
      <div>
        상품명 :{" "}
        <input
          placeholder="상품명를 입력해주세요."
          onChange={onChangeName}
          type="text"
        />
      </div>
      <div>
        상품내용 :{" "}
        <input
          placeholder="상품내용를 입력해주세요."
          onChange={onChangeDetail}
          type="text"
        />
      </div>
      <div>
        상품가격 :{" "}
        <input
          placeholder="상품가격를 입력해주세요."
          onChange={onChangePrice}
          type="text"
        />
      </div>
      <button onClick={onClickSubmit}>등록하기</button>
    </>
  );
}
