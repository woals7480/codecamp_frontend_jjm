import Head from "next/head";

declare const window: typeof globalThis & {
  IMP: any;
};

export default function PaymentLoadingPage() {
  const onClickPayment = () => {
    const IMP = window.IMP; // 생략 가능
    IMP.init("imp45415662"); // 예: imp00000000a

    IMP.request_pay(
      {
        // param
        pg: "nice",
        pay_method: "card",
        //   merchant_uid: "ORD20180131-0000011",
        name: "노르웨이 회전 의자",
        amount: 100,
        buyer_email: "gildong@gmail.com",
        buyer_name: "홍길동",
        buyer_tel: "010-4242-4242",
        buyer_addr: "서울특별시 강남구 신사동",
        buyer_postcode: "01181",
        m_redirect_url: "http://localhost:3000/18/payment/loading", // 모바일에서는 결제시, 결제페이지로 사이트가 이동됨
      },
      (rsp: any) => {
        // callback
        if (rsp.success) {
          console.log(rsp);
        } else {
          // 결제 실패 시 로직,
          alert("결제에 실패했습니다! 다시 시도해 주세요!");
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
      <button onClick={onClickPayment}>결제하기</button>
    </>
  );
}
