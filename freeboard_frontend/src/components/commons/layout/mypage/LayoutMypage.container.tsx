import { useRecoilValue } from "recoil";
import { userInfoState } from "../../../../commons/store";
import LayoutMypageUI from "./LayoutMypage.presenter";
import styled from "@emotion/styled";
import { useAuth } from "../../hooks/useAuth";
import { gql, useQuery } from "@apollo/client";
import { IQuery } from "../../../../commons/types/generated/types";

interface ILayoutMypageProps {
  children: JSX.Element;
  page: string;
}

const Wrapper = styled.div`
  display: flex;
  width: 1200px;
`;

const qwerasdf = gql`
  query fetchPointTransactions {
    fetchPointTransactions {
      _id
      impUid
      amount
      balance
      status
      statusDetail
      user {
        _id
        name
      }
    }
  }
`;

export default function LayoutMypage(props: ILayoutMypageProps) {
  useAuth();
  const userInfo = useRecoilValue(userInfoState);
  const { data } = useQuery<Pick<IQuery, "fetchPointTransactions">>(qwerasdf);
  console.log(userInfo);
  console.log(data?.fetchPointTransactions);

  return (
    <Wrapper>
      <LayoutMypageUI userInfo={userInfo} page={props.page} />
      <div style={{ width: "90vw" }}>{props.children}</div>
    </Wrapper>
  );
}
