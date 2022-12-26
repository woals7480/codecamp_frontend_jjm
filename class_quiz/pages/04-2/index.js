import { useMutation, gql } from "@apollo/client";

const CREATE_PRODUCT = gql`
  mutation productType(
    $seller: String
    $name: String
    $detail: String
    $price: Int
  ) {
    createProduct(
      seller: $seller
      createProductInput: { name: $name, detail: $detail, price: $price }
    ) {
      _id
      number
      message
    }
  }
`;

export default function GraphqlApiPage() {
  const [createProduct] = useMutation(CREATE_PRODUCT);

  const onClickSubmit = async () => {
    const result = await createProduct({
      variables: {
        seller: "파닥이",
        name: "키보드",
        detail: "빛이 나는 키보드",
        price: 30000,
      },
    });
    console.log(result);
  };

  return (
    <>
      <button onClick={onClickSubmit}>GRAPHQL-API 요청하기</button>
    </>
  );
}
