import { useAuth } from "../../src/components/commons/hooks/useAuth";
import LayoutMypage from "../../src/components/commons/layout/mypage/LayoutMypage.container";

export default function MyPages() {
  useAuth();

  return <LayoutMypage />;
}
