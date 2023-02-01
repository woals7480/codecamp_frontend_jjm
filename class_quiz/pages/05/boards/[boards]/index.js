import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";

const FETCH_PRODUCT = gql`
  query fetchProduct($productId: ID) {
    fetchProduct(productId: $productId) {
      seller
      name
      detail
      price
    }
  }
`;

export default function BoardDetail() {
  const router = useRouter();

  const { data } = useQuery(FETCH_PRODUCT, {
    variables: { productId: router.query.boards },
  });

  console.log(data?.fetchProduct);

  return (
    <div>
      <div>판매자 : {data?.fetchProduct.seller}</div>
      <div>상품이름 : {data?.fetchProduct.name}</div>
      <div>상품내용 : {data?.fetchProduct.detail}</div>
      <div>상품가격 : {data?.fetchProduct.price}</div>
    </div>
  );
}
