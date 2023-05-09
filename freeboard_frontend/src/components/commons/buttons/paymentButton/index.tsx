import styled from "@emotion/styled";
import { Button, Modal, Select } from "antd";
import Head from "next/head";
import { useRecoilState } from "recoil";
import { userInfoState } from "../../../../commons/store";
import { gql, useApolloClient, useQuery } from "@apollo/client";
import {
  IMutation,
  IMutationCreatePointTransactionOfLoadingArgs,
  IQuery,
} from "../../../../commons/types/generated/types";
import { useState } from "react";

const CREATE_POINT_TRANSACTION_OF_LOADING = gql`
  mutation createPointTransactionOfLoading($impUid: ID!) {
    createPointTransactionOfLoading(impUid: $impUid) {
      _id
      balance
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

const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      _id
      email
      name
      userPoint {
        _id
        amount
      }
    }
  }
`;

declare const window: typeof globalThis & {
  IMP: any;
};

export default function PaymentButtonPage() {
  const [userInfo, setUserInfo] = useRecoilState(userInfoState);
  const client = useApolloClient();
  const [isOpen, setIsOpen] = useState(false);
  const [amount, setAmount] = useState(100);
  const { data: dataUserLoggedIn } =
    useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN);
  const amountOptions = [
    { value: 100, label: "100원" },
    { value: 500, label: "500원" },
    { value: 1000, label: "1000원" },
    { value: 5000, label: "5000원" },
  ];

  const onToggleModal = () => {
    setIsOpen((prev) => !prev);
  };
  const onClickPayment = () => {
    const IMP = window.IMP;
    IMP.init("imp49910675");

    IMP.request_pay(
      {
        pg: "nice",
        pay_method: "card",
        name: "포인트 충전",
        amount,
        buyer_email: userInfo.email,
        buyer_name: userInfo.name,
        buyer_tel: "010-4242-4242",
        buyer_addr: "서울특별시 강남구 신사동",
        buyer_postcode: "01181",
        m_redirect_url:
          "http://localhost:3000/mypages/mypoint/pointtransactions",
      },
      async (rsp: any) => {
        if (rsp.success) {
          try {
            const result = await client.mutate<
              Pick<IMutation, "createPointTransactionOfLoading">,
              IMutationCreatePointTransactionOfLoadingArgs
            >({
              mutation: CREATE_POINT_TRANSACTION_OF_LOADING,
              variables: { impUid: rsp.imp_uid },
              update(cache, { data }) {
                cache.writeQuery({
                  query: FETCH_USER_LOGGED_IN,
                  data: {
                    fetchUserLoggedIn: {
                      UserPoint: {
                        __typename: "UserPoint",
                        _id: dataUserLoggedIn?.fetchUserLoggedIn.userPoint?._id,
                        amount: data?.createPointTransactionOfLoading.amount,
                      },
                    },
                  },
                });
              },
            });

            Modal.success({ content: "결제에 성공하였습니다." });
            setUserInfo({
              ...userInfo,
              userPoint: {
                _id: userInfo.userPoint?._id ?? "",
                amount:
                  result.data?.createPointTransactionOfLoading.balance ?? 0,
              },
            });
          } catch (error) {
            if (error instanceof Error) Modal.error({ content: error.message });
          }
        } else {
          Modal.error({ content: "결제에 실패했습니다! 다시 시도해 주세요!" });
        }
      }
    );
    setIsOpen((prev) => !prev);
    setAmount(100);
  };

  const onChangeValue = (value: number) => {
    setAmount(value);
  };
  console.log(userInfo);
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
      {isOpen && (
        <Modal
          open={true}
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
          onCancel={onToggleModal}
          footer={[
            <Button
              key="payment"
              style={{
                width: "100%",
                backgroundColor: "#bdbdbd",
                color: "white",
                height: "52px",
              }}
              onClick={onClickPayment}
            >
              충전하기
            </Button>,
          ]}
        >
          <div style={{ textAlign: "center", padding: "40px" }}>
            <img src="/images/pigIcon.png" />
          </div>
          <div
            style={{
              textAlign: "center",
              padding: "20px",
              fontSize: "20px",
              fontWeight: "bold",
            }}
          >
            충전하실 금액을 선택해주세요!
          </div>
          <Select
            style={{
              width: "384px",
            }}
            defaultValue={100}
            options={amountOptions}
            onChange={onChangeValue}
          />
        </Modal>
      )}
      <PaymentButton onClick={onToggleModal}>포인트 충전</PaymentButton>
    </>
  );
}
