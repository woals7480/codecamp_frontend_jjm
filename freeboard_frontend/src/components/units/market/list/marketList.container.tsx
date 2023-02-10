import { useQuery } from "@apollo/client";
import {
  IQuery,
  IQueryFetchUseditemsArgs,
} from "../../../../commons/types/generated/types";
import MarketListUI from "./marketList.presenter";
import { FETCH_USED_ITEMS } from "./marketList.queries";

export default function MarketList() {
  const { data } = useQuery<
    Pick<IQuery, "fetchUseditems">,
    IQueryFetchUseditemsArgs
  >(FETCH_USED_ITEMS);

  console.log(data?.fetchUseditems);

  return <MarketListUI data={data} />;
}
