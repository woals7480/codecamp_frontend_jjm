import styled from "@emotion/styled";
import { Modal } from "antd";
import Head from "next/head";
import { useRecoilValue } from "recoil";
import { accessTokenState, userInfoState } from "../../../../commons/store";
import { gql, useApolloClient } from "@apollo/client";
import {
  IMutation,
  IMutationCreatePointTransactionOfLoadingArgs,
} from "../../../../commons/types/generated/types";

const CREATE_POINT_TRANSACTION_OF_LOADING = gql`
  mutation createPointTransactionOfLoading($impUid: ID!) {
    createPointTransactionOfLoading(impUid: $impUid) {
      _id
    }
  }
`;

const PaymentButton = styled.button`
  margin-left: 10px;
  width: 120px;
  height: 40px;
  border-radius: 10px;
  border: none;
  background-color: #917be5;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
`;

declare const window: typeof globalThis & {
  IMP: any;
};

export default function PaymentButtonPage() {
  const userInfo = useRecoilValue(userInfoState);
  const accessToken = useRecoilValue(accessTokenState);
  const client = useApolloClient();
  console.log(userInfo);
  console.log(accessToken);

  const onClickPayment = () => {
    const IMP = window.IMP;
    IMP.init("imp45415662");

    IMP.request_pay(
      {
        pg: "nice",
        pay_method: "card",
        name: "포인트 충전",
        amount: 100,
        buyer_email: "gildong@gmail.com",
        buyer_name: "홍길동",
        buyer_tel: "010-4242-4242",
        buyer_addr: "서울특별시 강남구 신사동",
        buyer_postcode: "01181",
        m_redirect_url:
          "http://localhost:3000/mypages/mypoint/pointtransactions",
      },
      async (rsp: any) => {
        if (rsp.success) {
          console.log(rsp);
          await client.mutate<
            Pick<IMutation, "createPointTransactionOfLoading">,
            IMutationCreatePointTransactionOfLoadingArgs
          >({
            mutation: CREATE_POINT_TRANSACTION_OF_LOADING,
            variables: { impUid: rsp.imp_uid },
          });

          Modal.success({ content: "결제에 성공하였습니다." });
        } else {
          Modal.error({ content: "결제에 실패했습니다! 다시 시도해 주세요!" });
        }
      }
    );
  };

  return (
    <>
      <Head>
        <script
          type="text/javascript"
          src="https://code.jquery.com/jquery-1.12.4.min.js"
        ></script>
        <script
          type="text/javascript"
          src="https://cdn.iamport.kr/js/iamport.payment-1.2.0.js"
        ></script>
      </Head>
      <PaymentButton onClick={onClickPayment}>포인트 충전</PaymentButton>
    </>
  );
}
