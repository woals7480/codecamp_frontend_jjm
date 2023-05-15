import LayoutBanner from "./banner/LayoutBanner.container";
import LayoutHeader from "./header/LayoutHeader.container";
import LayoutNavigation from "./navigation/LayoutNavigation.container";
import styled from "@emotion/styled";
import { useRouter } from "next/router";

const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

interface ILayoutProps {
  children: JSX.Element;
}

const HIDDEN_BANNERS = ["/login", "/join"];
const HIDDEN_NAVIGATION = ["/login", "/join"];

export default function Layout(props: ILayoutProps) {
  const router = useRouter();
  const isHiddenBanner = HIDDEN_BANNERS.includes(router.asPath);
  const isHiddenNavigation = HIDDEN_NAVIGATION.includes(router.asPath);
  return (
    <>
      <LayoutHeader />
      {!isHiddenBanner && <LayoutBanner />}
      {!isHiddenNavigation && <LayoutNavigation />}
      <Body>{props.children}</Body>
    </>
  );
}
