import { IProductDetailUIProps } from "./productDetail.types";

export default function ProductDetailUI(props: IProductDetailUIProps) {
  return (
    <div>
      <div>판매자 : {props.data?.fetchProduct.seller}</div>
      <div>상품이름 : {props.data?.fetchProduct.name}</div>
      <div>상품내용 : {props.data?.fetchProduct.detail}</div>
      <div>상품가격 : {props.data?.fetchProduct.price}</div>
      <button onClick={props.onClickMoveToEditPage}>수정하러가기</button>
    </div>
  );
}
