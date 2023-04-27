import LayoutMypage from "../../../../src/components/commons/layout/mypage/LayoutMypage.container";
import TransactionsLoadingPage from "../../../../src/components/units/mypage/mypoint/transactionsloading/TransactionsLoading.container";

export default function TransactionsLoading() {
  return (
    <LayoutMypage page={"mypoint"}>
      <TransactionsLoadingPage />
    </LayoutMypage>
  );
}
