import { WithAuth } from "../../../src/components/commons/hocs/withAuth";
import MarketWrite from "../../../src/components/units/market/write/marketWrite.container";

function MarketWWritePage() {
  return <MarketWrite />;
}

export default WithAuth(MarketWWritePage);
