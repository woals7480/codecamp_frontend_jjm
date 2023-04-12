import { Searchbar, SearchbarWrapper } from "./Searchbars02.styles";
import { ISearchbar02UIProps } from "./Searchbars02.types";

export default function Searchbars02UI(props: ISearchbar02UIProps) {
  return (
    <SearchbarWrapper>
      <Searchbar
        placeholder="제목을 입력해주세요"
        type="text"
        onChange={props.onChangeSearch}
      />
    </SearchbarWrapper>
  );
}
