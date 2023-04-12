import _ from "lodash";
import { ChangeEvent } from "react";
import Searchbars02UI from "./Searchbars02.presenter";
import { ISearchbars02Props } from "./Searchbars02.types";

export default function Searchbars02(props: ISearchbars02Props) {
  const getDebounce = _.debounce((value) => {
    void props?.refetch({ search: value, page: 1 });
    void props?.refetchCount({ search: value });
    props.onChangeKeyword(value);
  }, 400);

  const onChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    getDebounce(event.target.value);
  };
  return <Searchbars02UI onChangeSearch={onChangeSearch} />;
}
