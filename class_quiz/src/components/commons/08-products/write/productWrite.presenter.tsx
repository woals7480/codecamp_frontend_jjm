import { IProductWriteUIProps } from "./productWrite.types";

export default function ProductWriteUI(props: IProductWriteUIProps) {
  return (
    <div style={{ display: "flex", flexDirection: "column", width: "500px" }}>
      판매자 :{" "}
      <input
        type="text"
        onChange={props.onChangeSeller}
        defaultValue={props.data?.fetchProduct?.seller ?? ""}
      />
      상품이름 :{" "}
      <input
        type="text"
        onChange={props.onChangeName}
        defaultValue={props.data?.fetchProduct?.name ?? ""}
      />
      상품내용 :{" "}
      <input
        type="text"
        onChange={props.onChangeDetail}
        defaultValue={props.data?.fetchProduct?.detail ?? ""}
      />
      상품가격 :{" "}
      <input
        type="text"
        onChange={props.onChangePrice}
        defaultValue={props.data?.fetchProduct?.price ?? ""}
      />
      <button
        onClick={props.isEdit ? props.onClickUpdate : props.onClickSubmit}
      >
        {props.isEdit ? "수정하기" : "등록하기"}
      </button>
    </div>
  );
}
