import { useRecoilValue } from "recoil";
import { userInfoState } from "../../../../commons/store";
import LayoutMypageUI from "./LayoutMypage.presenter";
import styled from "@emotion/styled";

interface ILayoutMypageProps {
  children: JSX.Element;
}

const Wrapper = styled.div`
  display: flex;
  width: 1200px;
`;

export default function LayoutMypage(props: ILayoutMypageProps) {
  const userInfo = useRecoilValue(userInfoState);

  return (
    <Wrapper>
      <LayoutMypageUI userInfo={userInfo} />
      <div style={{ width: "90vw" }}>{props.children}</div>
    </Wrapper>
  );
}
