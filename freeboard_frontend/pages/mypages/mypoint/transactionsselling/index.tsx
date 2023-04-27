import LayoutMypage from "../../../../src/components/commons/layout/mypage/LayoutMypage.container";
import TransactionsSellingPage from "../../../../src/components/units/mypage/mypoint/transactionsselling/TransactionsSelling.container";

export default function TransactionsSelling() {
  return (
    <LayoutMypage page={"mypoint"}>
      <TransactionsSellingPage />
    </LayoutMypage>
  );
}
