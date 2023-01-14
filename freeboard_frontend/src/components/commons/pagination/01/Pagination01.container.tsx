import Pagination01UI from "./Pagination01.presenter";
import { MouseEvent, useState } from "react";
import { IPagination01Props } from "./Pagination01.types";

export default function Pagination01(props: IPagination01Props) {
  const [startPage, setStartPage] = useState(1);
  const [activedPage, setActivedPage] = useState(1);

  const lastPage = props.count !== undefined ? Math.ceil(props.count / 10) : 0;

  const onClickPage = (event: MouseEvent<HTMLSpanElement>) => {
    const activedPage = Number(event.currentTarget.id);
    setActivedPage(activedPage);
    void props.refetch({ page: activedPage });
  };

  const onClickPrevPage = () => {
    if (startPage === 1) return;
    setStartPage(startPage - 10);
    setActivedPage(startPage - 10);
    void props.refetch({ page: startPage - 10 });
  };

  const onClickNextPage = () => {
    if (startPage + 10 <= lastPage) {
      setStartPage(startPage + 10);
      setActivedPage(startPage + 10);
      void props.refetch({ page: startPage + 10 });
    }
  };

  return (
    <Pagination01UI
      onClickPage={onClickPage}
      onClickPrevPage={onClickPrevPage}
      onClickNextPage={onClickNextPage}
      startPage={startPage}
      lastPage={lastPage}
      activedPage={activedPage}
    />
  );
}
