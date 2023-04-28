import MarketBestitemsPage from "../../src/components/units/market/best/MarketBestitems.container";
import MarketList from "../../src/components/units/market/list/MarketList.container";

export default function MarketsListPage() {
  return (
    <>
      <MarketBestitemsPage />
      <MarketList isEdit={false} />;
    </>
  );
}
