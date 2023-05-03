import ViewitemsPageUI from "./Viewitems.presenter";

export default function ViewitemsPage() {
  const onClickViewitem = (viewItem) => () => {
    const viewItems = JSON.parse(sessionStorage.getItem("viewItem") ?? "[]");

    const temp = viewItems.filter((el) => el._id === viewItem._id);
    if (temp.length !== 0) {
      viewItems.push(viewItem);
      sessionStorage.setItem("viewItem", JSON.stringify(viewItem));
    }
    console.log(viewItem);
    console.log(viewItems);
  };

  return <ViewitemsPageUI />;
}
