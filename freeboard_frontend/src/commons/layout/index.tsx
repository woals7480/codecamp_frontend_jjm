import LayoutBanner from "./banner/LayoutBanner.container";
import LayoutHeader from "./header/LayoutHeader.container";
import LayoutNavigation from "./navigation/LayoutNavigation.container";
import styled from "@emotion/styled";

const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

interface ILayoutProps {
  children: JSX.Element;
}

export default function Layout(props: ILayoutProps) {
  return (
    <>
      <LayoutHeader />
      <LayoutBanner />
      <LayoutNavigation />
      <Body>{props.children}</Body>
    </>
  );
}
