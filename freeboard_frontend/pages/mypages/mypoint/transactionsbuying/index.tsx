import LayoutMypage from "../../../../src/components/commons/layout/mypage/LayoutMypage.container";
import TransactionsBuyingPage from "../../../../src/components/units/mypage/mypoint/transactionsbuying/TransactionsBuying.container";

export default function TransactionsLoading() {
  return (
    <LayoutMypage page={"mypoint"}>
      <TransactionsBuyingPage />
    </LayoutMypage>
  );
}
