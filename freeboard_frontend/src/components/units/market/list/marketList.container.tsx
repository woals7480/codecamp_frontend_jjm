import { useQuery } from "@apollo/client";
import {
  IQuery,
  IQueryFetchUseditemsArgs,
} from "../../../../commons/types/generated/types";
import MarketListUI from "./MarketList.presenter";
import { FETCH_USED_ITEMS } from "./MarketList.queries";
import { IMarketListProps, IViewItem } from "./MarketList.types";
import { useEffect, useState } from "react";

export default function MarketList(props: IMarketListProps) {
  const [viewItemsList, setViewItemsList] = useState([]);
  const [isSoldout, setIsSoldout] = useState(false);
  const { data, fetchMore } = useQuery<
    Pick<IQuery, "fetchUseditems">,
    IQueryFetchUseditemsArgs
  >(FETCH_USED_ITEMS, { variables: { isSoldout } });
  const onLoadMore = () => {
    if (!data) return;

    void fetchMore({
      variables: { page: Math.ceil(data?.fetchUseditems.length / 10) + 1 },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult) {
          return {
            fetchUseditems: [...prev.fetchUseditems],
          };
        }

        return {
          fetchUseditems: [
            ...prev.fetchUseditems,
            ...fetchMoreResult.fetchUseditems,
          ],
        };
      },
    });
  };

  useEffect(() => {
    const viewItems = JSON.parse(localStorage.getItem("viewItem") ?? "").filter(
      (el: IViewItem) => {
        return el !== null;
      }
    );
    setViewItemsList(viewItems);
  }, []);

  const onClickSoldoutItem = () => {
    setIsSoldout(true);
  };
  const onClickNonSoldoutItem = () => {
    setIsSoldout(false);
  };

  return (
    <MarketListUI
      data={data}
      onLoadMore={onLoadMore}
      isEdit={props.isEdit}
      viewItemsList={viewItemsList}
      isSoldout={isSoldout}
      onClickSoldoutItem={onClickSoldoutItem}
      onClickNonSoldoutItem={onClickNonSoldoutItem}
    />
  );
}
