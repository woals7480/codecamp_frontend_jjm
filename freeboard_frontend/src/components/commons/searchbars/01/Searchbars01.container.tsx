import Searchbars01UI from "./Searchbars01.presenter";
import _ from "lodash";
import { ChangeEvent } from "react";
import { ISearchbars01Props } from "./Searchbars01.types";

export default function Searchbars01(props: ISearchbars01Props) {
  const getDebounce = _.debounce((value) => {
    void props.refetch({ search: value, page: 1 });
    void props.refetchBoardsCount({ search: value });
    props.onChangeKeyword(value);
  }, 400);

  const onChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    getDebounce(event.target.value);
  };
  return <Searchbars01UI onChangeSearch={onChangeSearch} />;
}
