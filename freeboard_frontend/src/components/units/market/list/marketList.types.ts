import { IQuery, IUseditem } from "../../../../commons/types/generated/types";

export type IViewItem = Array<
  | Pick<
      IUseditem,
      | "__typename"
      | "_id"
      | "images"
      | "contents"
      | "name"
      | "pickedCount"
      | "price"
      | "remarks"
    >
  | undefined
>;

export interface IMarketListUIProps {
  data?: Pick<IQuery, "fetchUseditems">;
  onLoadMore: () => void;
  isEdit: boolean;
  viewItemsList: IViewItem;
  isSoldout: boolean;
  onClickSoldoutItem: () => void;
  onClickNonSoldoutItem: () => void;
}

export interface IMarketListProps {
  isEdit: boolean;
}

export interface ISoldout {
  isSold: boolean;
}
