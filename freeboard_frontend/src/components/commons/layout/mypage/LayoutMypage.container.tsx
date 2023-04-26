import { useRecoilValue } from "recoil";
import { userInfoState } from "../../../../commons/store";
import LayoutMypageUI from "./LayoutMypage.presenter";
import styled from "@emotion/styled";
import { useAuth } from "../../hooks/useAuth";

interface ILayoutMypageProps {
  children: JSX.Element;
  page: string;
}

const Wrapper = styled.div`
  display: flex;
  width: 1200px;
`;

export default function LayoutMypage(props: ILayoutMypageProps) {
  useAuth();
  const userInfo = useRecoilValue(userInfoState);

  return (
    <Wrapper>
      <LayoutMypageUI userInfo={userInfo} page={props.page} />
      <div style={{ width: "90vw" }}>{props.children}</div>
    </Wrapper>
  );
}
