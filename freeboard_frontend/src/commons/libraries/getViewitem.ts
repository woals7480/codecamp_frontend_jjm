import { IUseditem } from "../types/generated/types";

type IViewItem = Array<
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

export const getViewitem = (viewItem: IUseditem | undefined) => {
  const viewItems: IViewItem = JSON.parse(
    sessionStorage.getItem("viewItem") ?? "[]"
  );

  const temp = viewItems.filter((el) => el?._id === viewItem?._id);
  if (temp.length === 1) {
    return;
  }
  viewItems.push(viewItem);
  sessionStorage.setItem("viewItem", JSON.stringify(viewItems));
};
