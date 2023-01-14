import { Fragment } from "react";
import * as S from "./LayoutNavigation.styles";
import { ILayoutNavigationProps } from "./LayoutNavigation.type";

const NAVIGATION_MENUS = [
  { name: "라이브게시판", page: "/boards" },
  { name: "라이브상품", page: "/markets" },
  { name: "마이페이지", page: "/mypages" },
];

export default function LayoutNavigationUI(props: ILayoutNavigationProps) {
  return (
    <S.Wrapper>
      {NAVIGATION_MENUS.map((el) => (
        <Fragment key={el.name}>
          <S.MenuItem onClick={props.onClickMenu} id={el.page}>
            {el.name}
          </S.MenuItem>
        </Fragment>
      ))}
    </S.Wrapper>
  );
}
