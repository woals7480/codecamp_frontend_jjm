import * as S from "./BoardWrite.styles";

export default function ProductRegistrationUI(props) {
  return (
    <S.Wrapper>
      <S.InputWrapper>
        판매자 :{" "}
        <S.Input
          placeholder="판매자를 입력해주세요."
          onChange={props.onChangeSeller}
          type="text"
          defaultValue={props.data?.fetchProduct.seller}
        />
      </S.InputWrapper>
      <S.InputWrapper>
        상품명 :{" "}
        <S.Input
          placeholder="상품명를 입력해주세요."
          onChange={props.onChangeName}
          type="text"
          defaultValue={props.data?.fetchProduct.name}
        />
      </S.InputWrapper>
      <S.InputWrapper>
        상품내용 :{" "}
        <S.Input
          placeholder="상품내용를 입력해주세요."
          onChange={props.onChangeDetail}
          type="text"
          defaultValue={props.data?.fetchProduct.detail}
        />
      </S.InputWrapper>
      <S.InputWrapper>
        상품가격 :{" "}
        <S.Input
          placeholder="상품가격를 입력해주세요."
          onChange={props.onChangePrice}
          type="text"
          defaultValue={props.data?.fetchProduct.price}
        />
      </S.InputWrapper>
      <S.Button
        isTrue={props.isEdit ? true : props.isTrue}
        onClick={props.isEdit ? props.onClickUpdate : props.onClickSubmit}
      >
        {props.isEdit ? "수정하기" : "등록하기"}
      </S.Button>
    </S.Wrapper>
  );
}
