import { Searchbar, SearchbarWrapper } from "./Searchbars01.styles";
import { ISearchbar01UIProps } from "./Searchbars01.types";

export default function Searchbars01UI(props: ISearchbar01UIProps) {
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
