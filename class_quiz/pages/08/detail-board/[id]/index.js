import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";

const FETCH_PRODUCT = gql`
  query fetchProduct($productId: ID) {
    fetchProduct(productId: $productId) {
      seller
      detail
      name
      price
    }
  }
`;

export default function DynamicRoutingPage() {
  const router = useRouter();
  const { data } = useQuery(FETCH_PRODUCT, {
    variables: { productId: router.query.id },
  });

  const onClickMoveToEdit = () => {
    router.push(`/08/detail-board/${router.query.id}/edit`);
  };

  console.log(data);
  return (
    <>
      <div>판매자 : {data ? data.fetchProduct.seller : "로딩중입니다..."}</div>
      <div>상품명 : {data ? data.fetchProduct.name : "로딩중입니다..."}</div>
      <div>
        상품내용 : {data ? data.fetchProduct.detail : "로딩중입니다..."}
      </div>
      <div>가격 : {data ? data.fetchProduct.price : "로딩중입니다..."}</div>
      <button onClick={onClickMoveToEdit}>수정하기</button>
    </>
  );
}
