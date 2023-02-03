import LayoutBanner from "./banner";
import LayoutHeader from "./header";
import LayoutNavigation from "./navigation";
import styled from "@emotion/styled";
import LayoutSidebar from "./sidebar";
import LayoutFooter from "./footer";

interface ILayoutprops {
  children: JSX.Element;
}

const Body = styled.div``;

export default function Layout(props: ILayoutprops) {
  return (
    <>
      <LayoutHeader />
      <LayoutBanner />
      <LayoutNavigation />
      <div style={{ display: "flex" }}>
        <LayoutSidebar />
        <Body>{props.children}</Body>
      </div>
      <LayoutFooter />
    </>
  );
}
