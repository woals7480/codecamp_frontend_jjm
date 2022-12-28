export default function ProductRegistrationUI(props) {
  return (
    <>
      <div>
        판매자 :{" "}
        <input
          placeholder="판매자를 입력해주세요."
          onChange={props.onChangeSeller}
          type="text"
        />
      </div>
      <div>
        상품명 :{" "}
        <input
          placeholder="상품명를 입력해주세요."
          onChange={props.onChangeName}
          type="text"
        />
      </div>
      <div>
        상품내용 :{" "}
        <input
          placeholder="상품내용를 입력해주세요."
          onChange={props.onChangeDetail}
          type="text"
        />
      </div>
      <div>
        상품가격 :{" "}
        <input
          placeholder="상품가격를 입력해주세요."
          onChange={props.onChangePrice}
          type="text"
        />
      </div>
      <button onClick={props.onClickSubmit}>등록하기</button>
    </>
  );
}
