import { useQuery } from "@apollo/client";
import MarketBestitemsPageUI from "./MarketBestitems.presenter";
import { FETCH_USED_ITEMS_OF_THE_BEST } from "./MarketBestitems.queries";
import { IQuery } from "../../../../commons/types/generated/types";

export default function MarketBestitemsPage() {
  const { data } = useQuery<Pick<IQuery, "fetchUseditemsOfTheBest">>(
    FETCH_USED_ITEMS_OF_THE_BEST
  );

  return <MarketBestitemsPageUI data={data} />;
}
