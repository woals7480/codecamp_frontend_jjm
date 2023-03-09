import * as S from "./marketWrite.styles";
import { IMarketWriteUIProps } from "./marketWrite.types";

export default function MarketWriteUI(props: IMarketWriteUIProps) {
  return (
    <>
      <S.Wrapper>
        <S.Title>상품 등록하기</S.Title>
        <S.WriterWrapper>
          <S.WriterForm onSubmit={props.handleSubmit(props.onClickSubmit)}>
            {props.isOpen && (
              <S.AddressModal
                open={true}
                onOk={props.onToggleModal}
                onCancel={props.onToggleModal}
              >
                <S.AddressSearchInput
                  onComplete={props.onCompleteAddressSearch}
                />
              </S.AddressModal>
            )}
            <S.InputWrapper>
              <S.Label>상품명</S.Label>
              <S.Writer
                placeholder="상품명을 입력해주세요."
                type="text"
                {...props.register("name")}
              />
              <S.InputError>
                {props.formState.errors.name?.message}
              </S.InputError>
            </S.InputWrapper>
            <S.InputWrapper>
              <S.Label>한줄요약</S.Label>
              <S.Writer
                placeholder="상품 한줄요약을 입력해주세요."
                type="text"
                {...props.register("remarks")}
              />
              <S.InputError>
                {props.formState.errors.remarks?.message}
              </S.InputError>
            </S.InputWrapper>
            <S.InputWrapper>
              <S.Label>상품설명</S.Label>
              <S.ContentsInput onChange={props.onChangeContents} />
              <S.InputError>
                {props.formState.errors.contents?.message}
              </S.InputError>
            </S.InputWrapper>
            <S.InputWrapper>
              <S.Label>판매가격</S.Label>
              <S.Writer
                placeholder="판매가격을 입력해주세요."
                type="text"
                {...props.register("price")}
              />
              <S.InputError>
                {props.formState.errors.price?.message}
              </S.InputError>
            </S.InputWrapper>
            <S.InputWrapper>
              <S.Label>거래위치</S.Label>
              <S.ZipcodeWrapper>
                <S.Zipcode>
                  <S.ZipcodeInput readOnly {...props.register("zipcode")} />
                  <S.SearchButton onClick={props.onToggleModal}>
                    우편번호 검색
                  </S.SearchButton>
                </S.Zipcode>
                <S.Address readOnly {...props.register("address")} />
                <S.Address
                  {...props.register("addressDetail")}
                  placeholder="상세주소를 입력해주세요."
                />
              </S.ZipcodeWrapper>
            </S.InputWrapper>
            <S.ButtonWrapper>
              <S.SubmitButton>등록하기</S.SubmitButton>
            </S.ButtonWrapper>
          </S.WriterForm>
        </S.WriterWrapper>
      </S.Wrapper>
    </>
  );
}
