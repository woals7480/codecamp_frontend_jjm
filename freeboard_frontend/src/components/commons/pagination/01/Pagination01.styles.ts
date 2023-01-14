import styled from "@emotion/styled";

export const PaginationWrapper = styled.div`
  margin: 0 auto;
  padding-left: 85px;
`;

interface IPageProps {
  isActive?: boolean;
}

export const Page = styled.span`
  font-size: 20px;
  margin: 0 10px;
  color: ${(props: IPageProps) => (props.isActive ? "#5729FF" : "black")};
  font-weight: ${(props: IPageProps) => (props.isActive ? "bold" : "normal")};
  cursor: ${(props: IPageProps) => (props.isActive ? "none" : "pointer")};
`;
